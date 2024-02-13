<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
	import Alert from '../alert/alert.svelte';
	export let open: boolean = false;

	// $: {
	// 	if (open) {
	// 		setTimeout(() => {
	// 			open = false;
	// 		}, 5000);
	// 	}
	// }
</script>

<!-- {#if open} -->
<div
	id={$$props.id}
	class={classMap({
		component: 'toast',
		default: $$props.class,
		'toast-top': $$props.top,
		'toast-bottom': $$props.bottom,
		'toast-start': $$props.start,
		'toast-center': $$props.center,
		'toast-middle': $$props.middle,
		'toast-end': $$props.end
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</div>

<!-- {/if} -->

<style>
	.toast {
		position: fixed;
		display: flex;
		min-width: -moz-fit-content;
		min-width: fit-content;
		flex-direction: column;
		white-space: nowrap;
		gap: 0.5rem;
		padding: 1rem;
		z-index: 9999;
	}

	:where(.toast) {
		bottom: 0;
		inset-inline-end: 0;
		inset-inline-start: auto;
		top: auto;
	}

	.toast > :global(*) {
		animation: toast-pop 0.25s ease-out;
	}

	.toast:where(.toast-top) {
		bottom: auto;
		top: 0;
	}

	.toast:where(.toast-start) {
		inset-inline-end: auto;
		inset-inline-start: 0;
	}

	.toast:where(.toast-center) {
		inset-inline-end: 50%;
		inset-inline-start: 50%;
	}

	.toast:where(.toast-end) {
		inset-inline-end: 0;
		inset-inline-start: auto;
	}

	.toast:where(.toast-middle) {
		bottom: auto;
		top: 50%;
	}

	.toast:where(.toast-end) {
		bottom: 0;
		top: auto;
	}

	@keyframes toast-pop {
		0% {
			transform: scale(0.9);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
