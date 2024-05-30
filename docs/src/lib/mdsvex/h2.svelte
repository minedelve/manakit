<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let id: string | undefined = undefined;

	let href = id && `#${id}`;
	onMount(function createSapperCompatiblePermalink() {
		if (id == null) {
			return;
		}

		href = window.location.origin + window.location.pathname + href;
	});
</script>

<h2 {id}>
	{#if href != undefined}
		<a {href}><Icon icon="ph:link-bold" /></a>
		<slot />
	{:else}
		<slot />
	{/if}
</h2>

<style lang="scss">
	h2 {
		display: flex;
		font-family: var(--font-title);

		a {
			align-items: center;
			vertical-align: middle;
			display: flex;
			color: var(--stone-500);
			opacity: 0.5;
			margin-right: 0.5rem;

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
