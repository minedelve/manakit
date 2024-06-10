<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Toolbar, Btn, Spacer, Drawer } from 'manakit';

	export let github: undefined | string = undefined;

	let container: HTMLDivElement | null = null;

	// states
	$: openDrawer = false;

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
</script>

<div class="manakit-preview">
	<Toolbar class="toolbar-sm">
		{#if github}
			<Btn square href={github} target="_blank">
				<Icon icon="mdi:github" />
			</Btn>
		{/if}

		<Spacer />

		<Btn square on:click={() => handleTheme()}>
			<Icon icon="fluent:dark-theme-20-filled" />
		</Btn>

		{#if $$slots.aside}
			<Btn square active={openDrawer} on:click={() => (openDrawer = openDrawer ? false : true)}>
				<Icon icon="tdesign:setting" />
			</Btn>
		{/if}
	</Toolbar>

	{#if $$slots.toolbar}
		<Toolbar class="toolbar-sm">
			<slot name="toolbar" />
		</Toolbar>
	{/if}

	<div class="wrapper">
		<Drawer bind:open={openDrawer} class="sm:drawer-open" right absolute>
			<svelte:fragment slot="aside">
				{#if $$slots.aside}
					<slot name="aside" />
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="wrapper-drawer-content" bind:this={container}>
					<div class={`wrapper-preview ${!openDrawer ? 'full-screen' : ''}`}>
						<slot name="preview" />
					</div>
				</div>
			</svelte:fragment>
		</Drawer>
	</div>
</div>

<style lang="scss">
	.manakit-preview {
		border: 1px solid var(--surface);
		border-radius: 1rem;

		:global(.mk-toolbar:first-child) {
			padding: 0 1rem;
			border-radius: 1rem 1rem 0 0;
		}

		.wrapper {
			border-radius: 0 0 1rem 1rem;

			.wrapper-drawer-content,
			.wrapper-preview {
				height: 100%;
			}

			.wrapper-preview {
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				overflow-x: hidden;
				padding: 1rem;
				display: flex;
				min-height: 6rem;
				background-color: var(--background);
				color: var(--on-background);
				border-bottom-left-radius: 1rem;
			}

			.wrapper-preview.full-screen {
				border-bottom-right-radius: 1rem;
			}
		}
	}
</style>
