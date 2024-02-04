<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let open: boolean = false;

	function handleHello() {
		if ($$props.openOnHover) open = true;
	}

	function handleBye() {
		if ($$props.openOnHover) open = false;
	}

	function handleMenuClose() {
		document?.body?.removeEventListener('click', handleMenuClose);
		open = false;
	}

	function handleMenuOpen() {
		document?.body?.addEventListener('click', handleMenuClose);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id={$$props.id}
	class={classMap({
		component: 'dropdown',
		'dropdown-open': open,
		'dropdown-end': $$props.end,
		'dropdown-left': $$props.left,
		'dropdown-right': $$props.right,
		'dropdown-bottom': $$props.bottom,
		'dropdown-top': $$props.top
	})}
	on:mouseover={() => handleHello()}
	on:mouseleave={() => handleBye()}
	on:click|stopPropagation={handleMenuOpen}
>
	<slot name="action" />
	<div
		class={classMap({
			component: 'dropdown-content',
			default: $$props.class
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}
	.dropdown.dropdown-open .dropdown-content {
		visibility: visible;
		opacity: 1;
		display: block;
	}

	.dropdown .dropdown-content {
		visibility: hidden;
		opacity: 0;
		display: initial;
		transform-origin: top;
	}

	.dropdown .dropdown-content {
		position: absolute;
		background-color: var(--color-surface);
		border-radius: 0.5rem;
		width: max-content;
		height: max-content;
	}

	.dropdown-end.dropdown-right .dropdown-content,
	.dropdown-end.dropdown-left .dropdown-content {
		bottom: 0;
		top: auto;
	}

	.dropdown-left .dropdown-content {
		bottom: auto;
		inset-inline-end: 100%;
		top: 0;
		transform-origin: right;
	}

	.dropdown-right .dropdown-content {
		bottom: auto;
		inset-inline-start: 100%;
		top: 0;
		transform-origin: left;
	}

	.dropdown-end:not(.dropdown-left) .dropdown-content {
		inset-inline-end: 0;
	}

	.dropdown-bottom .dropdown-content {
		bottom: auto;
		top: 100%;
		transform-origin: top;
	}

	.dropdown-top .dropdown-content {
		bottom: 100%;
		top: auto;
		transform-origin: bottom;
	}
</style>
