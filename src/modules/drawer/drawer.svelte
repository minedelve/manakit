<script lang="ts">
	import { className } from '../../utils/class-name.js';
	import { eventNoScroll } from '../../utils/event-dom.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let open: boolean = false;
	export let width: number | string = 0;
	export let fixed: boolean = false;
	export let right: boolean = false;
	export let top: boolean = false;
	export let bottom: boolean = false;

	// states
	$: innerWidth = 0;

	const handleClose = () => (open = false);
	const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && handleClose();

	$: {
		if (innerWidth !== width && width !== 0) handleClose();
		if (fixed) eventNoScroll(open ? 'active' : 'disable');
		width = innerWidth;
	}
</script>

<svelte:window bind:innerWidth />

<div
	class={className('mk-drawer', _class)}
	class:drawer-open={open}
	class:drawer-right={right}
	class:drawer-top={top}
	class:drawer-bottom={bottom}
>
	<input type="checkbox" checked={open} tabindex="-1" />

	<div class="drawer-aside">
		<div
			role="button"
			tabindex="-1"
			aria-label="close sidebar"
			class="drawer-overlay"
			on:click={handleClose}
			on:keydown={handleKeyDown}
		/>
		<aside>
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
