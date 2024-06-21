<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'ul' = 'ul';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let dense: boolean = false;
	export let noGutters: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('mk-list', _class)}
	class:light
	class:dark
	class:list-dense={dense}
	class:list-no-gutters={noGutters}
	{...$$restProps}
>
	<slot />
</svelte:element>
