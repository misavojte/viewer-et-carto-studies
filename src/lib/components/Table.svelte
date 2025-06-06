<script lang="ts">
import { data } from '../data.js';
import TableRow from './TableRow.svelte';

// Calculate percentiles for participant values to handle outliers better
function calculateParticipantPercentiles() {
  const values: number[] = [];
  
  for (const study of data) {
    for (const participantString of study.numberOfParticipants) {
      // Check if it contains only numbers (e.g., "23")
      if (/^\d+$/.test(participantString.trim())) {
        values.push(parseInt(participantString.trim(), 10));
      }
      // Check if it contains numbers with plus signs (e.g., "15+20+30")
      else if (/^[\d+\s]+$/.test(participantString.trim())) {
        const numbers = participantString.trim().split('+').map(n => parseInt(n.trim(), 10));
        const maxInString = Math.max(...numbers);
        values.push(maxInString);
      }
    }
  }
  
  // Sort values for percentile calculation
  values.sort((a, b) => a - b);
  
  if (values.length === 0) {
    return { p20: 0, p40: 0, p60: 0, p80: 0, max: 0 };
  }
  
  const getPercentile = (p: number) => {
    const index = Math.floor((values.length - 1) * p);
    return values[index];
  };
  
  return {
    p20: getPercentile(0.2),
    p40: getPercentile(0.4), 
    p60: getPercentile(0.6),
    p80: getPercentile(0.8),
    max: values[values.length - 1]
  };
}

const participantPercentiles = calculateParticipantPercentiles();
</script>

<div class="w-full overflow-x-auto">
  <table class="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-700 border-r border-b border-gray-200">
          Study & Article Title
        </th>
        <th class="px-4 py-3 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Experiment
        </th>
        <th class="px-4 py-3 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Participants
        </th>
        <th class="px-4 py-3 w-32 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Usability
        </th>
        <th class="px-4 py-3 w-32 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Interactivity
        </th>
        <th class="px-4 py-3 w-32 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Geoviz
        </th>
        <th class="px-4 py-3 w-32 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Eye Tracking
        </th>
        <th class="px-4 py-3 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Main Methods
        </th>
        <th class="px-4 py-3 w-64 text-center font-semibold text-gray-700 border-r border-b border-gray-200">
          Experiment Design
        </th>
        <th class="px-4 py-3 w-64 text-center font-semibold text-gray-700 border-b border-gray-200">
          Eye-tracking Device
        </th>
      </tr>
    </thead>
    <tbody>
      {#each data as study}
        <tr class="hover:bg-gray-50 transition-colors">
          <TableRow {study} {participantPercentiles} />
        </tr>
      {/each}
    </tbody>
  </table>
</div> 