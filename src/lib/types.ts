/**
 * One parsed record from `table_studies.xlsx`.
 * Multi-line cells (`\n`) are split into trimmed array items.
 * Empty strings yield `undefined`.
 */
type Likert5 = 1 | 2 | 3 | 4 | 5;

export type StudyRow = {
  /** Citation string, e.g. `"Alam et al. (2017)"`. */
  study: string;

  /** Full article title. */
  articleTitle: string;

  /** Four-digit publication year. */
  year: number;

  /** Digital Object Identifier (plain text, unprefixed). */
  doi?: string;

  /** Relevance to usability evaluation on a 1–5 scale (never null). */
  relevanceUsability: Likert5;

  /** Relevance to interactivity on a 1–5 scale (never null). */
  relevanceInteractivity: Likert5;

  /** Relevance to geovisualization on a 1–5 scale (never null). */
  relevanceGeovisualization: Likert5;

  /** Relevance to eye-tracking on a 1–5 scale (never null). */
  relevanceEyeTracking: Likert5;

  /** Primary methodological labels; newline-separated cell → list. */
  mainMethods: string[];

  /** Textual flag indicating whether the paper reports an experiment. */
  studyWithExperiment: string;

  /** Experimental design descriptors; newline-separated → list. */
  experimentDesign: string[];

  /** Eye-tracking hardware descriptions; newline-separated → list. */
  eyeTrackingDevices: string[];

  /** Software used for data processing/evaluation; newline-separated → list. */
  evaluationSoftware: string[];

  /** Task type descriptions given to participants; newline-separated → list. */
  taskTypes: string[];

  /** Reported participant counts or subgroup breakdowns; newline-separated → list. */
  numberOfParticipants: string[];

  /** Stimuli presented during the study; newline-separated → list. */
  stimuli: string[];

  /** Device(s) on which stimuli were shown; newline-separated → list. */
  stimulusDevices: string[];

  /** Main findings; newline-separated → list. */
  findings: string[];
}; 