<script lang="ts">
	export let open: boolean;
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
			event.preventDefault();
		}
	}

	function handleClickOutside() {
		modal.close();
		open = false;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={modal} class="modal" on:keydown={handleKeyDown}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Obiwan!</h3>
		<slot />
	</div>
	{#if $$props.clickOutside}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<form method="dialog" class="modal-backdrop" on:click={() => handleClickOutside()}>
			<button>close</button>
		</form>
	{/if}
</dialog>

<style>
	dialog {
		pointer-events: none;
		position: fixed;
		inset: 0;
		margin: 0;
		display: grid;
		height: 100%;
		max-height: none;
		width: 100%;
		max-width: none;
		justify-items: center;
		padding: 0;
		opacity: 0;
		overscroll-behavior: contain;
		z-index: 999;
		background-color: transparent;
		color: inherit;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-property: transform, opacity, visibility;
		overflow-y: hidden;
	}

	.modal-open,
	.modal:target,
	.modal-toggle:checked + .modal,
	.modal[open] {
		pointer-events: auto;
		visibility: visible;
		opacity: 1;
	}

	:where(.modal) {
		align-items: center;
	}

	.modal-box {
		max-height: calc(100vh - 5em);
		grid-column-start: 1;
		grid-row-start: 1;
		width: 91.666667%;
		max-width: 32rem;

		border-bottom-right-radius: var(--rounded-box, 1rem);
		border-bottom-left-radius: var(--rounded-box, 1rem);
		border-top-left-radius: var(--rounded-box, 1rem);
		border-top-right-radius: var(--rounded-box, 1rem);
		background-color: white;
		padding: 1.5rem;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		box-shadow: #00000040 0 25px 50px -12px;
		overflow-y: auto;
		overscroll-behavior: contain;
	}

	.modal-backdrop {
		z-index: -1;
		grid-column-start: 1;
		grid-row-start: 1;
		display: grid;
		align-self: stretch;
		justify-self: stretch;
		color: transparent;
	}

	.modal-backdrop > button {
		cursor: pointer;
		background-color: transparent;
		background-image: none;
	}

	.modal:not(dialog:not(.modal-open)),
	.modal::backdrop {
		background-color: #0006;
		animation: modal-pop 0.2s ease-out;
	}
</style>
