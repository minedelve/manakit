<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	// modules
	import BadgeDiv from './badge.div.svelte';
	import BadgeSpan from './badge.span.svelte';

	let props: any;
	let display = $$props.div ? BadgeDiv : BadgeSpan;

	$: className = classMap({
		component: 'badge',
		default: $$props.class,
		badge: $$props.size,
		'badge-outline': $$props.outline,
		'badge-error': $$props.error,
		'badge-warning': $$props.warning,
		'badge-success': $$props.success,
		'badge-info': $$props.info
	});

	$: styleProps = styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	});
</script>

<svelte:component this={display} {className} {styleProps} {...props} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:component>

<style>
	:global(.badge) {
		--badge-color: var(--color-surface-on-container);
		--badge-background: var(--color-surface-container);
		--badge-background-disabled: var(--color-surface-container-disabled);
		--badge-color-disabled: var(--color-surface-on-container-disabled);

		display: inline-flex;
		align-items: center;
		justify-content: center;
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
		color: var(--badge-color);
		background-color: var(--badge-background);
	}

	:global(.badge-outline) {
		border-color: currentColor;
		background-color: transparent;
		color: currentColor;
	}

	:global(.badge-info) {
		--badge-color: var(--color-on-info);
		--badge-background: var(--color-info);
	}
	:global(.badge-success) {
		--badge-color: var(--color-on-success);
		--badge-background: var(--color-success);
	}
	:global(.badge-warning) {
		--badge-color: var(--color-on-warning);
		--badge-background: var(--color-warning);
	}
	:global(.badge-error) {
		--badge-color: var(--color-on-error);
		--badge-background: var(--color-error);
	}
</style>
