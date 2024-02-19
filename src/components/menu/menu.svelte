<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<ul
	id={$$props.id}
	class={classMap({
		component: 'menu',
		default: $$props.class,
		'menu-is-horizontal': $$props.horizontal,
		'menu-is-vertical': $$props.vertical
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</ul>

<style>
	:global(ol),
	:global(ul),
	.menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem;
	}
</style>
