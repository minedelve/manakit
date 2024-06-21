<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'p' | 'div' = 'div';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element this={tag} class={className('mk-card--text', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
