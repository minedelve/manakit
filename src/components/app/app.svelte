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
		position: relative;
		display: grid;
		/* grid-auto-columns: max-content; */
		width: 100%;
	}
</style>
