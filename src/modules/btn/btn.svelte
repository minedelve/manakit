<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'button' | 'a' | 'input' = 'button';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let disabled: boolean = false;
	export let square: boolean = false;
	export let circle: boolean = false;
	export let outline: boolean = false;
	export let rounded: boolean = false;
	export let text: boolean = false;
	export let link: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let error: boolean = false;
	export let wide: boolean = false;
	export let block: boolean = false;
	export let active: boolean = false;

	$: {
		if ($$props.href) tag = 'a';
		if ($$props.value) tag = 'input';
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if tag === 'input'}
	<input class={className('mk-btn', _class)} {...$$restProps} aria-label={$$props.ariaLabel} />
{:else}
	<svelte:element
		this={tag}
		class={className('mk-btn', _class)}
		class:btn-active={active}
		class:btn-square={square}
		class:btn-outline={outline}
		class:btn-rounded={rounded}
		class:btn-circle={circle}
		class:btn-text={text}
		class:btn-link={link}
		class:btn-disabled={disabled}
		class:btn-info={info}
		class:btn-success={success}
		class:btn-warning={warning}
		class:btn-error={error}
		class:btn-wide={wide}
		class:btn-block={block}
		class:light
		class:dark
		disabled={$$props.disabled}
		on:click
		on:dblclick
		{...$$restProps}
	>
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</svelte:element>
{/if}
