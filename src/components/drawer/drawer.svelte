<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let open: boolean = false;

	$: innerWidth = 0;
	let width = 0;

	const handleClose = () => (open = false);
	const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && handleClose();

	$: {
		if (innerWidth !== width) handleClose();
		width = innerWidth;
	}
</script>

<svelte:window bind:innerWidth />

<div
	id={$$props.id}
	class={classMap({
		component: 'drawer',
		default: $$props.class,
		'drawer-open': open,
		'drawer-end': $$props.end
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<input type="checkbox" class="drawer-toggle" checked={open} />

	<div
		class={classMap({
			component: 'drawer-side',
			default: $$props.classSide
		})}
	>
		<div
			role="button"
			on:click={handleClose}
			on:keydown={handleKeyDown}
			tabindex="-1"
			aria-label="close sidebar"
			class="drawer-overlay"
		/>
		<aside>
			<slot name="aside" />
		</aside>
	</div>

	<div
		class={classMap({
			component: 'drawer-content',
			default: $$props.classContent
		})}
		inert={open}
	>
		<slot />
	</div>
</div>

<style>
	.drawer {
		position: relative;
		display: grid;
		grid-auto-columns: max-content auto;
		width: 100%;
	}

	.drawer-toggle {
		position: fixed;
		height: 0;
		width: 0;
		appearance: none;
		opacity: 0;
	}

	.drawer-content {
		grid-column-start: 2;
		grid-row-start: 1;
		min-width: 0;
	}

	.drawer-toggle:checked ~ .drawer-side {
		pointer-events: auto;
		visibility: visible;
		overflow-y: auto;
	}

	.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
		background-color: var(--color-shadow);
		opacity: 0.42;
	}

	.drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
		transform: translate(0);
	}

	.drawer-side {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}

	.drawer-side {
		pointer-events: none;
		position: fixed;
		inset-inline-start: 0;
		top: 0;
		grid-column-start: 1;
		grid-row-start: 1;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-template-rows: repeat(1, minmax(0, 1fr));
		align-items: flex-start;
		justify-items: start;
		overflow-y: auto;
		overscroll-behavior: contain;
		height: 100vh;
		height: 100dvh;
	}

	.drawer-side > * {
		grid-column-start: 1;
		grid-row-start: 1;
	}

	.drawer-side > aside {
		min-height: 100%;
		background: var(--color-surface);
	}

	.drawer-side > .drawer-overlay {
		position: sticky;
		top: 0;
		place-self: stretch;
		cursor: pointer;
		background-color: transparent;
		transition-property: color, background-color, border-color, opacity, text-decoration-color, fill,
			stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
	}

	.drawer-side > *:not(.drawer-overlay) {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.3s;
		will-change: transform;
		transform: translate(-100%);
	}

	.drawer-end .drawer-toggle ~ .drawer-side {
		grid-column-start: 2;
		justify-items: end;
	}

	.drawer-end {
		grid-auto-columns: auto max-content;
	}

	.drawer-end .drawer-side > *:not(.drawer-overlay) {
		transform: translate(100%);
	}

	.drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
		transform: translate(0);
	}

	.drawer-end .drawer-toggle ~ .drawer-content {
		grid-column-start: 1;
	}
</style>
