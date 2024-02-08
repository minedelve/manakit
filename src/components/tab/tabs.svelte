<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'tabs',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	role="tablist"
>
	<slot />
</div>

<style>
	.tabs {
		display: grid;
		align-items: flex-end;
		width: 100%;
		border-radius: 0.5rem;
		background-color: #f2f2f2;
		padding: 0.25rem;
	}

	/* .tabs-header {
		display: grid;
		/* align-items: flex-end; */
	/* width: 100%;
	} */

	/* .tabs .tab {
		border-radius: 0.5rem;
	}

	.tab:is(input:checked) {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.tab {
		position: relative;
		grid-row-start: 1;
		display: inline-flex;
		height: 2rem;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 2;
		color: var(--color-on-surface);
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
	}

	.tab:is(input[type='radio']):after {
		content: attr(aria-label);
	}

	input.tab:checked + :global(.tab-content),
	.tab-active + .tab-content {
		display: block;
	} */
</style>
