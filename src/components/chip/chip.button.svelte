<button
	id={$$props.id}
	class={$$props.className}
	style={$$props.styleProps}
	disabled={$$props.disabled}
	type={$$props.type}
	value={$$props.value}
	on:click
	on:blur
	on:change
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</button>
