<script lang="ts">
interface Props {
  items: string[];
  maxItems?: number;
  variant?: 'blue' | 'green' | 'purple' | 'orange' | 'teal';
}

const { items, maxItems = 4, variant = 'blue' }: Props = $props();

// Function to remove content in brackets for cleaner display
function removeBrackets(text: string): string {
  return text.replace(/\s*\([^)]*\)/g, '').trim();
}

// Color variants mapping
const variants = {
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
  purple: 'bg-purple-50 text-purple-700',
  orange: 'bg-orange-50 text-orange-700',
  teal: 'bg-teal-50 text-teal-700'
};

const colorClasses = variants[variant];

// Function to get classes for individual items (handles "Not" prefix)
function getItemClasses(item: string): string {
  const baseClasses = 'px-2 py-1 rounded mb-1 last:mb-0 text-left';
  const cleanItem = removeBrackets(item);
  
  if (cleanItem.startsWith('Not ') || cleanItem.startsWith('not ')) {
    // Muted/error styling for items starting with "Not"
    return `${baseClasses} bg-red-50 text-red-400 opacity-75`;
  }
  
  return `${baseClasses} ${colorClasses}`;
}

const visibleItems = $derived(items.slice(0, maxItems));
const remainingCount = $derived(items.length - maxItems);
</script>

<div class="text-xs text-gray-700">
  {#each visibleItems as item}
    <div class={getItemClasses(item)}>
      {removeBrackets(item)}
    </div>
  {/each}
  {#if remainingCount > 0}
    <div class="text-gray-500 text-xs">+{remainingCount} more</div>
  {/if}
</div> 