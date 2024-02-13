<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let checked = false;

	const handleChange = (e: any) => {
		checked = e?.target?.checked;
	};
</script>

{#if $$props.before || $$props.after}
	<div class="toggle-area">
		<label class="label">
			{#if $$props.before}
				<span class="label-text">{$$props.before}</span>
			{/if}
			<input
				id={$$props.id}
				class={classMap({
					component: 'toggle',
					default: $$props.class,
					toggle: $$props.size
				})}
				style={styleMap({
					default: $$props.style,
					background: $$props.background,
					color: $$props.color
				})}
				disabled={$$props.disabled}
				type="checkbox"
				{checked}
				on:change={(e) => handleChange(e)}
				{...$$props}
			/>
			{#if $$props.after}
				<span class="label-text">{$$props.after}</span>
			{/if}
		</label>
	</div>
{:else}
	<input
		id={$$props.id}
		class={classMap({
			component: 'toggle',
			default: $$props.class,
			toggle: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		type="checkbox"
		disabled={$$props.disabled}
		{checked}
		on:change={(e) => handleChange(e)}
		{...$$props}
	/>
{/if}

<style>
	.toggle {
		flex-shrink: 0;

		--handleoffset: 1.5rem;
		--handleoffsetcalculator: calc(var(--handleoffset) * -1);
		--togglehandleborder: 0 0;

		height: 1.5rem;
		width: 3rem;
		cursor: pointer;
		-webkit-appearance: none;
		appearance: none;
		border-radius: 1.9rem;
		border-width: 1px;
		border-color: currentColor;
		background-color: currentColor;
		color: #8e949b;
		transition:
			background,
			box-shadow 0.2s ease-out;
		box-shadow:
			var(--handleoffsetcalculator) 0 0 2px white inset,
			0 0 0 2px white inset,
			var(--togglehandleborder);
	}

	.toggle:checked,
	.toggle[checked='true'],
	.toggle[aria-checked='true'] {
		background-image: none;
		color: #1f2937;
		--handleoffsetcalculator: var(--handleoffset);
	}

	.toggle:disabled {
		cursor: default;
		border-color: #bcbec2;
		background-color: transparent;
		opacity: 0.3;
		--togglehandleborder: 0 0 0 3px #bcbec2 inset,
			var(--handleoffsetcalculator) 0 0 3px #bcbec2 inset;
	}

	.toggle-lg {
		--handleoffset: 2rem;
		height: 2rem;
		width: 4rem;
	}

	.toggle-md {
		--handleoffset: 1.5rem;
		height: 1.5rem;
		width: 3rem;
	}

	.toggle-sm {
		--handleoffset: 0.75rem;
		height: 1.25rem;
		width: 2rem;
	}

	.toggle-xs {
		--handleoffset: 0.5rem;
		height: 1rem;
		width: 1.5rem;
	}

	.toggle-area {
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

	.label {
		display: flex;
		-webkit-user-select: none;
		user-select: none;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.25rem;
	}

	.label-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #1f2937;
	}
</style>
