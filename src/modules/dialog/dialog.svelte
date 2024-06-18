<script lang="ts">
	import { className } from '../../utils/class-name.js';
	import { eventNoScroll } from '$lib/utils/event-dom.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let open: boolean = false;
	export let persistent: boolean = false;
	export let fullscreen: boolean = false;

	// states
	let dialog: HTMLDialogElement;

	$: {
		if (dialog && open) dialog.showModal();
		if (dialog && !open) dialog.close();
		eventNoScroll(open ? 'active' : 'disable');
	}

	function handleKeyDown(event: any) {
		if (!persistent && event.key === 'Escape') {
			if ($$props?.closewithEsc) {
				dialog.close();
				open = false;
			} else {
				event.preventDefault();
			}
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	class={className('kit-dialog', _class)}
	class:dialog-persistent={persistent}
	class:dialog-fullscreen={fullscreen}
	class:light
	class:dark
	on:close={() => (!persistent ? (open = false) : '')}
	on:keydown={handleKeyDown}
	on:click|self={() => (!persistent ? dialog.close() : '')}
	{...$$restProps}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="dialog-container" on:click|stopPropagation>
		<slot />
	</div>
</dialog>
