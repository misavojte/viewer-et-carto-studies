<script lang="ts">
import { data } from '../data.js';
import TableRow from './TableRow.svelte';
import StudyDetailModal from './StudyDetailModal.svelte';
import Sorter from './Sorter.svelte';
import Filter from './Filter.svelte';
import { sortStudies } from '../utils/sorting.js';
import { filterStudies } from '../utils/filtering.js';
import type { SortConfig, FilterConfig } from '../types.js';
import { onMount, onDestroy } from 'svelte';
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

let cleanup: (() => void) | null = null;

onMount(() => {
  const headerScroll = document.getElementById('header-scroll');
  const bodyScroll = document.getElementById('body-scroll');
  
  if (headerScroll && bodyScroll) {
    // Calculate the scrollbar width of the body
    const scrollbarWidth = bodyScroll.offsetWidth - bodyScroll.clientWidth;
    
    // Add padding-right to header scroll area to match body's effective width
    headerScroll.style.paddingRight = `${scrollbarWidth}px`;
    
    // Sync header scroll when body scrolls horizontally
    const handleScroll = () => {
      headerScroll.scrollLeft = bodyScroll.scrollLeft;
    };
    
    bodyScroll.addEventListener('scroll', handleScroll, { passive: true });
    
    // Setup cleanup function
    cleanup = () => {
      bodyScroll.removeEventListener('scroll', handleScroll);
      headerScroll.style.paddingRight = '';
    };
  }
});

onDestroy(() => {
  cleanup?.();
});
</script>

<style>
	/* Simplified scrollbar styling */
	.custom-scrollbar {
		scrollbar-width: thin;
		scrollbar-color: #9ca3af #f3f4f6;
	}
	
	.custom-scrollbar::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	
	.custom-scrollbar::-webkit-scrollbar-track {
		background: #f3f4f6;
	}
	
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #9ca3af;
		border-radius: 4px;
	}
	
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #6b7280;
	}
	
	/* Hidden scrollbar for header */
	.header-scroll-hidden {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	
	.header-scroll-hidden::-webkit-scrollbar {
		display: none;
	}
</style>

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
	<div class="overflow-x-auto border-2 border-gray-300 rounded-lg shadow-lg bg-white">
		<div class="min-w-fit flex justify-center">
			<div class="inline-block">
				<!-- Fixed header - NEVER SCROLLS VERTICALLY -->
				<div id="header-container" class="max-w-fit border-2 border-blue-700 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg overflow-hidden">
					<div id="header-scroll" class="overflow-x-auto header-scroll-hidden" style="scrollbar-gutter: stable;">
						<table class="border-separate border-spacing-0" style="table-layout: fixed; width: 2168px;">
							<thead>
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
						</table>
					</div>
				</div>

				<!-- Scrollable body - ONLY THIS SCROLLS VERTICALLY -->
				<div class="max-w-fit border-l-2 border-r-2 border-b-2 border-gray-300 shadow-lg bg-white rounded-b-lg overflow-hidden">
					<div id="body-scroll" class="custom-scrollbar overflow-auto" style="max-height: 80vh; scrollbar-gutter: stable;">
						<table class="border-separate border-spacing-0" style="table-layout: fixed; width: 2168px;">
							<tbody class="bg-white">
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
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
