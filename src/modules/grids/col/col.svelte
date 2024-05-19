<script lang="ts">
	import { className } from '../../../utils/class-name.js';
	import { formatClassCss } from './helpers.js';
	import type { Col, Offset } from './types.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let tag: 'div' = 'div';
	export let size:
		| Col
		| {
				[key: string]: Col;
		  }
		| undefined = undefined;
	export let offset:
		| Offset
		| {
				[key: string]: Offset;
		  }
		| undefined = undefined;

	let classList: string | undefined = undefined;

	$: {
		if (size || offset) classList = '';
		if (size) classList! += formatClassCss('col', size);
		if (offset) classList! += formatClassCss('offset', offset);
	}
</script>

<svelte:element
	this={tag}
	class={className(size || offset ? `mk-col ${classList}` : 'mk-col', _class)}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
