<script lang="ts">
	import { className } from '../../utils/class-name.js';
	import { menuState } from '../../stores/index.js';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let open: boolean = false;
	export let openOnHover: boolean = false;

	let ref: HTMLElement;
	let currentRef: HTMLElement | null;
	const isOpen = writable(open);

	menuState.subscribe((currentMenu) => {
		currentRef = currentMenu;
	});
	function handleAction() {
		if (open) {
			menuState.set(ref);
			document?.body?.addEventListener('click', handleMenuClose);
		} else handleMenuClose();
	}

	function handleMenuClose() {
		menuState.set(null);
		document?.body?.removeEventListener('click', handleMenuClose);
		open = false;
	}

	function handleMouse(state: string) {
		if (openOnHover && state === 'over') open = true;
		if (openOnHover && state === 'leave') open = false;
	}

	onMount(() => {
		const unsubscribe = menuState.subscribe((currentMenu) => {
			isOpen.set(currentMenu === ref);
		});

		return () => {
			unsubscribe();
			handleMenuClose();
		};
	});

	const handleContentClick = () => {
		handleMenuClose();
	};

	$: {
		if (currentRef !== ref) {
			isOpen.set(false);
			open = false;
		}
	}
</script>

<svelte:window on:click={() => handleMenuClose()} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:this={ref}
	class={className('mk-menu')}
	class:menu-open={$isOpen}
	on:mouseover={() => handleMouse('over')}
	on:mouseleave={() => handleMouse('leave')}
	on:click|stopPropagation={handleAction}
>
	<slot name="activator" />

	{#if $isOpen}
		<div
			class={className('mk-menu-content', _class)}
			on:click|stopPropagation={handleContentClick}
			{...$$restProps}
		>
			<slot />
		</div>
	{/if}
</div>
