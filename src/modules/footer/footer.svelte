<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'footer' | 'div' = 'footer';
	export let dark: boolean = false;
	export let light: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('kit-footer', _class)}
	class:light
	class:dark
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
