<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'card-actions',
		default: $$props.class,
		'justify-start': $$props.start,
		'justify-center': $$props.center,
		'justify-end': $$props.end
	})}
	style={styleMap({ default: $$props.style })}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</div>

<style>
	.card-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 0.5rem;
	}
</style>
