<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

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
	open={$$props.open}
>
	<summary>
		<slot name="section" />
	</summary>
	<slot />
</details>

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
		background-color: var(--menu-color-line);
		opacity: 0.1;
		content: '';
	}

	summary {
		display: list-item;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
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
</style>
