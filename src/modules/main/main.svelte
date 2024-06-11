<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'main' | 'div' = 'main';
</script>

<svelte:element this={tag} class={className('kit-main', _class)} {...$$restProps}>
	<div class="kit-main--wrapper">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</svelte:element>
