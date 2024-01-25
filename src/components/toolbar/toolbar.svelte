<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'toolbar',
		default: $$props.class
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
	.toolbar {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		min-height: 4rem;
		width: 100%;
	}
</style>
