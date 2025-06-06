import type { StudyRow, SortConfig, SortField, SortDirection } from '../types.js';

// Helper function to extract numeric value from participant strings
function extractParticipantCount(participants: string[]): number {
  if (participants.length === 0) return 0;
  
  let maxCount = 0;
  for (const participantString of participants) {
    // Check if it contains only numbers (e.g., "23")
    if (/^\d+$/.test(participantString.trim())) {
      maxCount = Math.max(maxCount, parseInt(participantString.trim(), 10));
    }
    // Check if it contains numbers with plus signs (e.g., "15+20+30")
    else if (/^[\d+\s]+$/.test(participantString.trim())) {
      const numbers = participantString.trim().split('+').map(n => parseInt(n.trim(), 10));
      maxCount = Math.max(maxCount, Math.max(...numbers));
    }
  }
  
  return maxCount;
}

// Helper function to normalize experiment values for consistent sorting
function normalizeExperiment(experiment: string): number {
  const lower = experiment.toLowerCase().trim();
  if (lower.includes('yes')) return 1;
  if (lower.includes('no')) return 0;
  return 0.5; // for any ambiguous values
}

// Get sortable value from a study row for a given field
function getSortValue(study: StudyRow, field: SortField): any {
  switch (field) {
    case 'year':
      return study.year;
    case 'articleTitle':
      return study.articleTitle.toLowerCase();
    case 'studyWithExperiment':
      return normalizeExperiment(study.studyWithExperiment);
    case 'numberOfParticipants':
      return extractParticipantCount(study.numberOfParticipants);
    case 'relevanceUsability':
      return study.relevanceUsability;
    case 'relevanceInteractivity':
      return study.relevanceInteractivity;
    case 'relevanceGeovisualization':
      return study.relevanceGeovisualization;
    case 'relevanceEyeTracking':
      return study.relevanceEyeTracking;
    default:
      return '';
  }
}

// Compare two values based on sort direction
function compareValues(a: any, b: any, direction: SortDirection): number {
  let result = 0;
  
  if (a < b) result = -1;
  else if (a > b) result = 1;
  else result = 0;
  
  return direction === 'ASC' ? result : -result;
}

// Main sorting function - now accepts readonly arrays
export function sortStudies(studies: readonly StudyRow[], sortConfig: SortConfig): StudyRow[] {
  if (sortConfig.length === 0) {
    return [...studies]; // Return copy of original array if no sorting
  }
  
  return [...studies].sort((a, b) => {
    for (const rule of sortConfig) {
      const valueA = getSortValue(a, rule.field);
      const valueB = getSortValue(b, rule.field);
      
      const comparison = compareValues(valueA, valueB, rule.direction);
      
      if (comparison !== 0) {
        return comparison; // If values are different, return this comparison
      }
      // If values are equal, continue to next sort rule
    }
    
    return 0; // All sort rules resulted in equal values
  });
} 