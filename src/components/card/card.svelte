<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'card',
		default: $$props.class,
		'card-active': $$props.active,
		'card-outline': $$props.outline,
		'card-text': $$props.text,
		'card-compact': $$props.compact,
		'card-image': $$props.image,
		shadow: $$props.shadow
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</div>

<style>
	.card {
		--card-color: var(--color-on-surface);
		--card-background: var(--color-surface);

		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 1rem;
		border-color: transparent;
		border-width: 1px;
		color: var(--card-color);
		background: var(--card-background);
	}

	.card-compact :global(.card-body) {
		padding: 1rem;
	}

	.card-compact :global(.card-title) {
		margin-bottom: 0.25rem;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}

	.card-image {
		display: grid;
	}
	.card-image > :global(*),
	.card-image:before {
		grid-column-start: 1;
		grid-row-start: 1;
	}

	.card-outline {
		background: transparent;
		border-color: var(--card-background);
		color: var(--card-background);
	}

	.card-text {
		color: var(--card-background);
		background: transparent;
	}

	.card :global(figure) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card :global(:where(figure:first-child)) {
		overflow: hidden;
		border-start-start-radius: inherit;
		border-start-end-radius: inherit;
		border-end-start-radius: unset;
		border-end-end-radius: unset;
	}

	.card :global(:where(figure:last-child)) {
		overflow: hidden;
		border-start-start-radius: unset;
		border-start-end-radius: unset;
		border-end-start-radius: inherit;
		border-end-end-radius: inherit;
	}
</style>
