<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'tooltip',
		default: $$props.class,
		'tooltip-open': $$props.open,
		'tooltip-bottom': $$props.bottom,
		'tooltip-left': $$props.left,
		'tooltip-right': $$props.right
	})}
	style={styleMap({
		default: $$props.style
	})}
	data-value={$$props.value}
>
	<slot />
</div>

<style>
	.tooltip {
		position: relative;
		display: inline-block;
		text-align: center;
	}

	.tooltip.tooltip-open:before {
		opacity: 1;
		transition-delay: 75ms;
	}

	.tooltip:hover:before {
		opacity: 1;
		transition-delay: 75ms;
	}

	.tooltip.tooltip-open:after {
		opacity: 1;
		transition-delay: 75ms;
	}

	.tooltip:hover:after {
		opacity: 1;
		transition-delay: 75ms;
	}

	.tooltip:before {
		max-width: 20rem;
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		background-color: #2b3440;
		color: #d7dde5;
		width: max-content;
	}

	.tooltip:before {
		position: absolute;
		pointer-events: none;
		z-index: 1;
		content: attr(data-value);
	}

	.tooltip:before,
	.tooltip:after {
		opacity: 0;
		transition-delay: 0.1s;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.tooltip:before,
	.tooltip-top:before {
		transform: translate(-50%);
		top: auto;
		left: 50%;
		right: auto;
		bottom: calc(100% + 1px + 0.1875rem);
	}

	.tooltip-bottom:before {
		transform: translate(-50%);
		top: calc(100% + 1px + 0.1875rem);
		left: 50%;
		right: auto;
		bottom: auto;
	}

	.tooltip-left:before {
		transform: translateY(-50%);
		top: 50%;
		left: auto;
		right: calc(100% + 1px + 0.1875rem);
		bottom: auto;
	}

	.tooltip-right:before {
		transform: translateY(-50%);
		top: 50%;
		left: calc(100% + 1px + 0.1875rem);
		right: auto;
		bottom: auto;
	}

	.tooltip:after {
		position: absolute;
		content: '';
		border-style: solid;
		border-width: 0;
		width: 0;
		height: 0;
		display: block;
	}
</style>
