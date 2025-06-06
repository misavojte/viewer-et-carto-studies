/* scripts/generate-data.ts
   Usage:  npx ts-node scripts/generate-data.ts
*/
import fs from 'node:fs';
import path from 'node:path';
import xlsx from 'xlsx';
import { fileURLToPath } from 'node:url';
import type { StudyRow } from '../src/lib/types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_XLSX = path.join(__dirname, '../input/table_studies.xlsx');
const OUTPUT_TS  = path.join(__dirname, '../src/lib/data.ts');

const newlineSplit = (v: unknown): string[] => {
  // Convert to string first to handle numbers properly
  const str = String(v ?? '').trim();
  if (!str) return [];
  return str
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean);
};

const parseParticipants = (v: unknown): string[] => {
  // Handle participants field - could be a number or a string
  if (typeof v === 'number') {
    return [String(v)];
  }
  if (typeof v === 'string') {
    const trimmed = v.trim();
    if (!trimmed) return [];
    // If it's a simple number as string, return as single item
    if (/^\d+$/.test(trimmed)) {
      return [trimmed];
    }
    // Otherwise, use newlineSplit for multi-line entries
    return newlineSplit(trimmed);
  }
  return [];
};

const parseLikert = (v: unknown): 1|2|3|4|5 => {
  const n = Number(v);
  if (![1,2,3,4,5].includes(n)) throw new Error(`Invalid Likert value: ${v}`);
  return n as 1|2|3|4|5;
};

const workbook = xlsx.readFile(INPUT_XLSX);
const sheet    = workbook.Sheets[workbook.SheetNames[0]];
const rowsRaw  = xlsx.utils.sheet_to_json<Record<string, unknown>>(sheet, {defval: ''});

const data: StudyRow[] = rowsRaw.map(r => ({
  study:                    String(r['Study'] ?? '').trim(),
  articleTitle:             String(r['Article Title'] ?? '').trim(),
  year:                     Number(r['Year']),
  doi:                      (String(r['DOI']).trim() || undefined),
  relevanceUsability:       parseLikert(r['Relevance for USABILITY EVALUATION (1 low, 5 high)']),
  relevanceInteractivity:   parseLikert(r['Relevance for INTERACTIVITY (1 low, 5 high)']),
  relevanceGeovisualization:parseLikert(r['Relevance for GEOVISUALIZATION (1 low, 5 high)']),
  relevanceEyeTracking:     parseLikert(r['Relevance for EYE-TRACKING (1 low, 5 high)']),
  mainMethods:              newlineSplit(r['Main method used']),
  studyWithExperiment:      String(r['Study with experiment']).trim(),
  experimentDesign:         newlineSplit(r['Experiment design']),
  eyeTrackingDevices:       newlineSplit(r['Type of eye-tracking device']),
  evaluationSoftware:       newlineSplit(r['Software used for data evaluation']),
  taskTypes:                newlineSplit(r['Types of tasks']),
  numberOfParticipants:     parseParticipants(r['Number of participants']),
  stimuli:                  newlineSplit(r['Stimulus used']),
  stimulusDevices:          newlineSplit(r['Stimulus device']),
  findings:                 newlineSplit(r['The main findings of the study'])
}));

const header = `/* Auto-generated from table_studies.xlsx — DO NOT EDIT */
import type { StudyRow } from '$lib/types';

export const data: readonly StudyRow[] = `;

const fileBody = JSON.stringify(data, null, 2) + ' as const;\n';

fs.writeFileSync(OUTPUT_TS, header + fileBody, 'utf8'); 