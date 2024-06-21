<script lang="ts">
	import { className } from '../../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' = 'div';
</script>

<svelte:element this={tag} class={className('mk-col', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
