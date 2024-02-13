<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let active: string | number = '';

	const handleSelectActive = (section?: string | number) => {
		if (section) active = section;
	};
</script>

<input
	id={$$props.id}
	class={classMap({
		component: 'tab',
		default: $$props.class,
		'tab-active': $$props.section === active
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	type="radio"
	name={$$props.name || 'tab'}
	role="tab"
	aria-label={$$props.label || ''}
	checked={$$props.section === active}
	on:click={() => handleSelectActive($$props.section)}
/>

<style>
	.tab:is(input:checked) {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
		border-radius: 0.5rem;
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
</style>
