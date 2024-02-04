<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	export let open: boolean = false;

	function handleMenuClose() {
		if ($$props.onFocus) {
			document?.body?.removeEventListener('click', handleMenuClose);
			open = false;
		}
	}

	function handleMenuOpen() {
		if ($$props.onFocus) {
			open = true;
			document?.body?.addEventListener('click', handleMenuClose);
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	tabindex="0"
	class={classMap({
		component: 'collapse',
		default: $$props.class,
		'collapse-open': open
	})}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="collapse-title" on:click|stopPropagation={handleMenuOpen}>
		<slot name="title" />
	</div>

	<div
		class={classMap({
			component: 'collapse-content'
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</div>
</div>

<style>
	.collapse {
		position: relative;
		display: grid;
		overflow: hidden;
		/* grid-template-rows: auto 0fr; */
		/* transition: grid-template-rows 0.2s; */
		width: 100%;
		border-radius: 1rem;
	}

	.collapse:not(.collapse-open):not(.collapse-close) > .collapse-title {
		cursor: pointer;
	}

	.collapse-content {
		visibility: hidden;
		grid-column-start: 1;
		grid-row-start: 2;
		min-height: 0;
		transition: visibility 0.2s;
		transition:
			padding 0.2s ease-out,
			background-color 0.2s ease-out;
		padding-left: 1rem;
		padding-right: 1rem;
		cursor: unset;
	}

	.collapse-title {
		width: 100%;
		padding: 1rem;
		padding-inline-end: 3rem;
		min-height: 3.75rem;
		transition: background-color 0.2s ease-out;
		position: relative;

		grid-column-start: 1;
		grid-row-start: 1;
	}

	.collapse-open .collapse-content {
		padding-bottom: 1rem;
		transition:
			padding 0.2s ease-out,
			background-color 0.2s ease-out;
		visibility: visible;
		min-height: -moz-fit-content;
		min-height: fit-content;
	}

	.collapse-open {
		/* grid-template-rows: auto 1fr; */
	}
</style>
