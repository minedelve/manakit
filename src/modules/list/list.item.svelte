<script lang="ts">
	import { className } from '../../utils/class-name.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'li' = 'li';
</script>

<svelte:element
	this={tag}
	class={className('mk-list--item', _class)}
	class:item-on-start={$$slots?.before && !$$slots?.after}
	class:item-on-end={!$$slots?.before && $$slots?.after}
	class:item-start-end={$$slots?.before && $$slots?.after}
	{...$$restProps}
>
	{#if $$slots.before}
		<div class="mk-list--item_before">
			<slot name="before" />
		</div>
	{/if}

	<slot />

	{#if $$slots.after}
		<div class="mk-list--item_after">
			<slot name="after" />
		</div>
	{/if}
</svelte:element>
