<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<table
	id={$$props.id}
	class={classMap({
		component: 'table',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</table>

<style>
	.table {
		text-indent: 0;
		border-color: inherit;
		border-collapse: collapse;
	}

	.table {
		position: relative;
		width: 100%;
		border-radius: 1rem;
		text-align: left;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.table :global(:where(thead, tfoot)) {
		white-space: nowrap;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 700;
		color: #82878e;
	}

	.table :global(:where(thead, tbody)) :global(:where(tr:not(:last-child))),
	.table :global(:where(thead, tbody)) :global(:where(tr:first-child:last-child)) {
		border-bottom-width: 1px;
		border-bottom-color: #e5e5e5;
	}

	.table :global(:where(th, td)) {
		padding: 0.75rem 1rem;
		vertical-align: middle;
	}
</style>
