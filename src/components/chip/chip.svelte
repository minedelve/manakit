<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

{#if $$props.value !== undefined}
	<button
		id={$$props.id}
		class={classMap({
			component: 'chip',
			default: $$props.class,
			'chip-text': $$props.text,
			'chip-outline': $$props.outline,
			'chip-error': $$props.error,
			'chip-warning': $$props.warning,
			'chip-success': $$props.success,
			'chip-info': $$props.info,
			chip: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		disabled={$$props.disabled}
		type={$$props.type}
		on:click
		on:blur
		on:change
	>
		<slot />
	</button>
{:else if $$props.href}
	<a
		id={$$props.id}
		class={classMap({
			component: 'chip',
			default: $$props.class,
			chip: $$props.size,
			'chip-disabled': $$props.disabled,
			'chip-text': $$props.text,
			'chip-outline': $$props.outline,
			'chip-error': $$props.error,
			'chip-warning': $$props.warning,
			'chip-success': $$props.success,
			'chip-info': $$props.info
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		href={$$props.href}
		target={$$props.target}
		role={$$props.role}
	>
		<slot />
	</a>
{:else}
	<div
		id={$$props.id}
		class={classMap({
			component: 'chip',
			default: $$props.class,
			chip: $$props.size,
			'chip-text': $$props.text,
			'chip-outline': $$props.outline,
			'chip-error': $$props.error,
			'chip-warning': $$props.warning,
			'chip-success': $$props.success,
			'chip-info': $$props.info
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</div>
{/if}

<style>
	.chip {
		--chip-color: #1f2837;
		--chip-background: #f2f2f2;
		--chip-background-hover: #d2d2d2;
		--chip-background-disabled: #d9dadc;
		--chip-color-disabled: #b9babe;

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
		background-color: var(--color-surface);
		color: var(--color-on-surface);
	}

	a {
		text-decoration: none;
	}

	.btn-disabled,
	.btn[disabled] {
		pointer-events: none;
		background-color: var(--chip-background-disabled);
		color: var(--chip-color-disabled);
	}

	.chip-lg {
		height: 1.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		padding-left: 0.688rem;
		padding-right: 0.688rem;
	}

	.chip-md {
		height: 1.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding-left: 0.563rem;
		padding-right: 0.563rem;
	}

	.chip-sm {
		height: 1rem;
		font-size: 0.75rem;
		line-height: 1rem;
		padding-left: 0.438rem;
		padding-right: 0.438rem;
	}

	.chip-xs {
		height: 0.75rem;
		font-size: 0.75rem;
		line-height: 0.75rem;
		padding-left: 0.313rem;
		padding-right: 0.313rem;
	}

	.chip-outline {
		border-color: currentColor;
		background-color: transparent;
		border-style: solid;
	}

	a.chip:focus-visible,
	button.chip:focus-visible {
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.chip:hover:not(div) {
		background-color: var(--chip-background-hover);
	}

	/** Colors */
	.chip-error {
		background-color: var(--color-error);
		color: var(--color-on-error);
	}
	.chip-outline.chip-error {
		background-color: transparent;
		color: var(--color-error);
	}
	.chip-text.chip-error {
		background-color: transparent;
		color: var(--color-error);
	}
	.chip-warning {
		background-color: var(--color-warning);
		color: var(--color-on-warning);
	}
	.chip-outline.chip-warning {
		background-color: transparent;
		color: var(--color-warning);
	}
	.chip-text.chip-warning {
		background-color: transparent;
		color: var(--color-warning);
	}
	.chip-success {
		background-color: var(--color-success);
		color: var(--color-on-success);
	}
	.chip-outline.chip-success {
		background-color: transparent;
		color: var(--color-success);
	}
	.chip-text.chip-success {
		background-color: transparent;
		color: var(--color-success);
	}
	.chip-info {
		background-color: var(--color-info);
		color: var(--color-on-info);
	}
	.chip-outline.chip-info {
		background-color: transparent;
		color: var(--color-info);
	}
	.chip-text.chip-info {
		background-color: transparent;
		color: var(--color-info);
	}
</style>
