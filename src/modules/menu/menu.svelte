<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let open: boolean = false;
	export let openOnHover: boolean = false;

	function handleMenuOpen() {
		document?.body?.addEventListener('click', handleMenuClose);
	}

	function handleMenuClose() {
		document?.body?.removeEventListener('click', handleMenuClose);
		open = false;
	}

	function handleMouse(state: string) {
		if (openOnHover && state === 'over') open = true;
		if (openOnHover && state === 'leave') open = false;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={className('mk-menu')}
	class:menu-open={open}
	on:mouseover={() => handleMouse('over')}
	on:mouseleave={() => handleMouse('leave')}
	on:click|stopPropagation={handleMenuOpen}
>
	<slot name="activator" />

	{#if open}
		<div class={className('mk-menu-content', _class)} {...$$restProps}>
			<slot />
		</div>
	{/if}
</div>
