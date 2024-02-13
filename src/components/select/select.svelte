<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let value: any = undefined;

	const handleChange = (e: any) => {
		value = e.target.value;
	};
</script>

<select
	id={$$props.id}
	class={classMap({
		component: 'select',
		default: $$props.class,
		select: $$props.size,
		'select-is-info': $$props.info,
		'select-is-success': $$props.success,
		'select-is-warning': $$props.warning,
		'select-is-error': $$props.error
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	disabled={$$props.disabled}
	{value}
	on:change={(e) => handleChange(e)}
>
	{#if $$props.placeholder}
		<option class="placeholder" disabled selected value={undefined}>{$$props.placeholder}</option>
	{/if}

	{#if $$props.options}
		{#each $$props.options as { label, value, disabled }, i}
			<option {value} {disabled}>{label}</option>
		{/each}
	{/if}
</select>

<style>
	.select {
		display: inline-flex;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		height: 3rem;
		min-height: 3rem;
		padding-left: 1rem;
		padding-right: 2.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 2;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: transparent;
		border-color: #d8d8db;
		background-color: var(--color-background);
		background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
			linear-gradient(135deg, currentColor 50%, transparent 50%);
		background-position:
			calc(100% - 20px) calc(1px + 50%),
			calc(100% - 16.1px) calc(1px + 50%);
		background-size:
			4px 4px,
			4px 4px;
		background-repeat: no-repeat;
	}

	.select:focus {
		border-color: var(--color-text);
		outline-color: var(--color-text);
	}

	.select:focus,
	.select-is-info,
	.select-is-success,
	.select-is-warning,
	.select-is-error {
		box-shadow: none;
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.select-is-info {
		outline-color: var(--color-info);
	}

	.select-is-success {
		outline-color: var(--color-success);
	}

	.select-is-warning {
		outline-color: var(--color-warning);
	}

	.select-is-error {
		outline-color: var(--color-error);
	}

	.select-lg {
		height: 4rem;
		min-height: 4rem;
		padding-left: 1.5rem;
		padding-right: 2rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		line-height: 2;
	}

	.select-sm {
		height: 2rem;
		min-height: 2rem;
		padding-left: 0.75rem;
		padding-right: 2rem;
		font-size: 0.875rem;
		line-height: 2rem;
	}

	.select-xs {
		height: 1.5rem;
		min-height: 1.5rem;
		padding-left: 0.5rem;
		padding-right: 2rem;
		font-size: 0.75rem;
		line-height: 1rem;
		line-height: 1.625;
	}

	.select-disabled,
	.select:disabled,
	.select[disabled] {
		cursor: not-allowed;
		border-color: #f6f6f6;
		background-color: #f6f6f6;
		color: #dcdddf;
	}
</style>
