<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'label' | 'div' | 'li' = 'label';
</script>

<svelte:element this={tag} class={className('mk-label', _class)} {...$$restProps}>
	<slot />
</svelte:element>
