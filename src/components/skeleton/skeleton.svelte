<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'skeleton',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
></div>

<style>
	.skeleton {
		border-radius: 1rem;
		background-color: #e5e6e6;
		will-change: background-position;
		animation: skeleton 1.8s ease-in-out infinite;
		background-image: linear-gradient(
			95deg,
			transparent 0%,
			transparent 40%,
			white 50%,
			transparent 60%,
			transparent 100%
		);
		background-size: 200% auto;
		background-repeat: no-repeat;
		background-position-x: -50%;
	}

	@keyframes skeleton {
		0% {
			background-position: 150%;
		}
		100% {
			background-position: -50%;
		}
	}
</style>
