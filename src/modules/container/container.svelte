<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let fluid: boolean = false;
</script>

<div class={className('mk-container', _class)} class:container-fluid={fluid} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</div>
