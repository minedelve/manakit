<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	let _slots = $$slots as unknown as { default?: any; before?: any; after?: any };
	export { _class as class };
	export let value: boolean = false;
	export let right: boolean = false;
	export let error: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;

	const handleChange = (e: any) => (value = e?.target?.checked);
</script>

{#if _slots.default || _slots.before || _slots.after}
	<div class="kit-toggle-area">
		<label class="label">
			{#if (_slots.before || _slots.after) && _slots.before}
				<slot name="before" />
			{:else if _slots.default && !right}
				<slot />
			{/if}

			<input
				class={className('kit-toggle', _class)}
				type="checkbox"
				class:toggle-info={info}
				class:toggle-success={success}
				class:toggle-warning={warning}
				class:toggle-error={error}
				checked={value}
				on:change={(e) => handleChange(e)}
				{...$$restProps}
			/>

			{#if (_slots.before || _slots.after) && _slots.after}
				<slot name="after" />
			{:else if _slots.default && right}
				<slot />
			{/if}
		</label>
	</div>
{:else}
	<input
		class={className('kit-toggle', _class)}
		type="checkbox"
		class:toggle-info={info}
		class:toggle-success={success}
		class:toggle-warning={warning}
		class:toggle-error={error}
		checked={value}
		on:change={(e) => handleChange(e)}
		{...$$restProps}
	/>
{/if}
