<script lang="ts">
	import { browser } from '$app/environment';
	import { colorScheme } from '$lib/store';
	import Icon from '@iconify/svelte';
	import { Btn } from 'manakit';

	function handleScheme(scheme: string) {
		colorScheme.set(scheme);
		localStorage.setItem('color-scheme', scheme);
	}
</script>

<Btn square on:click={() => handleScheme($colorScheme === 'dark' ? 'light' : 'dark')}>
	{#if browser}
		{#if $colorScheme === 'dark'}
			<Icon icon="ph:sun-bold" />
		{:else}
			<Icon icon="material-symbols:dark-mode" />
		{/if}
	{/if}
</Btn>
