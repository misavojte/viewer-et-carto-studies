<script lang="ts">
import type { Likert5 } from '../types.js';
import { tooltip } from '../directives/tooltip.js';

interface Props {
  likertValue: Likert5;
  label?: string;
  tailwindCss?: string;
}

const { likertValue, label, tailwindCss = 'max-w-32 h-4' }: Props = $props();

// Create tooltip content
const tooltipContent = $derived(label 
  ? `${label}: ${likertValue}/5` 
  : `Value: ${likertValue}/5`);

// Calculate the fill percentage
const fillPercentage = $derived((likertValue / 5) * 100);

// Generate divider positions (20%, 40%, 60%, 80%)
const dividers = $derived([20, 40, 60, 80]);
</script>

<div 
  class="flex items-center justify-center w-full cursor-help" 
  role="img" 
  aria-label={`Likert scale value: ${likertValue} out of 5`}
  use:tooltip={tooltipContent}
>
  <div class="relative w-full bg-gray-100 rounded-full overflow-hidden border border-gray-300 {tailwindCss}">
    <!-- Fill bar -->
    <div 
      class="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300 ease-in-out"
      style="width: {fillPercentage}%"
      aria-hidden="true"
    ></div>
    
    <!-- Divider marks -->
    {#each dividers as position}
      <div 
        class="absolute top-0 h-full w-px bg-gray-300"
        style="left: {position}%"
        aria-hidden="true"
      ></div>
    {/each}
  </div>
</div> 