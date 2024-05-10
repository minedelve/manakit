<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let inset: boolean = false;
</script>

<div class={className('mk-divider', _class)} class:divider-inset={inset} {...$$restProps}>
	{#if $$slots.start}
		<div class="divider-start">
			<!-- slot: start -->
			<slot name="start" />
			<!-- /slot: start -->
		</div>
	{/if}
	{#if $$slots.end}
		<div class="divider-end">
			<!-- slot: end -->
			<slot name="end" />
			<!-- /slot: end -->
		</div>
	{/if}
</div>
