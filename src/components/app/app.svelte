<script lang="ts">
	import { classMap } from '../../libs/helpers';
</script>

<div
	class={classMap({
		component: 'app',
		default: $$props.class
	})}
	{...$$props}
>
	<slot />
</div>

<style>
	div {
		--app-background: var(--color-background);
		--app-color: var(--color-on-background);

		position: relative;
		display: grid;
		grid-auto-columns: max-content;
		width: 100%;
		color: var(--app-color);
		background-color: var(--app-background);
	}
</style>
