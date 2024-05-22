<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'header' | 'div' = 'header';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let bottom: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('mk-toolbar', _class)}
	class:toolbar-bottom={bottom}
	class:light
	class:dark
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
