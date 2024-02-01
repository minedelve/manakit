<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'code-ide',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</div>

<style>
	.code-ide {
		position: relative;
		overflow: hidden;
		overflow-x: auto;
		min-width: 18rem;
		border-radius: 1rem;
		background-color: black;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
		color: white;
		direction: ltr;
	}

	.code-ide::before {
		content: '';
		margin-bottom: 1rem;
		display: block;
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 9999px;
		opacity: 0.3;
		box-shadow:
			1.4em 0,
			2.8em 0,
			4.2em 0;
	}

	.code-ide :global(pre) {
		padding-right: 1.25rem;
		color: white;
		background-color: black;
		box-shadow: none;
		font-size: 1em;
	}

	.code-ide :global(pre::before) {
		content: '';
		margin-right: 2ch;
	}

	.code-ide :global(pre[data-prefix]:before) {
		content: attr(data-prefix);
		display: inline-block;
		text-align: right;
		width: 2rem;
		opacity: 0.5;
	}

	.code-ide :global(code) {
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
</style>
