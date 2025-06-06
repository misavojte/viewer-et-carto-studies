<script lang="ts">
import type { FilterConfig, FilterRule, FilterField, FilterOperator } from '../types.js';
import { FILTER_FIELD_LABELS, FILTER_OPERATOR_LABELS } from '../types.js';

interface Props {
  filterConfig: FilterConfig;
  onFilterChange: (config: FilterConfig) => void;
}

const { filterConfig, onFilterChange }: Props = $props();

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

function addFilterRule(): void {
  const newRule: FilterRule = {
    id: generateId(),
    field: 'year',
    operator: 'EQUALS',
    value: ''
  };
  onFilterChange([...filterConfig, newRule]);
}

function removeFilterRule(id: string): void {
  onFilterChange(filterConfig.filter(rule => rule.id !== id));
}

function updateFilterRule(id: string, updates: Partial<Omit<FilterRule, 'id'>>): void {
  onFilterChange(
    filterConfig.map(rule => 
      rule.id === id ? { ...rule, ...updates } : rule
    )
  );
}

function clearAllFilters(): void {
  onFilterChange([]);
}

// Get available fields (fields not already used in current config)
function getAvailableFields(currentRuleId?: string): FilterField[] {
  const usedFields = filterConfig
    .filter(rule => rule.id !== currentRuleId)
    .map(rule => rule.field);
  
  return (Object.keys(FILTER_FIELD_LABELS) as FilterField[])
    .filter(field => !usedFields.includes(field));
}

// Get operators suitable for the selected field
function getOperatorsForField(field: FilterField): FilterOperator[] {
  const numericFields: FilterField[] = ['year', 'numberOfParticipants', 'relevanceUsability', 'relevanceInteractivity', 'relevanceGeovisualization', 'relevanceEyeTracking'];
  const textFields: FilterField[] = ['articleTitle', 'studyWithExperiment'];
  
  if (numericFields.includes(field)) {
    return ['EQUALS', 'NOT_EQUALS', 'GREATER_THAN', 'LESS_THAN', 'GREATER_THAN_OR_EQUAL', 'LESS_THAN_OR_EQUAL'];
  } else if (textFields.includes(field)) {
    return ['EQUALS', 'NOT_EQUALS', 'CONTAINS', 'NOT_CONTAINS'];
  }
  
  // Default operators
  return ['EQUALS', 'NOT_EQUALS', 'CONTAINS', 'NOT_CONTAINS'];
}
</script>

<div class="w-full h-full flex flex-col">
  <!-- Header with matching table style -->
  <div class="w-full border-2 border-blue-700 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg overflow-hidden">
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-white">Filter Configuration</h3>
        <div class="flex gap-2 items-center">
          <button
            type="button"
            onclick={addFilterRule}
            disabled={filterConfig.length >= Object.keys(FILTER_FIELD_LABELS).length}
            class="inline-flex items-center px-2 border border-transparent text-xs font-medium rounded text-blue-700 bg-white hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-200 ease-in-out h-6 cursor-pointer"
          >
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Add Filter
          </button>
          {#if filterConfig.length > 0}
            <button
              type="button"
              onclick={clearAllFilters}
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
      {#if filterConfig.length === 0}
        <div class="text-center py-8 text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
          </svg>
          <p class="text-sm">No filter rules configured</p>
          <p class="text-xs text-gray-400 mt-1">Click "Add Filter" to start filtering</p>
        </div>
      {:else}
        <div class="space-y-3">
          {#each filterConfig as rule, index (rule.id)}
            <div class="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-200 ease-in-out">
              <!-- Priority indicator -->
              <div class="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full text-xs font-semibold text-green-700 flex-shrink-0">
                {index + 1}
              </div>

              <!-- Field selector -->
              <div class="w-20 flex-shrink-0">
                <select
                  value={rule.field}
                  onchange={(e) => {
                    const newField = e.currentTarget.value as FilterField;
                    const availableOps = getOperatorsForField(newField);
                    const newOperator = availableOps.includes(rule.operator) ? rule.operator : availableOps[0];
                    updateFilterRule(rule.id, { field: newField, operator: newOperator });
                  }}
                  class="block w-full px-2 py-1 border border-gray-300 rounded text-xs cursor-pointer hover:border-gray-400 transition-colors duration-200"
                >
                  {#each getAvailableFields(rule.id) as field}
                    <option value={field}>{FILTER_FIELD_LABELS[field]}</option>
                  {/each}
                  <!-- Keep current selection even if it would be filtered out -->
                  {#if !getAvailableFields(rule.id).includes(rule.field)}
                    <option value={rule.field}>{FILTER_FIELD_LABELS[rule.field]}</option>
                  {/if}
                </select>
              </div>

              <!-- Operator selector -->
              <div class="w-20 flex-shrink-0">
                <select
                  value={rule.operator}
                  onchange={(e) => updateFilterRule(rule.id, { operator: e.currentTarget.value as FilterOperator })}
                  class="block w-full px-2 py-1 border border-gray-300 rounded text-xs cursor-pointer hover:border-gray-400 transition-colors duration-200"
                >
                  {#each getOperatorsForField(rule.field) as operator}
                    <option value={operator}>{FILTER_OPERATOR_LABELS[operator]}</option>
                  {/each}
                </select>
              </div>

              <!-- Value input -->
              <div class="w-20 flex-shrink-0">
                <input
                  type="text"
                  value={rule.value}
                  oninput={(e) => updateFilterRule(rule.id, { value: e.currentTarget.value })}
                  placeholder="Value..."
                  class="block w-full px-2 py-1 border border-gray-300 rounded text-xs hover:border-gray-400 transition-colors duration-200"
                />
              </div>

              <!-- Remove button -->
              <button
                type="button"
                onclick={() => removeFilterRule(rule.id)}
                class="inline-flex items-center justify-center w-6 h-6 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-all duration-200 ease-in-out cursor-pointer flex-shrink-0"
                aria-label="Remove filter rule"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          {/each}
        </div>

        {#if filterConfig.length > 1}
          <div class="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p class="text-xs text-green-700">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              All filter conditions must be met (AND logic).
            </p>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div> 