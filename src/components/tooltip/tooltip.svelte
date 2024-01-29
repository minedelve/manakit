<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'tooltip',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style
	})}
>
	<slot />
</div>

<style>
	.tooltip {
		position: relative;
		display: inline-block;
		text-align: center;
	}
</style>
