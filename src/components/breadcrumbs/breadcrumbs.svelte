<script lang="ts">
	export let items: Array<string> | Props[] = [];
	export let divider: string = '/';

	let nbItems = 0;
	$: {
		nbItems = items ? items.length - 1 : 0;
	}

	interface Props {
		title: string;
		disabled?: boolean;
		href?: string;
	}
</script>

<ul class="breadcrumbs">
	{#each items as item, index}
		{#if typeof item === 'string'}
			<li class="item">{item}</li>
		{:else if item.title}
			{#if item.href && !item.disabled}
				<li class="item">
					<a href={item.href}>{item.title}</a>
				</li>
			{:else}
				<li class="item">{item.title}</li>
			{/if}
		{/if}

		{#if index < nbItems}
			<li class="divider">
				{#if $$slots.divider}
					<slot name="divider" />
				{:else}
					{divider}
				{/if}
			</li>
		{/if}
	{/each}
</ul>

<style>
	.breadcrumbs {
		display: flex;
		align-items: center;
		line-height: 1.375rem;
		padding: 16px 12px;
	}

	.breadcrumbs .item {
		align-items: center;
		color: inherit;
		display: inline-flex;
		padding: 0 4px;
		text-decoration: none;
		vertical-align: middle;
	}

	.breadcrumbs .divider {
		display: inline-block;
		padding: 0 8px;
		vertical-align: middle;
	}
</style>
