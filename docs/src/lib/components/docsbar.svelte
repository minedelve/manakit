<script lang="ts">
	import { t } from '$lib/i18n';
	import { Btn, Toolbar } from 'manakit';

	import logo from '$lib/assets/images/manakit.png';
	import { pages } from '$lib/data/pages';
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
		<li>
			<a href={page.href}>{page.name}</a>
		</li>
	{/each}
{/each}

<style lang="scss">
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
