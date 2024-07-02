<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let error: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let outline: boolean = false;
</script>

<div
	role="alert"
	class={className('mk-alert', _class)}
	class:light
	class:dark
	class:alert-info={info}
	class:alert-success={success}
	class:alert-warning={warning}
	class:alert-error={error}
	class:alert-outline={outline}
>
	<slot />
</div>
