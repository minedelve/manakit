<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	// modules
	import BtnAnchor from './btn.anchor.svelte';
	import BtnButton from './btn.button.svelte';
	import BtnInput from './btn.input.svelte';

	let props: any;
	let display = $$props.href ? BtnAnchor : $$props.type ? BtnInput : BtnButton;

	$: className = classMap({
		component: 'btn',
		default: $$props.class,
		btn: $$props.size,
		'btn-text': $$props.text,
		'btn-link': $$props.link,
		'btn-outline': $$props.outline,
		'btn-disabled': $$props.disabled,
		'btn-wide': $$props.wide,
		'btn-block': $$props.block,
		'btn-circle': $$props.circle,
		'btn-square': $$props.square,
		'btn-error': $$props.error,
		'btn-warning': $$props.warning,
		'btn-success': $$props.success,
		'btn-info': $$props.info
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
	:global(.btn) {
		--btn-color: var(--color-surface-on-container);
		--btn-background: var(--color-surface-container);
		--btn-background-disabled: var(--color-surface-container-disabled);
		--btn-color-disabled: var(--color-surface-on-container-disabled);

		display: inline-flex;
		height: 3rem;
		min-height: 3rem;
		flex-shrink: 0;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border-color: transparent;
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1em;
		gap: 0.5rem;
		font-weight: 600;
		text-decoration-line: none;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		border-width: 1px;
		color: var(--btn-color);
		background-color: var(--btn-background);
	}

	:global(.btn) :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	:global(.btn-circle) {
		height: 3rem;
		width: 3rem;
		padding: 0;
		border-radius: 9999px;
	}

	:global(.btn-square) {
		height: 3rem;
		width: 3rem;
		padding: 0;
	}

	:global(.btn-wide) {
		width: 16rem;
	}

	:global(.btn-block) {
		width: 100%;
	}

	:global(.btn-info) {
		--btn-color: var(--color-on-info);
		--btn-background: var(--color-info);
	}
	:global(.btn-success) {
		--btn-color: var(--color-on-success);
		--btn-background: var(--color-success);
	}
	:global(.btn-warning) {
		--btn-color: var(--color-on-warning);
		--btn-background: var(--color-warning);
	}
	:global(.btn-error) {
		--btn-color: var(--color-on-error);
		--btn-background: var(--color-error);
	}

	:global(.btn-outline) {
		background-color: transparent;
		color: var(--btn-background);
		border-color: var(--btn-background);
	}
	:global(.btn-outline:hover) {
		color: var(--btn-color);
	}

	:global(.btn-text) {
		background-color: transparent;
		color: var(--btn-background);
	}
	:global(.btn-text:hover) {
		background-color: color-mix(in oklab, var(--btn-background) 10%, transparent);
	}

	:global(.btn-link) {
		border-color: transparent;
		background-color: transparent;
		text-decoration-line: underline;
		color: var(--btn-background);
	}

	:global(.btn:focus-visible) {
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
		outline-color: var(--btn-background);
	}

	:global(.btn:hover:not(.btn-link):not(.btn-text)) {
		background-color: color-mix(in oklab, var(--btn-background) 90%, black);
		border-color: color-mix(in oklab, var(--btn-background) 90%, black);
	}

	:global(.btn-disabled),
	:global(.btn[disabled]) {
		pointer-events: none;
		background-color: var(--btn-background-disabled);
		color: var(--btn-color-disabled);
	}
</style>
