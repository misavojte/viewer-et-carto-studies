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

<div class="w-full">
    <div class="overflow-x-auto overflow-y-hidden border-2 border-gray-300 rounded-xl shadow-lg bg-white" style="max-height: 90vh;">
      <table class="w-full min-w-max border-collapse">
        <thead class="bg-gradient-to-r from-blue-600 to-blue-700 sticky top-0 z-20 shadow-md">
          <tr>
            <th class="px-6 py-4 w-96 text-left font-bold text-white border-r border-blue-500 first:rounded-tl-xl">
              Study & Article Title
            </th>
            <th class="px-4 py-4 text-center font-bold text-white border-r border-blue-500">
              Experiment
            </th>
            <th class="px-4 py-4 text-center font-bold text-white border-r border-blue-500">
              Participants
            </th>
            <th class="px-4 py-4 w-32 text-center font-bold text-white border-r border-blue-500">
              Usability
            </th>
            <th class="px-4 py-4 w-32 text-center font-bold text-white border-r border-blue-500">
              Interactivity
            </th>
            <th class="px-4 py-4 w-32 text-center font-bold text-white border-r border-blue-500">
              Geoviz
            </th>
            <th class="px-4 py-4 w-32 text-center font-bold text-white border-r border-blue-500">
              Eye Tracking
            </th>
            <th class="px-4 py-4 w-64 text-center font-bold text-white border-r border-blue-500">
              Main Methods
            </th>
            <th class="px-4 py-4 w-64 text-center font-bold text-white border-r border-blue-500">
              Experiment Design
            </th>
            <th class="px-4 py-4 w-64 text-center font-bold text-white border-r border-blue-500">
              Eye-tracking Device
            </th>
            <th class="px-4 py-4 w-64 text-center font-bold text-white last:rounded-tr-xl">
              Eval. Software
            </th>
          </tr>
        </thead>
        <tbody class="bg-white overflow-y-auto max-h-[calc(90vh-100px)]">
          {#each data as study, index}
            <tr class="hover:bg-blue-50 transition-all duration-200 ease-in-out border-b border-gray-100 {index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:shadow-sm">
              <TableRow {study} {participantPercentiles} />
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div> 