<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let error: boolean = false;

	// props standard @link https://developer.mozilla.org/fr/docs/Web/HTML/Element/input
	export let type: 'text' | 'number' | 'email' | 'password' | 'search' | 'url' | 'tel' = 'text';
	export let value: string | number | boolean | null | undefined = null;
	export let maxlength: number | null | undefined = undefined;
	export let minlength: number | null | undefined = undefined;
	export let max: number | null | undefined = undefined;
	export let min: number | null | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let autocapitalize: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let disabled: boolean = false;
	export let form: string | undefined = undefined;
	export let list: string | undefined = undefined;
	export let readonly: boolean = false;
	export let required: boolean = false;
	export let size: number | null | undefined = undefined;
	export let step: string | number | null | undefined = undefined;

	const handleInput = (e: any) => {
		value = e?.target?.value;
	};
</script>

{#if $$slots.after || $$slots.before}
	<label
		class={className('mk-field', _class)}
		class:field-info={info}
		class:field-success={success}
		class:field-warning={warning}
		class:field-error={error}
		class:field-disabled={disabled}
		class:light
		class:dark
		{...$$restProps}
	>
		<slot name="before" />
		<input
			{name}
			disabled={$$props.disabled}
			{type}
			{value}
			{maxlength}
			{minlength}
			{min}
			{max}
			{pattern}
			{placeholder}
			{autocapitalize}
			{autocomplete}
			{form}
			{list}
			{readonly}
			{required}
			{size}
			{step}
			on:input={(e) => handleInput(e)}
			on:change
			on:focus
			on:keydown
			on:blur
		/>
		<slot name="after" />
	</label>
{:else}
	<input
		{name}
		class={className('mk-field', _class)}
		class:field-info={info}
		class:field-success={success}
		class:field-warning={warning}
		class:field-error={error}
		class:field-disabled={disabled}
		class:light
		class:dark
		disabled={$$props.disabled}
		{type}
		{value}
		{maxlength}
		{minlength}
		{min}
		{max}
		{pattern}
		{placeholder}
		{autocapitalize}
		{autocomplete}
		{form}
		{list}
		{readonly}
		{required}
		{size}
		{step}
		on:input={(e) => handleInput(e)}
		on:change
		on:focus
		on:keydown
		on:blur
		{...$$restProps}
	/>
{/if}
