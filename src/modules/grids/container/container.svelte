<script lang="ts">
	import { className } from '../../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'section' | 'header' = 'div';
	export let fluid: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('kit-container', _class)}
	class:container-fluid={fluid}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
