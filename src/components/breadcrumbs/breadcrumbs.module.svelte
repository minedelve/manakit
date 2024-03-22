<script lang="ts">
	import type { ItemsProps } from './breadcrumbs.type';

	export let items: ItemsProps = [];

	let nbItems: number = 0;
	$: {
		nbItems = items ? items.length - 1 : 0;
	}
</script>

<div id={$$props.id} class={$$props.className} style={$$props.styleProps}>
	<ul>
		{#each items as item, index}
			<li>
				{#if typeof item === 'string'}
					<span>{item}</span>
				{:else if item.href && !item.disabled}
					<a href={item.href}>
						<span>
							{#if $$slots.custom}
								<slot name="custom" {item} />
							{/if}
							{item.title}
						</span>
					</a>
				{:else}
					<span>{item.title}</span>
				{/if}
			</li>
			{#if index < nbItems}
				<li class="divider">
					<slot name="divider" />
				</li>
			{/if}
		{/each}
	</ul>
</div>
