<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let value: any = undefined;
	export let type: any = 'text';

	let isFocused = false;

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		isFocused = false;
	}
	const typeWorkaround = (node: { type: any }) => (node.type = type);
</script>

{#if $$slots.append || $$slots.prepend || $$slots.iconAppend || $$slots.iconPrepend}
	<label class="form-data">
		{#if $$slots.append}
			<div class="label">
				<slot name="append" />
			</div>
		{/if}

		<div
			class={classMap({
				component: 'field',
				default: $$props.class,
				'field-info': $$props.info,
				'field-success': $$props.success,
				'field-warning': $$props.warning,
				'field-error': $$props.error,
				'field-disabled': $$props.disabled,
				field: $$props.size,
				'field-focus': isFocused
			})}
			style={styleMap({
				default: $$props.style,
				background: $$props.background,
				color: $$props.color
			})}
		>
			{#if $$slots.iconAppend}
				<slot name="iconAppend" />
			{/if}

			<input
				id={$$props.id}
				name={$$props.name}
				placeholder={$$props.placeholder}
				autocomplete={$$props.autocomplete}
				spellcheck={$$props.spellcheck}
				disabled={$$props.disabled}
				on:focus={handleFocus}
				on:blur={handleBlur}
				use:typeWorkaround
				bind:value
			/>

			{#if $$slots.iconPrepend}
				<slot name="iconPrepend" />
			{/if}
		</div>

		{#if $$slots.prepend}
			<div class="label">
				<slot name="prepend" />
			</div>
		{/if}
	</label>
{:else}
	<input
		id={$$props.id}
		name={$$props.name}
		class={classMap({
			component: 'field',
			default: $$props.class,
			'field-info': $$props.info,
			'field-success': $$props.success,
			'field-warning': $$props.warning,
			'field-error': $$props.error,
			field: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		placeholder={$$props.placeholder}
		autocomplete={$$props.autocomplete}
		spellcheck={$$props.spellcheck}
		disabled={$$props.disabled}
		use:typeWorkaround
		bind:value
	/>
{/if}

<style>
	.form-data {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
	}

	.form-data .label {
		display: flex;
		user-select: none;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.25rem;
	}

	.field {
		align-items: center;
		display: flex;
		gap: 0.5rem;
	}

	.field input {
		flex-grow: 1;
		background-color: transparent;
		border: none;
		outline: none !important;
		font-size: 1rem;
		line-height: 2;
		line-height: 1.5rem;
		height: 100%;
	}

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
		width: 100%;
		max-width: 100%;
	}

	.field:focus,
	.field-focus {
		border-color: var(--color-text);
		outline-color: var(--color-text);
	}

	.field-disabled,
	input[disabled] {
		cursor: not-allowed;
		border-color: #f2f2f2;
		background-color: #f2f2f2;
		color: #cdced1;
	}

	.field:focus,
	.field-focus,
	.field-error,
	.field-info,
	.field-success,
	.field-warning {
		box-shadow: none;
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.field-info {
		outline-color: var(--color-info);
	}

	.field-success {
		outline-color: var(--color-success);
	}

	.field-warning {
		outline-color: var(--color-warning);
	}

	.field-error {
		outline-color: var(--color-error);
	}
</style>
