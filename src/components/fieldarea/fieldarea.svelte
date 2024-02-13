<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let value = '';

	const handleInput = (e: any) => {
		value = e?.target?.value;
	};
</script>

<textarea
	id={$$props.id}
	name={$$props.name}
	class={classMap({
		component: 'fieldarea',
		default: $$props.class,
		'fieldarea-is-info': $$props.info,
		'fieldarea-is-success': $$props.success,
		'fieldarea-is-warning': $$props.warning,
		'fieldarea-is-error': $$props.error
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
	.fieldarea {
		min-height: 3rem;
		flex-shrink: 1;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		line-height: 2;
		border-radius: 0.5rem;
		border-width: 1px;

		resize: vertical;
		border-color: #d8d8db;
		background-color: var(--color-background);
	}

	.fieldarea:focus {
		border-color: var(--color-text);
		outline-color: var(--color-text);
	}

	.fieldarea:focus,
	.fieldarea-is-info,
	.fieldarea-is-success,
	.fieldarea-is-warning,
	.fieldarea-is-error {
		box-shadow: none;
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.fieldarea-is-info {
		outline-color: var(--color-info);
	}

	.fieldarea-is-success {
		outline-color: var(--color-success);
	}

	.fieldarea-is-warning {
		outline-color: var(--color-warning);
	}

	.fieldarea-is-error {
		outline-color: var(--color-error);
	}
</style>
