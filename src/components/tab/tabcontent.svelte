<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'tab-content',
		default: $$props.class,
		'tab-content-active': $$props.section === $$props.active
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	role="tabpanel"
>
	<slot />
</div>

<style>
	.tab-content {
		margin-top: 1px;
		display: none;
		border-color: transparent;
		border-width: 1px;
	}

	.tab-content-active {
		display: block;
	}
</style>
