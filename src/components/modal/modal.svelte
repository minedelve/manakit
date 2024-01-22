<script lang="ts">
	let modal: HTMLDialogElement;
	let status: boolean = false;
	$: {
		if ($$props.open) {
			modal.showModal();
			status = true;
		} else if (status) {
			modal.close();
			status = false;
		}
	}

	function handleKeyDown(event: any) {
		if (event.key === 'Escape') {
			event.preventDefault();
		}
	}

	// function handleClickOutside(event: any) {
	// 	console.log('handleClickOutside', event, modal);
	// 	if (event.target === modal) {
	// 		modal.close();
	// 		status = false;
	// 	}
	// }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={modal} class="modal" on:keydown={handleKeyDown}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Obiwan!</h3>
		<slot />
	</div>
	{#if $$props.clickOutside}
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	{/if}
</dialog>
