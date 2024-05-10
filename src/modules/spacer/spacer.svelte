<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
</script>

<div class={className('mk-spacer', _class)} {...$$restProps} />
