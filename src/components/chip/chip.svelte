<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	// modules
	import ChipAnchor from './chip.anchor.svelte';
	import ChipButton from './chip.button.svelte';
	import ChipDiv from './chip.div.svelte';

	let props: any;
	let display = $$props.href ? ChipAnchor : $$props.value ? ChipButton : ChipDiv;

	$: className = classMap({
		component: 'chip',
		default: $$props.class,
		chip: $$props.size,
		'chip-text': $$props.text,
		'chip-outline': $$props.outline,
		'chip-error': $$props.error,
		'chip-warning': $$props.warning,
		'chip-success': $$props.success,
		'chip-info': $$props.info
	});

	$: styleProps = styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	});
</script>

<svelte:component
	this={display}
	{className}
	{styleProps}
	on:click
	on:blur
	on:change
	on:input
	{...props}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:component>

<style>
	:global(.chip) {
		--chip-color: var(--color-surface-on-container);
		--chip-background: var(--color-surface-container);
		--chip-background-disabled: var(--color-surface-container-disabled);
		--chip-color-disabled: var(--color-surface-on-container-disabled);

		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		height: 1.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		width: fit-content;
		padding-left: 0.563rem;
		padding-right: 0.563rem;
		border-radius: 1.9rem;
		border-width: 1px;
		border-color: transparent;
		background-color: var(--chip-background);
		color: var(--chip-color);
	}

	:global(.chip) :global(svg) {
		width: 0.875rem;
		height: 0.875rem;
	}

	:global(.chip-info) {
		--chip-color: var(--color-on-info);
		--chip-background: var(--color-info);
	}
	:global(.chip-success) {
		--chip-color: var(--color-on-success);
		--chip-background: var(--color-success);
	}
	:global(.chip-warning) {
		--chip-color: var(--color-on-warning);
		--chip-background: var(--color-warning);
	}
	:global(.chip-error) {
		--chip-color: var(--color-on-error);
		--chip-background: var(--color-error);
	}

	:global(.chip-outline) {
		background-color: transparent;
		color: var(--chip-background);
		border-color: var(--chip-background);
	}
	:global(.chip-outline:hover) {
		color: var(--chip-color);
	}

	:global(.chip-text) {
		background-color: transparent;
		color: var(--chip-background);
	}
	:global(a.chip-text:hover),
	:global(button.chip-text:hover) {
		background-color: color-mix(in oklab, var(--chip-background) 10%, transparent);
	}

	:global(a.chip:focus-visible),
	:global(button.chip:focus-visible) {
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
		outline-color: var(--chip-background);
	}

	:global(a.chip:hover),
	:global(button.chip:hover) {
		background-color: color-mix(in oklab, var(--chip-background) 90%, black);
		border-color: color-mix(in oklab, var(--chip-background) 90%, black);
		cursor: pointer;
	}

	:global(.chip-disabled),
	:global(.chip[disabled]) {
		pointer-events: none;
		background-color: var(--chip-background-disabled);
		color: var(--chip-color-disabled);
	}
</style>
