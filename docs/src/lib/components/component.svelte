<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Toolbar, Btn, Spacer } from 'manakit';

	export let onlyCode: boolean = false;
	export let onlyPreview: boolean = false;
	export let changeTheme: boolean = true;
	export let github: undefined | string = undefined;

	let screen = 'preview';
	let codeContainer: HTMLDivElement | null = null;
	let container: HTMLDivElement | null = null;

	function handleCopy() {
		if (codeContainer) {
			const codeContent = codeContainer.innerText;
			navigator.clipboard
				.writeText(codeContent)
				.then(() => {
					console.log('Content copied to clipboard');
				})
				.catch((err) => {
					console.error('Failed to copy: ', err);
				});
		}
	}

	function handleTheme() {
		const colorScheme = localStorage.getItem('color-scheme');
		if (container) {
			if (colorScheme === 'dark') {
				if (container.classList.contains('light')) {
					container.classList.remove('light');
					container.classList.add('dark');
				} else {
					container.classList.remove('dark');
					container.classList.add('light');
				}
			} else {
				if (container.classList.contains('dark')) {
					container.classList.remove('dark');
					container.classList.add('light');
				} else {
					container.classList.remove('light');
					container.classList.add('dark');
				}
			}
		}
	}

	$: {
		if (onlyCode) screen = 'code';
		else if (onlyPreview) screen = 'preview';
	}
</script>

<div class="manakit-preview">
	<Toolbar class="toolbar-sm">
		{#if (onlyPreview && !onlyCode) || (!onlyPreview && !onlyCode)}
			<Btn square on:click={() => (screen = 'preview')} active={screen === 'preview'}>
				<Icon icon="material-symbols:preview" />
			</Btn>
		{/if}

		{#if (onlyCode && !onlyPreview) || (!onlyCode && !onlyPreview)}
			<Btn square on:click={() => (screen = 'code')} active={screen === 'code'}>
				<Icon icon="material-symbols:code" />
			</Btn>
		{/if}

		<Spacer />

		{#if changeTheme === true && !onlyCode}
			<Btn square on:click={() => handleTheme()}>
				<Icon icon="fluent:dark-theme-20-filled" />
			</Btn>
		{/if}
		{#if github}
			<Btn square href={github} target="_blank">
				<Icon icon="mdi:github" />
			</Btn>
		{/if}
		{#if screen !== 'preview'}
			<Btn square on:click={() => handleCopy()}>
				<Icon icon="ph:copy" />
			</Btn>
		{/if}
	</Toolbar>
	<div class="wrapper" bind:this={container}>
		{#if screen === 'preview'}
			<div class="wrapper-preview">
				<slot name="preview" />
			</div>
		{:else}
			<div class="wrapper-code" bind:this={codeContainer}>
				<slot />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.manakit-preview {
		border: 1px solid var(--surface);
		border-radius: 1rem;

		:global(.mk-toolbar) {
			padding: 0 1rem;
			border-radius: 1rem 1rem 0 0;
		}

		.wrapper {
			background-color: var(--background);
			color: var(--on-background);
			border-radius: 0 0 1rem 1rem;

			.wrapper-preview {
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				overflow-x: hidden;
				padding: 1rem;
				display: flex;
				min-height: 6rem;
			}

			.wrapper-code {
				background: #2b3440;
				border-radius: 0 0 1rem 1rem;
				:global(pre[class*='language-']) {
					margin: 0 !important;
				}
			}
		}
	}
</style>
