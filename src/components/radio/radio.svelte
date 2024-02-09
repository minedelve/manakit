<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let value: any = undefined;

	const handleChange = (e: any) => {
		value = e.target.value;
	};
</script>

<input
	id={$$props.id}
	class={classMap({
		component: 'radio',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	disabled={$$props.disabled}
	{value}
	type="radio"
	name={$$props.name}
	on:change={(e) => handleChange(e)}
/>

<style>
	.radio {
		flex-shrink: 0;
		height: 1.5rem;
		width: 1.5rem;
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 9999px;
		border-width: 1px;
		border-color: #d8d8db;
	}

	.radio:checked,
	.radio[aria-checked='true'] {
		background-color: var(--color-on-surface);
		border-color: var(--color-on-surface);
		background-image: none;
		animation: radiomark 0.2s ease-out;
		box-shadow:
			0 0 0 4px var(--color-surface) inset,
			0 0 0 4px var(--color-on-surface) inset;
	}

	@keyframes radiomark {
		0% {
			box-shadow:
				0 0 0 12px var(--color-surface) inset,
				0 0 0 12px var(--color-on-surface) inset;
		}
		50% {
			box-shadow:
				0 0 0 3px var(--color-surface) inset,
				0 0 0 3px var(--color-on-surface) inset;
		}
		100% {
			box-shadow:
				0 0 0 4px var(--color-surface) inset,
				0 0 0 4px var(--color-on-surface) inset;
		}
	}
</style>
