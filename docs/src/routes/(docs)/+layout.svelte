<script lang="ts">
	import '$lib/assets/styles/docs.scss';
	import Icon from '@iconify/svelte';
	import Appbar from '$lib/components/appbar.svelte';
	import Docsbar from '$lib/components/docsbar.svelte';
	import { Drawer } from 'manakit';

	let openDrawer = false;
	let _class = 'md:drawer-open';

	const handleOpenDrawer = (type: string | undefined) =>
		type === 'mobile'
			? (openDrawer = openDrawer ? false : true)
			: (_class = _class === 'md:drawer-open' ? '' : 'md:drawer-open');
</script>

<Drawer bind:open={openDrawer} class={_class}>
	<svelte:fragment slot="aside">
		<Docsbar />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<Appbar {handleOpenDrawer} isDocs>
			<svelte:fragment slot="icon-drawer">
				{#if _class === 'md:drawer-open'}
					<Icon icon="lucide:sidebar-close" />
				{:else}
					<Icon icon="lucide:sidebar-open" />
				{/if}
			</svelte:fragment>
		</Appbar>
		{openDrawer}
		<slot />
	</svelte:fragment>
</Drawer>
