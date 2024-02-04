<script lang="ts">
	import { browser } from '$app/environment';
	import { classMap, styleMap } from '../../libs/helpers';

	export let open: boolean = false;

	function handleHello() {
		if ($$props.openOnHover) open = true;
	}

	function handleBye() {
		if ($$props.openOnHover) open = false;
	}

	function handleMenuClose() {
		console.log('ho');
		document?.body?.removeEventListener('click', handleMenuClose);
		open = false;
	}

	function handleMenuOpen() {
		console.log('hey');
		document?.body?.addEventListener('click', handleMenuClose);
	}

	// $: {
	// 	if (browser) {
	// 		if (open) {
	// 			console.log('hey');
	// 			document?.body?.addEventListener('click', handleMenuClose);
	// 		} else {
	// 			console.log('ho');
	// 			document?.body?.removeEventListener('click', handleMenuClose);
	// 		}
	// 	}
	// }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id={$$props.id}
	class={classMap({
		component: 'dropdown',
		default: $$props.class,
		'dropdown-open': open
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	on:mouseover={() => handleHello()}
	on:mouseleave={() => handleBye()}
	on:click|stopPropagation={handleMenuOpen}
>
	<slot name="action" />
	<div class="dropdown-content">
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
		display: none;
	}

	.dropdown .dropdown-content {
		position: absolute;
	}
</style>
