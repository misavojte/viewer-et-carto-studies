import type { StudyRow, FilterConfig, FilterField, FilterOperator } from '../types.js';

// Helper function to extract numeric value from participant strings (reused from sorting)
function extractParticipantCount(participants: string[]): number {
  if (participants.length === 0) return 0;
  
  let maxCount = 0;
  for (const participantString of participants) {
    if (/^\d+$/.test(participantString.trim())) {
      maxCount = Math.max(maxCount, parseInt(participantString.trim(), 10));
    }
    else if (/^[\d+\s]+$/.test(participantString.trim())) {
      const numbers = participantString.trim().split('+').map(n => parseInt(n.trim(), 10));
      maxCount = Math.max(maxCount, Math.max(...numbers));
    }
  }
  
  return maxCount;
}

// Get filterable value from a study row for a given field
function getFilterValue(study: StudyRow, field: FilterField): any {
  switch (field) {
    case 'year':
      return study.year;
    case 'articleTitle':
      return study.articleTitle.toLowerCase();
    case 'studyWithExperiment':
      return study.studyWithExperiment.toLowerCase();
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

// Apply a single filter rule to a study
function applyFilterRule(study: StudyRow, field: FilterField, operator: FilterOperator, value: string): boolean {
  const fieldValue = getFilterValue(study, field);
  const filterValue = value.trim();
  
  // Handle empty filter values
  if (filterValue === '') {
    return true; // Empty filters don't exclude anything
  }
  
  switch (operator) {
    case 'EQUALS':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return !isNaN(numValue) && fieldValue === numValue;
      }
      return String(fieldValue).toLowerCase() === filterValue.toLowerCase();
      
    case 'NOT_EQUALS':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return isNaN(numValue) || fieldValue !== numValue;
      }
      return String(fieldValue).toLowerCase() !== filterValue.toLowerCase();
      
    case 'CONTAINS':
      return String(fieldValue).toLowerCase().includes(filterValue.toLowerCase());
      
    case 'NOT_CONTAINS':
      return !String(fieldValue).toLowerCase().includes(filterValue.toLowerCase());
      
    case 'GREATER_THAN':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return !isNaN(numValue) && fieldValue > numValue;
      }
      return false;
      
    case 'LESS_THAN':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return !isNaN(numValue) && fieldValue < numValue;
      }
      return false;
      
    case 'GREATER_THAN_OR_EQUAL':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return !isNaN(numValue) && fieldValue >= numValue;
      }
      return false;
      
    case 'LESS_THAN_OR_EQUAL':
      if (typeof fieldValue === 'number') {
        const numValue = parseFloat(filterValue);
        return !isNaN(numValue) && fieldValue <= numValue;
      }
      return false;
      
    default:
      return true;
  }
}

// Main filtering function
export function filterStudies(studies: readonly StudyRow[], filterConfig: FilterConfig): StudyRow[] {
  if (filterConfig.length === 0) {
    return [...studies]; // Return copy of original array if no filtering
  }
  
  return studies.filter(study => {
    // Study must pass ALL filter rules (AND logic)
    return filterConfig.every(rule => 
      applyFilterRule(study, rule.field, rule.operator, rule.value)
    );
  });
} 