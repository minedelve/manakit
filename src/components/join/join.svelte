<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'join',
		default: $$props.class,
		'join-vertical': $$props.vertical,
		'join-horizontal': $$props.horizontal
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
	.join {
		display: inline-flex;
		align-items: stretch;
		border-radius: 0.5rem;
	}

	.join > :global(*):first-child:not(:last-child),
	.join :global(*):first-child:not(:last-child) {
		border-start-end-radius: 0;
		border-end-end-radius: 0;
	}

	.join :where(:global(*):last-child:not(:first-child)),
	.join :where(:global(*):last-child:not(:first-child)) {
		border-start-end-radius: inherit;
		border-end-end-radius: inherit;
	}

	.join :where(:global(*):first-child:not(:last-child)),
	.join :where(:global(*):first-child:not(:last-child)) {
		border-end-start-radius: inherit;
		border-start-start-radius: inherit;
	}

	.join :global(*):not(:first-child):not(:last-child),
	.join :global(*):not(:first-child):not(:last-child) {
		border-start-end-radius: 0;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
		border-start-start-radius: 0;
	}

	.join > :where(:global(*):not(:first-child)) {
		margin-top: 0;
		margin-bottom: 0;
		margin-inline-start: -1px;
	}

	.join :global(*):last-child:not(:first-child),
	.join :global(*):last-child:not(:first-child) {
		border-end-start-radius: 0;
		border-start-start-radius: 0;
	}

	.join.join-vertical {
		flex-direction: column;
	}

	.join.join-vertical :global(*):first-child:not(:last-child),
	.join.join-vertical :global(*):first-child:not(:last-child) {
		border-end-start-radius: 0;
		border-end-end-radius: 0;
		border-start-start-radius: inherit;
		border-start-end-radius: inherit;
	}

	.join.join-vertical :global(*):last-child:not(:first-child),
	.join.join-vertical :global(*):last-child:not(:first-child) {
		border-start-start-radius: 0;
		border-start-end-radius: 0;
		border-end-start-radius: inherit;
		border-end-end-radius: inherit;
	}

	.join.join-horizontal {
		flex-direction: row;
	}
</style>
