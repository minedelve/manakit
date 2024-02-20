<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<ul
	id={$$props.id}
	class={classMap({
		component: 'menu',
		default: $$props.class,
		menu: $$props.size,
		'menu-horizontal': $$props.horizontal,
		'menu-vertical': $$props.vertical
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
		--menu-color: #1f2837;
		--menu-background: #f2f2f2;
		--menu-background-hover: #e0e0e1;
		--menu-color-disabled: #c0c3c5;
		--menu-color-line: #1f2c32;

		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem;
	}
</style>
