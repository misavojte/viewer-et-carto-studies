<script lang="ts">
import type { SortConfig, SortRule, SortField, SortDirection } from '../types.js';
import { SORT_FIELD_LABELS } from '../types.js';

interface Props {
  sortConfig: SortConfig;
  onSortChange: (config: SortConfig) => void;
}

const { sortConfig, onSortChange }: Props = $props();

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

function addSortRule(): void {
  const newRule: SortRule = {
    id: generateId(),
    field: 'year',
    direction: 'DESC'
  };
  onSortChange([...sortConfig, newRule]);
}

function removeSortRule(id: string): void {
  onSortChange(sortConfig.filter(rule => rule.id !== id));
}

function updateSortRule(id: string, updates: Partial<Omit<SortRule, 'id'>>): void {
  onSortChange(
    sortConfig.map(rule => 
      rule.id === id ? { ...rule, ...updates } : rule
    )
  );
}

function toggleDirection(id: string): void {
  const rule = sortConfig.find(r => r.id === id);
  if (rule) {
    updateSortRule(id, { direction: rule.direction === 'ASC' ? 'DESC' : 'ASC' });
  }
}

function clearAllSorts(): void {
  onSortChange([]);
}

// Get available fields (fields not already used in current config)
function getAvailableFields(currentRuleId?: string): SortField[] {
  const usedFields = sortConfig
    .filter(rule => rule.id !== currentRuleId)
    .map(rule => rule.field);
  
  return (Object.keys(SORT_FIELD_LABELS) as SortField[])
    .filter(field => !usedFields.includes(field));
}
</script>

<div class="w-full h-full flex flex-col">
  <!-- Header with matching table style -->
  <div class="w-full border-2 border-blue-700 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg overflow-hidden">
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-white">Sort Configuration</h3>
        <div class="flex gap-2 items-center">
          <button
            type="button"
            onclick={addSortRule}
            disabled={sortConfig.length >= Object.keys(SORT_FIELD_LABELS).length}
            class="inline-flex items-center px-2 border border-transparent text-xs font-medium rounded text-blue-700 bg-white hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-200 ease-in-out h-6 cursor-pointer"
          >
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Add Rule
          </button>
          {#if sortConfig.length > 0}
            <button
              type="button"
              onclick={clearAllSorts}
              class="inline-flex items-center px-2 border border-white text-xs font-medium rounded text-white bg-transparent hover:bg-white/20 hover:border-white/80 hover:shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 transition-all duration-200 ease-in-out h-6 cursor-pointer"
            >
              Clear All
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Content area with matching table body border style -->
  <div class="w-full border-l-2 border-r-2 border-b-2 border-gray-300 shadow-lg bg-white rounded-b-lg overflow-hidden flex-1">
    <div class="p-6 h-full">
      {#if sortConfig.length === 0}
        <div class="text-center py-8 text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
          </svg>
          <p class="text-sm">No sorting rules configured</p>
          <p class="text-xs text-gray-400 mt-1">Click "Add Rule" to start sorting</p>
        </div>
      {:else}
        <div class="space-y-3">
          {#each sortConfig as rule, index (rule.id)}
            <div class="flex flex-wrap items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-200 ease-in-out">
              <!-- Priority indicator -->
              <div class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-semibold text-blue-700 flex-shrink-0">
                {index + 1}
              </div>

              <!-- Field selector -->
              <div class="min-w-[100px] flex-1 max-w-[200px]">
                <select
                  value={rule.field}
                  onchange={(e) => updateSortRule(rule.id, { field: e.currentTarget.value as SortField })}
                  class="block w-full px-2 py-1 border border-gray-300 rounded text-xs cursor-pointer hover:border-gray-400 transition-colors duration-200"
                >
                  {#each getAvailableFields(rule.id) as field}
                    <option value={field}>{SORT_FIELD_LABELS[field]}</option>
                  {/each}
                  <!-- Keep current selection even if it would be filtered out -->
                  {#if !getAvailableFields(rule.id).includes(rule.field)}
                    <option value={rule.field}>{SORT_FIELD_LABELS[rule.field]}</option>
                  {/if}
                </select>
              </div>

              <!-- Direction toggle -->
              <button
                type="button"
                onclick={() => toggleDirection(rule.id)}
                class="inline-flex items-center px-2 py-1 border rounded text-xs font-medium transition-all duration-200 ease-in-out min-w-[60px] justify-center cursor-pointer hover:shadow-sm"
                class:border-blue-500={rule.direction === 'ASC'}
                class:bg-blue-50={rule.direction === 'ASC'}
                class:text-blue-700={rule.direction === 'ASC'}
                class:hover:bg-blue-100={rule.direction === 'ASC'}
                class:border-gray-300={rule.direction === 'DESC'}
                class:bg-white={rule.direction === 'DESC'}
                class:text-gray-700={rule.direction === 'DESC'}
                class:hover:bg-gray-50={rule.direction === 'DESC'}
                class:hover:border-gray-400={rule.direction === 'DESC'}
              >
                <svg 
                  class="w-3 h-3 mr-1 transition-transform duration-300 ease-in-out origin-center"
                  class:rotate-180={rule.direction === 'DESC'}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15-6-6-6 6"/>
                </svg>
                {rule.direction}
              </button>

              <!-- Remove button -->
              <button
                type="button"
                onclick={() => removeSortRule(rule.id)}
                class="inline-flex items-center justify-center w-6 h-6 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-all duration-200 ease-in-out cursor-pointer flex-shrink-0"
                aria-label="Remove sort rule"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          {/each}
        </div>

        {#if sortConfig.length > 1}
          <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p class="text-xs text-blue-700">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Primary sort is applied first, then secondary, and so on.
            </p>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div> 