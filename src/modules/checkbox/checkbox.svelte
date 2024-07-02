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
	export let indeterminate: boolean = false;
	export let checked: boolean = false;

	const handleChange = (e: any) => (checked = e?.target?.checked);
</script>

{#if $$slots.default}
	<label class={className('mk-checkbox', _class)}>
		<span><slot /></span>
		<input
			type="checkbox"
			class:checkbox-info={info}
			class:checkbox-success={success}
			class:checkbox-warning={warning}
			class:checkbox-error={error}
			class:checkbox-indeterminate={indeterminate}
			class:light
			class:dark
			{checked}
			on:change={(e) => handleChange(e)}
			{...$$restProps}
		/>
	</label>
{:else}
	<input
		type="checkbox"
		class={className('mk-checkbox', _class)}
		class:checkbox-info={info}
		class:checkbox-success={success}
		class:checkbox-warning={warning}
		class:checkbox-error={error}
		class:checkbox-indeterminate={indeterminate}
		class:light
		class:dark
		{checked}
		on:change={(e) => handleChange(e)}
		{...$$restProps}
	/>
{/if}
