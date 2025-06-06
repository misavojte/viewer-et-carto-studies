<script lang="ts">
	import '../app.css';
	import GlobalTooltip from '../lib/components/GlobalTooltip.svelte';
	
	let { children } = $props();
</script>

{@render children()}
<GlobalTooltip />
