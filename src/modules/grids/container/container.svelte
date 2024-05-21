<script lang="ts">
	import { className } from '../../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'section' | 'header' = 'div';
	export let fluid: boolean = false;
	export let fillHeight: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('mk-container', _class)}
	class:container-fluid={fluid}
	class:container-fill-height={fillHeight}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
