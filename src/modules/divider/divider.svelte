<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let inset: boolean = false;
	export let start: boolean = false;
	export let end: boolean = false;
</script>

<div
	class={className('kit-divider', _class)}
	class:divider-inset={inset}
	class:divider-start={start}
	class:divider-end={end}
	class:light
	class:dark
	{...$$restProps}
>
	<slot />
</div>
