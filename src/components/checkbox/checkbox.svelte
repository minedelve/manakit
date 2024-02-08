<script lang="ts">
	import { onMount } from 'svelte';
	import { classMap, styleMap } from '../../libs/helpers';
	import Alert from '../alert/alert.svelte';

	export let checked: boolean | number = false;
	let input: HTMLInputElement;
	$: indeterminate = false;
	$: isChecked = false;

	onMount(() => {
		if (typeof checked === 'number') {
			if (checked === 0) {
				isChecked = false;
				indeterminate = false;
			}
			if (checked === 1) {
				isChecked = false;
				indeterminate = true;
			}
			if (checked === 2) {
				isChecked = true;
				indeterminate = false;
			}
		} else {
			isChecked = checked;
		}
	});

	const handleChange = (e: any) => {
		// console.log('e.target.checked', e.target.checked);
		// console.log('e.target.indeterminate', e.target.indeterminate);

		if (typeof checked === 'number') {
			if (checked === 0) {
				isChecked = false;
				indeterminate = false;
			}
			if (checked === 1) {
				isChecked = false;
				indeterminate = true;
			}
			if (checked === 2) {
				isChecked = true;
				indeterminate = false;
			}
		} else {
			isChecked = e?.target?.checked;
		}
	};
</script>

<input
	bind:this={input}
	id={$$props.id}
	class={classMap({
		component: 'checkbox',
		default: $$props.class,
		checkbox: $$props.size
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	tabindex="-1"
	type="checkbox"
	checked={isChecked}
	{indeterminate}
	disabled={$$props.disabled}
	on:change={(e) => handleChange(e)}
	{...$$props}
/>

<!-- on:change={(e) => {
		e.target.checked = checked;
		e.target.indeterminate = false;
	}} -->
<style>
	.checkbox {
		flex-shrink: 0;
		height: 1.5rem;
		width: 1.5rem;
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: #d3d4d7;
	}

	.checkbox:checked,
	.checkbox[checked='true'],
	.checkbox[aria-checked='true'] {
		background-repeat: no-repeat;
		animation: checkmark 0.2s ease-out;
		background-color: var(--color-primary);
		background-image: linear-gradient(-45deg, transparent 65%, var(--color-primary) 65.99%),
			linear-gradient(45deg, transparent 75%, var(--color-primary) 75.99%),
			linear-gradient(-45deg, var(--color-primary) 40%, transparent 40.99%),
			linear-gradient(
				45deg,
				var(--color-primary) 30%,
				var(--color-on-primary) 30.99%,
				var(--color-on-primary) 40%,
				transparent 40.99%
			),
			linear-gradient(-45deg, var(--color-on-primary) 50%, var(--color-primary) 50.99%);
	}

	.checkbox:indeterminate {
		background-color: var(--color-primary);
		background-repeat: no-repeat;
		animation: checkmark var(--animation-input, 0.2s) ease-out;
		background-image: linear-gradient(90deg, transparent 80%, var(--color-primary) 80%),
			linear-gradient(-90deg, transparent 80%, var(--color-primary) 80%),
			linear-gradient(
				0deg,
				var(--color-primary) 43%,
				var(--color-on-primary) 43%,
				var(--color-on-primary) 57%,
				var(--color-primary) 57%
			);
	}

	[type='checkbox'].checkbox-xs {
		height: 1rem;
		width: 1rem;
	}

	[type='checkbox'].checkbox-sm {
		height: 1.25rem;
		width: 1.25rem;
	}

	[type='checkbox'].checkbox-md {
		height: 1.5rem;
		width: 1.5rem;
	}

	[type='checkbox'].checkbox-lg {
		height: 2rem;
		width: 2rem;
	}

	.checkbox:disabled {
		cursor: not-allowed;
		border-color: transparent;
		background-color: #d3d4d7;
	}

	.checkbox:disabled:checked,
	.checkbox:disabled[checked='true'],
	.checkbox:disabled[aria-checked='true'] {
		background-repeat: no-repeat;
		animation: checkmark 0.2s ease-out;
		background-color: #d3d4d7;
		background-image: linear-gradient(-45deg, transparent 65%, #d3d4d7 65.99%),
			linear-gradient(45deg, transparent 75%, #d3d4d7 75.99%),
			linear-gradient(-45deg, #d3d4d7 40%, transparent 40.99%),
			linear-gradient(
				45deg,
				#d3d4d7 30%,
				var(--color-on-primary) 30.99%,
				var(--color-on-primary) 40%,
				transparent 40.99%
			),
			linear-gradient(-45deg, var(--color-on-primary) 50%, #d3d4d7 50.99%);
	}

	.checkbox:disabled:indeterminate {
		background-color: #d3d4d7;
		background-repeat: no-repeat;
		animation: checkmark var(--animation-input, 0.2s) ease-out;
		background-image: linear-gradient(90deg, transparent 80%, #d3d4d7 80%),
			linear-gradient(-90deg, transparent 80%, #d3d4d7 80%),
			linear-gradient(
				0deg,
				#d3d4d7 43%,
				var(--color-on-primary) 43%,
				var(--color-on-primary) 57%,
				#d3d4d7 57%
			);
	}
</style>
