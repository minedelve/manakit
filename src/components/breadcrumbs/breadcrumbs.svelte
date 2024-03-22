<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	// module
	import Breadcrumbs from './breadcrumbs.module.svelte';

	let props: any;
	export let divider: string = '/';
	let component = Breadcrumbs;

	$: className = classMap({
		component: 'breadcrumbs',
		default: $$props.class,
		breadcrumbs: $$props.size
	});

	$: styleProps = styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	});

	console.log($$slots);
</script>

<svelte:component this={component} {className} {styleProps} {...props} {...$$restProps}>
	<!-- slot: custom -->
	<svelte:fragment slot="custom" let:item>
		{#if $$slots.custom}
			<slot name="custom" {item} />
		{/if}
	</svelte:fragment>
	<!-- /slot: custom -->
	<!-- slot: divider -->
	<svelte:fragment slot="divider">
		{#if $$slots.divider}
			<slot name="divider" />
		{:else}
			{divider}
		{/if}
	</svelte:fragment>
	<!-- /slot: divider -->
</svelte:component>

<style>
	:global(.breadcrumbs) {
		--breadcrumbs-color: var(--color-surface-on-container);
		--breadcrumbs-color-divider: var(--color-surface-container-disabled);
		max-width: 100%;
		overflow-x: auto;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	:global(.breadcrumbs > ul) {
		display: flex;
		align-items: center;
		white-space: nowrap;
		min-height: min-content;
	}

	:global(.breadcrumbs > ul > li) {
		display: flex;
		align-items: center;
	}

	:global(.breadcrumbs > ul > li span) {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--breadcrumbs-color);
	}

	:global(.breadcrumbs > ul > li > a:hover span) {
		text-decoration: underline;
	}

	:global(.breadcrumbs) :global(.divider) {
		padding: 0 8px;
		vertical-align: middle;
		color: var(--breadcrumbs-color-divider);
	}
</style>
