<script lang="ts">
	import { className } from '../../utils/class-name.js';
	import { eventNoScroll } from '../../utils/event-dom.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let open: boolean = false;
	export let width: number | string = 0;
	export let permament: boolean = false;
	export let left: boolean = false;
	export let right: boolean = false;
	export let top: boolean = false;
	export let bottom: boolean = false;
	export let absolute: boolean = false;

	// states
	$: innerWidth = 0;

	const handleClose = () => (open = false);
	const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && handleClose();

	$: {
		if (innerWidth !== width && width !== 0) handleClose();
		if (permament) eventNoScroll(open ? 'active' : 'disable');
		width = innerWidth;
	}
</script>

<svelte:window bind:innerWidth />
<div
	class={className('mk-drawer', _class)}
	class:drawer-left={left}
	class:drawer-right={right}
	class:drawer-top={top}
	class:drawer-bottom={bottom}
	class:drawer-absolute={absolute}
>
	<input type="checkbox" bind:checked={open} tabindex="-1" />

	<div class="drawer-aside" class:aside-absolute={absolute}>
		<div
			role="button"
			tabindex="-1"
			aria-label="close sidebar"
			class="drawer-overlay"
			on:click={handleClose}
			on:keydown={handleKeyDown}
		/>
		<aside class:light class:dark>
			<!-- slot: aside -->
			<slot name="aside" />
			<!-- /slot: aside -->
		</aside>
	</div>

	<div class="drawer-content" {...$$restProps}>
		<!-- slot: content -->
		<slot name="content" />
		<!-- /slot: content -->
	</div>
</div>
