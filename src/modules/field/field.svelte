<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
</script>

{#if $$slots.after || $$slots.before}
	<label class={className('kit-field', _class)}>
		<slot name="before" />
		<input type="text" />
		<slot name="after" />
	</label>
{:else}
	<input class={className('kit-field', _class)} type="text" />
{/if}
