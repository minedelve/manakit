<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/i18n';
	import { Btn, Toolbar } from 'manakit';

	import logo from '$lib/assets/images/manakit.png';
	import { pages } from '$lib/data/pages';

	$: pathname = $page.url.pathname;
</script>

<Toolbar>
	<Btn text href="/">
		<div class="logo-docs">
			<img src={logo} alt="manakit-logo" width="100%" height="100%" />
			{$t('sitename')}
		</div>
	</Btn>
</Toolbar>

{#each pages as section}
	{section.name}
	{#each section.items as page}
		<div class="navbar-docs-items">
			<Btn class="btn-sm" href={page.href} text wide active={page.href === pathname}>
				{page.name}
			</Btn>
		</div>
	{/each}
{/each}

<style lang="scss">
	.navbar-docs-items {
		display: flex;
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
