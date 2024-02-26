<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'divider',
		default: $$props.class,
		'divider-vertical': $$props.vertical,
		'divider-inset': $$props.inset,
		'divider-start': $$props.start,
		'divider-end': $$props.end
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</div>

<style>
	.divider {
		--divider-color: #1f2c32;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: stretch;
		margin-top: 1rem;
		margin-bottom: 1rem;
		height: 1rem;
		white-space: nowrap;
	}

	.divider:not(:empty) {
		gap: 1rem;
	}

	.divider-inset:not(.divider-vertical) {
		width: 80%;
		margin: 0 auto;
	}

	.divider:not(.divider-start):before,
	.divider:not(.divider-end):after {
		height: 0.125rem;
		width: 100%;
		flex-grow: 1;
		content: '';
		background-color: var(--divider-color);
	}

	.divider-vertical:not(.divider-start):before,
	.divider-vertical:not(.divider-end):after {
		height: 100%;
		width: 0.125rem;
	}
</style>
