<input
	id={$$props.id}
	class={$$props.className}
	style={$$props.styleProps}
	disabled={$$props.disabled}
	type={$$props.type}
	on:click
	on:blur
	on:change
	on:input
	value={$$props.value}
	aria-label={$$props.ariaLabel}
/>

<style>
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
</style>
