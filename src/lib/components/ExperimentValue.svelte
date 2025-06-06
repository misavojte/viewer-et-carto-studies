<script lang="ts">
interface Props {
  experimentValue: string;
}

const { experimentValue }: Props = $props();

// Determine if it's a "yes" value and get appropriate styling
const isYes = $derived(experimentValue.toLowerCase().trim() === 'yes');
const displayText = $derived(isYes ? 'Yes' : 'No');
const classes = $derived(
  isYes 
    ? 'text-xs text-green-700 bg-green-100 px-2 py-1 rounded'
    : 'text-xs text-red-700 bg-red-100 px-2 py-1 rounded'
);
</script>

<span class={classes}>
  {displayText}
</span> 