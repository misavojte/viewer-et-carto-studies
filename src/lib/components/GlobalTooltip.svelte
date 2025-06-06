<script lang="ts">
import { tooltipStore } from '../stores/tooltipStore.js';
import { onMount } from 'svelte';

// Subscribe to the tooltip store
const tooltip = $derived($tooltipStore);

// Handle scroll and resize events to update position
let tooltipElement: HTMLDivElement;
let targetElement: HTMLElement | null = null;

function updatePosition() {
  if (!tooltip.visible || !targetElement) return;
  
  const rect = targetElement.getBoundingClientRect();
  tooltipStore.show(tooltip.content, targetElement);
}

onMount(() => {
  window.addEventListener('scroll', updatePosition, true);
  window.addEventListener('resize', updatePosition);
  
  return () => {
    window.removeEventListener('scroll', updatePosition, true);
    window.removeEventListener('resize', updatePosition);
  };
});

// Store reference to target element when tooltip becomes visible
$effect(() => {
  if (tooltip.visible && tooltip.targetRect) {
    // Find the element that matches the stored rect (this is a workaround)
    // In practice, we should pass the element reference differently
    targetElement = document.elementFromPoint(
      tooltip.targetRect.left + tooltip.targetRect.width / 2,
      tooltip.targetRect.top + tooltip.targetRect.height / 2
    ) as HTMLElement;
  } else {
    targetElement = null;
  }
});
</script>

{#if tooltip.visible}
  <div
    bind:this={tooltipElement}
    class="absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none whitespace-pre-wrap"
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