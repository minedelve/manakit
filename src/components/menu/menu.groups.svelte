<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<details
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
	open={$$props.open}
>
	<summary><span>Parent</span></summary>
	<slot />
</details>

<style>
	summary::after {
		justify-self: end;
		display: block;
		margin-top: -0.5rem rem;
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

	details {
		--btn-color: #1f2837;
		--btn-background: #f2f2f2;
		--btn-background-hover: #d2d2d2;
		--btn-background-disabled: #d9dadc;
		--btn-color-disabled: #b9babe;
	}

	details[open] > summary::after {
		transform: rotate(225deg);
		margin-top: 0;
	}

	details > :global(ul.menu) {
		padding: 0;
		position: relative;
		white-space: nowrap;
		margin-inline-start: 1rem;
		padding-inline-start: 0.5rem;
	}

	details > :global(.menu:before) {
		position: absolute;
		bottom: 0.75rem;
		inset-inline-start: 0;
		top: 0.75rem;
		width: 1px;
		background-color: #1f2c32;
		opacity: 0.1;
		content: '';
	}

	summary {
		display: list-item;
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
		color: var(--btn-color);
		background-color: var(--btn-background);
		cursor: pointer;
	}

	summary:hover {
		background-color: var(--btn-background-hover);
	}
</style>
