<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
</script>

<a
	id={$$props.id}
	class={classMap({
		component: 'link',
		default: $$props.class,
		link: $$props.size,
		'link-hover': $$props.hover
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

<style>
	.link {
		--link-color: #1f2837;
		cursor: pointer;
		text-decoration-line: underline;
		color: var(--link-color);
	}

	.link-hover {
		text-decoration-line: none;
	}

	.link-hover:hover {
		text-decoration-line: underline;
	}

	/** Size */
	.link-xs {
		font-size: 0.75rem;
	}
	.link-sm {
		font-size: 0.875rem;
	}
	.link-md {
		font-size: 1rem;
	}
	.link-lg {
		font-size: 1.125rem;
	}
	.link-xl {
		font-size: 1.25rem;
	}
</style>
