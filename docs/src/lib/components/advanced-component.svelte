<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Toolbar, Btn, Spacer, Drawer } from 'manakit';

	export let github: undefined | string = undefined;

	let container: HTMLDivElement | null = null;

	// states
	$: openDrawer = true;

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
		if (!$$slots.aside) openDrawer = false;
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
		<Drawer bind:open={openDrawer} right>
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

			:global(.mk-drawer > input:not(:checked) ~ .drawer-aside) {
				visibility: hidden;
				display: none;
			}

			:global(.drawer-aside),
			:global(.drawer-aside aside) {
				height: 100%;
			}

			:global(.drawer-aside aside) {
				width: 228px;
				border-bottom-right-radius: 1rem;
				padding: 0.25rem;
			}

			:global(.drawer-aside aside > p) {
				font-size: 0.875rem;
				opacity: 0.7;
			}

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
