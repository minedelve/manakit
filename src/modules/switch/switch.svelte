<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let value: boolean = false;
	export let right: boolean = false;
	export let error: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;

	const handleChange = (e: any) => (value = e?.target?.checked);
</script>

{#if $$slots.default || $$slots.before || $$slots.after}
	<div class="kit-switch-area">
		<label class="label">
			{#if ($$slots.before || $$slots.after) && $$slots.before}
				<slot name="before" />
			{:else if $$slots.default && !right}
				<slot />
			{/if}

			<input
				class={className('kit-switch', _class)}
				type="checkbox"
				class:light
				class:dark
				class:switch-info={info}
				class:switch-success={success}
				class:switch-warning={warning}
				class:switch-error={error}
				checked={value}
				on:change={(e) => handleChange(e)}
				{...$$restProps}
			/>

			{#if ($$slots.before || $$slots.after) && $$slots.after}
				<slot name="after" />
			{:else if $$slots.default && right}
				<slot />
			{/if}
		</label>
	</div>
{:else}
	<input
		class={className('kit-switch', _class)}
		type="checkbox"
		class:light
		class:dark
		class:switch-info={info}
		class:switch-success={success}
		class:switch-warning={warning}
		class:switch-error={error}
		checked={value}
		on:change={(e) => handleChange(e)}
		{...$$restProps}
	/>
{/if}
