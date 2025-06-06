<script lang="ts">
import { tooltip } from '../directives/tooltip.js';

type PercentileData = {
  p20: number;
  p40: number;
  p60: number;
  p80: number;
  max: number;
};

interface Props {
  participantValues: string[];
  percentiles: PercentileData;
}

const { participantValues, percentiles }: Props = $props();

// Extract the highest numeric value from participant strings
function extractMaxNumericValue(values: string[]): number {
  let maxNum = 0;
  
  for (const value of values) {
    // Check if it contains only numbers (e.g., "23")
    if (/^\d+$/.test(value.trim())) {
      maxNum = Math.max(maxNum, parseInt(value.trim(), 10));
    }
    // Check if it contains numbers with plus signs (e.g., "15+20+30")
    else if (/^[\d+\s]+$/.test(value.trim())) {
      const numbers = value.trim().split('+').map(n => parseInt(n.trim(), 10));
      const maxInString = Math.max(...numbers);
      maxNum = Math.max(maxNum, maxInString);
    }
  }
  
  return maxNum;
}

// Calculate color based on percentile ranges (more robust against outliers)
function getBackgroundColor(value: number, percentiles: PercentileData): string {
  if (value === 0) {
    return 'bg-gray-300'; // Gray for NaN or 0
  }
  
  // Use percentile-based color mapping instead of simple normalization
  if (value < percentiles.p20) return 'bg-red-500';
  if (value < percentiles.p40) return 'bg-orange-500';
  if (value < percentiles.p60) return 'bg-yellow-500';
  if (value < percentiles.p80) return 'bg-lime-500';
  return 'bg-green-500';
}

// Format the display text
const displayText = $derived(() => {
  if (participantValues.length === 0) return 'Not specified';
  return participantValues.join(', ');
});

// Calculate the numeric value for color mapping
const numericValue = $derived(() => {
  return extractMaxNumericValue(participantValues);
});

// Check if value is parseable
const isParseable = $derived(() => {
  return numericValue() > 0;
});

// Get background color class
const backgroundColorClass = $derived(() => {
  if (!isParseable()) {
    return 'bg-gray-300';
  }
  return getBackgroundColor(numericValue(), percentiles);
});

// Get text color based on background
const textColorClass = $derived(() => {
  if (!isParseable()) {
    return 'text-gray-600';
  }
  // Use white text on colored backgrounds for better contrast
  return 'text-white';
});

// Get percentile information for tooltip
const getPercentileInfo = $derived(() => {
  if (!isParseable()) return '';
  const value = numericValue();
  
  if (value < percentiles.p20) return 'Below 20th percentile';
  if (value < percentiles.p40) return 'Between 20th-40th percentile';
  if (value < percentiles.p60) return 'Between 40th-60th percentile';
  if (value < percentiles.p80) return 'Between 60th-80th percentile';
  return 'Above 80th percentile';
});

// Generate tooltip content
const tooltipContent = $derived(() => {
  if (!isParseable()) {
    return 'Number not available, click for more details';
  }
  return `Participants: ${displayText()}\n${getPercentileInfo()}`;
});
</script>

<div class="flex justify-center">
  <span 
    class="text-sm px-2 py-1 rounded {backgroundColorClass()} {textColorClass()} font-medium cursor-help"
    use:tooltip={tooltipContent()}
  >
    {isParseable() ? displayText() : 'NaN'}
  </span>
</div> 