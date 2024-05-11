<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'a' | 'button' | 'div' = 'div';
	export let active: boolean = false;
	export let outline: boolean = false;
	export let text: boolean = false;
	export let disabled: boolean = false;

	$: {
		if ($$props.href) tag = 'a';
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={tag}
	class={className('mk-card', _class)}
	class:card-active={active}
	class:card-outline={outline}
	class:card-text={text}
	class:card-disabled={disabled}
	on:change
	on:click
	disabled={$$props.disabled}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
