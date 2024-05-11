<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'footer' | 'div' = 'footer';
</script>

<svelte:element this={tag} class={className('mk-footer', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
