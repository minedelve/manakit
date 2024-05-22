<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
</script>

<div class={className('mk-app', _class)} class:light class:dark {...$$restProps}>
	<div class="mk-app--wrapper">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</div>
