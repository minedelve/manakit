<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<span
	id={$$props.id}
	class={classMap({
		component: 'footer-title',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</span>

<style>
	span {
		margin-bottom: 0.5rem;
		font-weight: 700;
		text-transform: uppercase;
		opacity: 0.6;
	}
</style>
