<script lang="ts">
import { data } from '../data.js';
import TableRow from './TableRow.svelte';
import StudyDetailModal from './StudyDetailModal.svelte';
import Sorter from './Sorter.svelte';
import Filter from './Filter.svelte';
import { sortStudies } from '../utils/sorting.js';
import { filterStudies } from '../utils/filtering.js';
import type { SortConfig, FilterConfig } from '../types.js';
import { modal } from '../directives/modal.js';

// Sort configuration state using Svelte 5 $state rune
let sortConfig = $state<SortConfig>([]);

// Filter configuration state using Svelte 5 $state rune
let filterConfig = $state<FilterConfig>([]);

// Computed filtered and sorted data using Svelte 5 $derived rune
const processedData = $derived((() => {
  // First apply filters, then apply sorting
  const filtered = filterStudies(data, filterConfig);
  return sortStudies(filtered, sortConfig);
})());

// Handle sort configuration changes
function handleSortChange(newConfig: SortConfig) {
  sortConfig = newConfig;
}

// Handle filter configuration changes
function handleFilterChange(newConfig: FilterConfig) {
  filterConfig = newConfig;
}

// Memoize percentile calculation to avoid recalculating on every render
const participantPercentiles = (() => {
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
})();
</script>

<div class="w-full mb-8">
	<!-- Section Title -->
	<div class="mb-8 max-w-2xl mx-auto text-center">
		<h2 class="text-3xl font-bold text-gray-900 mb-2 leading-tight">Apply filter and sorting rules</h2>
		<p class="text-gray-600 text-lg leading-relaxed">Configure your filtering and sorting preferences below</p>
	</div>
	
	<!-- Sorting and Filtering Configuration - Responsive Layout -->
	<div class="max-w-4xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
			<!-- Filter Configuration -->
			<div class="h-full">
				<Filter 
					{filterConfig} 
					onFilterChange={handleFilterChange}
				/>
			</div>
			
			<!-- Sorting Configuration -->
			<div class="h-full">
				<Sorter 
					{sortConfig} 
					onSortChange={handleSortChange}
				/>
			</div>
		</div>
	</div>
</div>

<!-- Table Header -->
<div class="w-full mb-8">
	<div class="mb-6 max-w-2xl mx-auto text-center">
		<h2 class="text-3xl font-bold text-gray-900 mb-3 leading-tight">Interactive Table</h2>
		<p class="text-lg text-gray-600 leading-relaxed">
			Click on any record to view the details. Showing <span class="font-semibold text-gray-900">{processedData.length}</span> out of <span class="font-semibold text-gray-900">{data.length}</span> records
			{#if processedData.length !== data.length}
				<span class="text-blue-600 font-semibold ml-1">({data.length - processedData.length} filtered out)</span>
			{/if}
		</p>
	</div>
</div>

<!-- Table.svelte -->
<div class="w-full">
	<div class="overflow-auto border-2 border-gray-300 rounded-lg shadow-lg bg-white" style="max-height: 80vh;">
		<div class="min-w-fit flex justify-center">
			<table class="border-separate border-spacing-0" style="table-layout: fixed; width: 2168px;">
				<thead class="bg-gradient-to-r from-blue-600 to-blue-700 sticky top-0 z-10">
					<tr>
						<th class="px-6 py-4 text-left font-bold text-white border-r border-blue-300" style="width: 384px;">
							Study & Article Title
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 120px;">
							Experiment
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 120px;">
							Participants
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 128px;">
							Usability
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 128px;">
							Interactivity
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 128px;">
							Geoviz
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 128px;">
							Eye Tracking
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 256px;">
							Main Methods
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 256px;">
							Experiment Design
						</th>
						<th class="px-4 py-4 text-center font-bold text-white border-r border-blue-300" style="width: 256px;">
							Eye-tracking Device
						</th>
						<th class="px-4 py-4 text-center font-bold text-white" style="width: 256px;">
							Eval. Software
						</th>
					</tr>
				</thead>
				<tbody class="bg-white">
					{#if processedData.length === 0}
						<tr class="bg-gray-50">
							<td colspan="11" class="px-6 py-12 text-center">
								<div class="flex flex-col items-center justify-center text-gray-500">
									<svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
									</svg>
									<h3 class="text-lg font-medium text-gray-900 mb-2">No studies found</h3>
									<p class="text-sm text-gray-500 max-w-sm">
										{#if filterConfig.length > 0}
											No studies match your current filter criteria. Try adjusting your filters or clearing them to see more results.
										{:else}
											No study data is currently available.
										{/if}
									</p>
									{#if filterConfig.length > 0}
										<button
											type="button"
											onclick={() => handleFilterChange([])}
											class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
										>
											Clear all filters
										</button>
									{/if}
								</div>
							</td>
						</tr>
					{:else}
						{#each processedData as study, index}
							<tr class="border-b border-gray-200 {index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
								use:modal={{
									content: { 
										component: StudyDetailModal, 
										props: { study } 
									},
									config: {
										title: study.study,
										size: 'xl',
										closable: true,
										backdrop: true
									}
								}}>
								<TableRow {study} {participantPercentiles} />
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
