<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<kbd
	id={$$props.id}
	class={classMap({
		component: 'kbd',
		default: $$props.class,
		kbd: $$props.size
	})}
	style={styleMap({
		default: $$props.style
	})}
>
	<slot />
</kbd>

<style>
	kbd {
		font-family:
			ui-monospace,
			SFMono-Regular,
			Menlo,
			Monaco,
			Consolas,
			Liberation Mono,
			Vazirmatn,
			Courier New,
			monospace;
		font-feature-settings: normal;
		font-variation-settings: normal;
		font-size: 1em;
	}

	.kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: transparent;
		background-color: 0.2;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		border-bottom-width: 2px;
		min-height: 2.2em;
		min-width: 2.2em;
	}

	.kbd-lg {
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		min-height: 2.5em;
		min-width: 2.5em;
	}
	.kbd-md {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		min-height: 2.2em;
		min-width: 2.2em;
	}
	.kbd-sm {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		min-height: 1.6em;
		min-width: 1.6em;
	}
	.kbd-xs {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		min-height: 1.2em;
		min-width: 1.2em;
	}
</style>
