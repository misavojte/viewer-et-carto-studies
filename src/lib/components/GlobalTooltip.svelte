<script lang="ts">
import { tooltipStore } from '../stores/tooltipStore.js';
import { onMount } from 'svelte';

// Subscribe to the tooltip store
const tooltip = $derived($tooltipStore);

// Handle scroll and resize events to update position
let tooltipElement: HTMLDivElement;

function updatePosition() {
  if (!tooltip.visible || !tooltip.targetRect) return;
  
  const rect = tooltip.targetRect;
  tooltipStore.show(tooltip.content, rect as unknown as HTMLElement);
}

onMount(() => {
  window.addEventListener('scroll', updatePosition, true);
  window.addEventListener('resize', updatePosition);
  
  return () => {
    window.removeEventListener('scroll', updatePosition, true);
    window.removeEventListener('resize', updatePosition);
  };
});
</script>

{#if tooltip.visible}
  <div
    bind:this={tooltipElement}
    class="fixed z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none"
    style="left: {tooltip.x}px; top: {tooltip.y + 8}px; transform: translateX(-50%);"
    role="tooltip"
  >
    {tooltip.content}
    <div 
      class="absolute w-3 h-3 bg-gray-800 transform rotate-45 -top-1.5 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    />
  </div>
{/if} 