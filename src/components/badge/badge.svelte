<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

{#if $$props.is === 'div'}
	<div
		id={$$props.id}
		class={classMap({
			component: 'badge',
			default: $$props.class,
			'badge-outline': $$props.outline,
			badge: $$props.size,
			'badge-error': $$props.error,
			'badge-warning': $$props.warning,
			'badge-success': $$props.success,
			'badge-info': $$props.info
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</div>
{:else}
	<span
		id={$$props.id}
		class={classMap({
			component: 'badge',
			default: $$props.class,
			'badge-outline': $$props.outline,
			badge: $$props.size,
			'badge-error': $$props.error,
			'badge-warning': $$props.warning,
			'badge-success': $$props.success,
			'badge-info': $$props.info
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</span>
{/if}

<style>
	.badge {
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
	}

	.badge-outline {
		border-color: currentColor;
		background-color: transparent;
		color: currentColor;
	}

	/** Colors */
	.badge-error {
		background-color: var(--color-error);
		color: var(--color-on-error);
	}
	.badge-outline.badge-error {
		background-color: transparent;
		color: var(--color-error);
	}
	.badge-warning {
		background-color: var(--color-warning);
		color: var(--color-on-warning);
	}
	.badge-outline.badge-warning {
		background-color: transparent;
		color: var(--color-warning);
	}
	.badge-success {
		background-color: var(--color-success);
		color: var(--color-on-success);
	}
	.badge-outline.badge-success {
		background-color: transparent;
		color: var(--color-success);
	}
	.badge-info {
		background-color: var(--color-info);
		color: var(--color-on-info);
	}
	.badge-outline.badge-info {
		background-color: transparent;
		color: var(--color-info);
	}
</style>
