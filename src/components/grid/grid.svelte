<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'grid',
		default: $$props.class,
		'grid-rows': $$props.rows,
		'grid-cols': $$props.cols,
		'grid-flow': $$props.flow,
		'row-span': $$props.rowsSpan,
		'row-start': $$props.rowsStart,
		'row-end': $$props.rowsEnd,
		'col-span': $$props.colsSpan,
		'col-start': $$props.colsStart,
		'col-end': $$props.colsEnd,
		'auto-rows': $$props.autoRows,
		'auto-cols': $$props.autoRow,
		gap: $$props.gap
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</div>

<style>
</style>
