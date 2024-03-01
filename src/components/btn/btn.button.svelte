<button
	id={$$props.id}
	class={$$props.className}
	style={$$props.styleProps}
	disabled={$$props.disabled}
	type={$$props.type}
	on:click
	on:blur
	on:change
	on:input
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</button>
