<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';

	// state
	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id={$$props.id}
	class={classMap({
		component: 'toolbar',
		default: $$props.class,
		shadow: $$props.shadow || 'xl',
		rounded: $$props.rounded || 'sm'
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color,
		sizing: [$$props, [innerWidth, innerHeight]]
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
