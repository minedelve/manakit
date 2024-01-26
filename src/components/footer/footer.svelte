<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<footer
	id={$$props.id}
	class={classMap({
		component: 'footer',
		default: $$props.class,
		'footer-center': $$props.center
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</footer>

<style>
	footer {
		display: grid;
		width: 100%;
		grid-auto-flow: row;
		place-items: start;
		column-gap: 1rem;
		row-gap: 2.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	footer > :global(*) {
		display: grid;
		place-items: start;
		gap: 0.5rem;
	}

	.footer-center {
		grid-auto-flow: row dense;
		place-items: center;
		text-align: center;
	}

	.footer-center > :global(*) {
		place-items: center;
	}
</style>
