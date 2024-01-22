<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

{#if $$props.is === 'a' || $$props.is === 'anchor'}
	<a
		id={$$props.id}
		class={classMap({
			component: 'btn',
			default: $$props.class,
			'btn-text': $$props.text,
			'btn-link': $$props.link,
			'btn-outline': $$props.outline,
			'btn-disabled': $$props.disabled,
			'btn-wide': $$props.wide,
			'btn-block': $$props.block,
			'btn-circle': $$props.circle,
			'btn-square': $$props.square,
			'btn-error': $$props.error,
			'btn-warning': $$props.warning,
			'btn-success': $$props.success,
			'btn-info': $$props.info,
			btn: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		href={$$props.href}
		target={$$props.target}
		role={$$props.role}
	>
		<slot />
	</a>
{:else if $$props.is === 'input'}
	<input
		id={$$props.id}
		class={classMap({
			component: 'btn',
			default: $$props.class,
			'btn-text': $$props.text,
			'btn-link': $$props.link,
			'btn-outline': $$props.outline,
			'btn-wide': $$props.wide,
			'btn-block': $$props.block,
			'btn-circle': $$props.circle,
			'btn-square': $$props.square,
			'btn-error': $$props.error,
			'btn-warning': $$props.warning,
			'btn-success': $$props.success,
			'btn-info': $$props.info,
			btn: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		disabled={$$props.disabled}
		type={$$props.type}
		on:click
		on:blur
		on:change
		on:input
		value={$$props.value}
		aria-label={$$props.ariaLabel}
	/>
{:else}
	<button
		id={$$props.id}
		class={classMap({
			component: 'btn',
			default: $$props.class,
			'btn-text': $$props.text,
			'btn-link': $$props.link,
			'btn-outline': $$props.outline,
			'btn-wide': $$props.wide,
			'btn-block': $$props.block,
			'btn-circle': $$props.circle,
			'btn-square': $$props.square,
			'btn-error': $$props.error,
			'btn-warning': $$props.warning,
			'btn-success': $$props.success,
			'btn-info': $$props.info,
			btn: $$props.size
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		disabled={$$props.disabled}
		type={$$props.type}
		on:click
		on:blur
		on:change
		on:input
	>
		<slot />
	</button>
{/if}

<style>
	.btn {
		--btn-color: #1f2837;
		--btn-bacground: #f2f2f2;
		--btn-background-hover: #d2d2d2;
		--btn-background-disabled: #d9dadc;
		--btn-color-disabled: #b9babe;
		--btn-error: #f95862;
		--btn-on-error: #1f2837;
		--btn-warning: #fcbe00;
		--btn-on-warning: #1f2837;
		--btn-success: #2ba96e;
		--btn-on-success: #1f2837;
		--btn-info: #2db6ff;
		--btn-on-info: #1f2837;

		display: inline-flex;
		height: 3rem;
		min-height: 3rem;
		flex-shrink: 0;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		border-color: transparent;
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1em;
		gap: 0.5rem;
		font-weight: 600;
		text-decoration-line: none;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		border-width: 1px;
		color: var(--btn-color);
		background-color: var(--btn-bacground);
	}

	.btn:focus-visible {
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.btn:hover:not(.btn-link) {
		background-color: var(--btn-background-hover);
	}

	.btn-disabled,
	.btn[disabled] {
		pointer-events: none;
		background-color: var(--btn-background-disabled);
		color: var(--btn-color-disabled);
	}

	:where(.btn:is(input[type='checkbox'])),
	:where(.btn:is(input[type='radio'])) {
		width: auto;
		appearance: none;
		margin: 0;
	}

	.btn:is(input[type='checkbox']):after,
	.btn:is(input[type='radio']):after {
		content: attr(aria-label);
	}

	/** Type */
	.btn-wide {
		width: 16rem;
	}

	.btn-block {
		width: 100%;
	}

	.btn-circle {
		height: 3rem;
		width: 3rem;
		padding: 0;
		border-radius: 9999px;
	}

	.btn-square {
		height: 3rem;
		width: 3rem;
		padding: 0;
	}

	.btn-text {
		border-color: transparent;
		background-color: transparent;
		color: currentColor;
		outline-color: currentColor;
	}

	.btn-link {
		border-color: transparent;
		background-color: transparent;
		text-decoration-line: underline;
		outline-color: currentColor;
	}

	.btn-outline {
		border-color: currentColor;
		background-color: transparent;
		border-style: solid;
	}

	/** Size */
	.btn-xs {
		height: 1.5rem;
		min-height: 1.5rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		font-size: 0.75rem;
	}
	.btn-sm {
		height: 2rem;
		min-height: 2rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		font-size: 0.875rem;
	}
	.btn-md {
		height: 3rem;
		min-height: 3rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 0.875rem;
	}
	.btn-lg {
		height: 4rem;
		min-height: 4rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		font-size: 1.125rem;
	}

	/** Colors */
	.btn-error {
		background-color: var(--btn-error);
		color: var(--btn-on-error);
	}
	.btn-outline.btn-error {
		background-color: transparent;
		color: var(--btn-error);
	}
	.btn-text.btn-error {
		background-color: transparent;
		color: var(--btn-error);
	}
	.btn-warning {
		background-color: var(--btn-warning);
		color: var(--btn-on-warning);
	}
	.btn-outline.btn-warning {
		background-color: transparent;
		color: var(--btn-warning);
	}
	.btn-text.btn-warning {
		background-color: transparent;
		color: var(--btn-warning);
	}
	.btn-success {
		background-color: var(--btn-success);
		color: var(--btn-on-success);
	}
	.btn-outline.btn-success {
		background-color: transparent;
		color: var(--btn-success);
	}
	.btn-text.btn-success {
		background-color: transparent;
		color: var(--btn-success);
	}
	.btn-info {
		background-color: var(--btn-info);
		color: var(--btn-on-info);
	}
	.btn-outline.btn-info {
		background-color: transparent;
		color: var(--btn-info);
	}
	.btn-text.btn-info {
		background-color: transparent;
		color: var(--btn-info);
	}
</style>
