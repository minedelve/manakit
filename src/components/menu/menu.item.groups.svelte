<script lang="ts">
	import { onMount } from 'svelte';
	import { classMap, styleMap } from '../../libs/helpers';

	export let open: boolean = false;

	$: openDetails = false;

	onMount(() => {
		openDetails = open;
	});

	const handleOpen = () => {
		open = open ? false : true;
		openDetails = open ? false : true;
	};
</script>

{#if $$slots.summary}
	<details
		id={$$props.id}
		class={classMap({
			component: 'menu-item groups',
			default: $$props.class,
			'menu-item--disabled': $$props.disabled
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		open={openDetails}
	>
		<summary on:click={() => handleOpen()}>
			<slot name="summary" />
		</summary>
		<slot />
	</details>
{:else}
	<div
		id={$$props.id}
		class={classMap({
			component: 'menu-item groups',
			default: $$props.class,
			'menu-item--disabled': $$props.disabled
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</div>
{/if}

<style>
	summary::after {
		justify-self: end;
		display: block;
		margin-top: -0.5rem;
		height: 0.5rem;
		width: 0.5rem;
		transform: rotate(45deg);
		transition-property: transform, margin-top;
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		content: '';
		transform-origin: 75% 75%;
		box-shadow: 2px 2px;
		pointer-events: none;
		align-self: center;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	details[open] > summary::after {
		transform: rotate(225deg);
		margin-top: 0;
	}

	details > :global(ul.menu),
	.menu-item.groups > :global(ul.menu) {
		padding: 0;
		position: relative;
		white-space: nowrap;
		margin-inline-start: 1rem;
		padding-inline-start: 0.5rem;
	}

	details > :global(.menu:before),
	.menu-item.groups > :global(.menu:before) {
		position: absolute;
		bottom: 0.75rem;
		inset-inline-start: 0;
		top: 0.75rem;
		width: 1px;
		background-color: var(--menu-color-line);
		opacity: 0.1;
		content: '';
	}

	summary {
		display: list-item;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	summary {
		display: grid;
		grid-auto-flow: column;
		align-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		grid-auto-columns: minmax(auto, max-content) auto max-content;
		user-select: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		text-align: start;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		text-wrap: balance;
		color: var(--menu-color);
		background-color: var(--menu-background);
		cursor: pointer;
	}

	summary:hover {
		background-color: var(--menu-background-hover);
	}

	details,
	div {
		--menu-color: #1f2837;
		--menu-background: #f2f2f2;
		--menu-background-hover: #e0e0e1;
		--menu-color-disabled: #c0c3c5;
		--menu-color-line: #1f2c32;
	}
</style>
