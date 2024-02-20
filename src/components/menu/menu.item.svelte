<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<li
	id={$$props.id}
	class={classMap({
		component: 'menu-item',
		default: $$props.class,
		'menu-item--disabled': $$props.disabled
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	{#if $$props.href}
		<a href={$$props.href} target={$$props.target} role={$$props.role}>
			<slot />
		</a>
	{:else}
		<button
			role={$$props.role}
			disabled={$$props.disabled}
			type={$$props.type}
			on:click
			on:blur
			on:change
			on:input
		>
			<slot />
		</button>
	{/if}
</li>

<style>
	li {
		position: relative;
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: stretch;
	}

	li :global(.badge) {
		justify-self: end;
	}

	a,
	button {
		display: grid;
		grid-auto-flow: column;
		align-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		grid-auto-columns: minmax(auto, max-content) auto max-content;
		user-select: none;
		text-decoration: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		text-align: start;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		text-wrap: balance;
		color: var(--menu-color);
		background-color: var(--menu-background);
		cursor: pointer;
		font-size: 100%;
	}

	a,
	button {
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.menu-item--disabled a,
	.menu-item--disabled button[disabled] {
		pointer-events: none;
		color: var(--menu-color-disabled);
	}

	a:hover,
	button:hover {
		background-color: var(--menu-background-hover);
	}
</style>
