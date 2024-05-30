<script lang="ts">
	import { t } from '$lib/i18n';
	import Icon from '@iconify/svelte';
	import { Btn, Spacer, Toolbar } from 'manakit';

	import logo from '$lib/assets/images/manakit.png';
	import links from '$lib/data/links.json';
	import Darkmode from './darkmode.svelte';

	export let isDocs: boolean = false;
	export let handleOpenDrawer: any = undefined;
</script>

<Toolbar class={`appbar position-fixed`}>
	{#if isDocs}
		<Btn id="btn-drawer-mobile" square on:click={() => handleOpenDrawer('mobile')}>
			<Icon icon="material-symbols:menu" />
		</Btn>
		<Btn id="btn-drawer" square on:click={() => handleOpenDrawer()}>
			<slot name="icon-drawer" />
		</Btn>
	{:else}
		<Btn text href="/">
			<div class="logo-docs">
				<img src={logo} alt="manakit-logo" width="100%" height="100%" />
				{$t('sitename')}
			</div>
		</Btn>
	{/if}

	<Spacer />

	<Btn href="/docs">
		{$t('nav.docs')}
	</Btn>

	<Darkmode />

	{#each links as link}
		<Btn title={link.translate} href={link.url} square>
			<Icon icon={link.icon} />
		</Btn>
	{/each}
</Toolbar>

<style lang="scss">
	:global(.position-fixed) {
		position: fixed;
		z-index: 1;
	}

	.logo-docs {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25rem;

		> img {
			width: 44px;
		}
	}
</style>
