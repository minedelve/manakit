<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'card-body',
		default: $$props.class
	})}
	style={styleMap({ default: $$props.style })}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</div>

<style>
	.card-body {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		padding: 2rem;
		gap: 0.5rem;
	}

	.card-body :global(:where(p)) {
		flex-grow: 1;
	}
</style>
