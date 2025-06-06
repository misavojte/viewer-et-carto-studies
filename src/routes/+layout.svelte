<script lang="ts">
	import '../app.css';
	import GlobalTooltip from '../lib/components/GlobalTooltip.svelte';
	import GlobalModal from '../lib/components/GlobalModal.svelte';
	
	let { children } = $props();
</script>

<div class="m-2 box-border">
	{@render children()}
</div>
<GlobalTooltip />
<GlobalModal />
