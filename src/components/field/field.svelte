<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let value = '';

	const handleInput = (e: any) => {
		value = e?.target?.value;
	};
</script>

<input
	id={$$props.id}
	name={$$props.name}
	class={classMap({
		component: 'field',
		default: $$props.class,
		'input-is-info': $$props.info,
		'input-is-success': $$props.success,
		'input-is-warning': $$props.warning,
		'input-is-error': $$props.error
	})}
	style={styleMap({
		default: $$props.style
	})}
	placeholder={$$props.placeholder}
	{value}
	on:input={(e) => handleInput(e)}
	{...$$props}
/>

<style>
	.field {
		flex-shrink: 1;
		appearance: none;
		height: 3rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
		line-height: 2;
		line-height: 1.5rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: #d8d8db;
		background-color: var(--color-background);
	}

	.field:focus {
		border-color: var(--color-text);
		outline-color: var(--color-text);
	}

	.field:focus,
	.input-is-info,
	.input-is-success,
	.input-is-warning,
	.input-is-error {
		box-shadow: none;
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.input-is-info {
		outline-color: var(--color-info);
	}

	.input-is-success {
		outline-color: var(--color-success);
	}

	.input-is-warning {
		outline-color: var(--color-warning);
	}

	.input-is-error {
		outline-color: var(--color-error);
	}
</style>
