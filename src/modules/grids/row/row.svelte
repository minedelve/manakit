<script lang="ts">
	import { className } from '../../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' = 'div';
	export let noGutters: boolean = false;
	export let dense: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('kit-row', _class)}
	class:row-no-gutters={noGutters}
	class:row-dense={dense}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
