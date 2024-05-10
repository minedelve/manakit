<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let open: boolean = false;

	// state
	let modal: HTMLDialogElement;
	let isModalOpen: boolean;
	$: {
		if (open) {
			modal.showModal();
			isModalOpen = modal?.getAttribute('open') !== null;
		}

		if (isModalOpen && !open) {
			modal.close();
		}
	}

	function handleKeyDown(event: any) {
		if (event.key === 'Escape') {
			if ($$props?.closewithEsc) {
				modal.close();
				open = false;
			} else {
				event.preventDefault();
			}
		}
	}

	function handleClickOutside() {
		modal.close();
		open = false;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={modal} class={className('mk-modal', _class)} on:keydown={handleKeyDown}>
	<div class="modal-container">
		<slot />
	</div>
	{#if $$props.clickOutside}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<form method="dialog" class="modal-backdrop" on:click={() => handleClickOutside()}>
			<button>close</button>
		</form>
	{/if}
</dialog>
