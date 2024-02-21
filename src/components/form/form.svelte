<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
	import { onMount } from 'svelte';
	export let validator: any;
	export let isValid: boolean;
	// PRE PRE ALPHA

	onMount(() => {
		handleChange();
	});

	$: formData = {};

	$: {
		isValid = hasError(formData);
	}

	function hasError(obj: any) {
		for (let key in obj) {
			if (obj[key].hasError) {
				return false;
			}
		}
		return true;
	}

	function handleChange() {
		formData = {};
		const form = document.querySelector('form');

		if (form === null) return;

		for (let i = 0; i < form.elements.length; i++) {
			const input = form.elements[i] as HTMLInputElement;

			if (input.tagName === 'INPUT' && input.type !== 'submit') {
				let name = input.name;
				let value = input.value;
				let error = false;

				if (validator && validator[name]) {
					const { type, min, max, matches, required } = validator[name];

					// is required
					if (required && (value === undefined || value === null || value.trim() === ''))
						error = true;

					//length
					if (
						(!error &&
							type === 'string' &&
							(typeof value !== 'string' ||
								(min && value.length < min) ||
								(max && value.length > max))) ||
						(!error &&
							type === 'number' &&
							(isNaN(Number(value)) ||
								(min && Number(value) < min) ||
								(max && Number(value) > max)))
					)
						error = true;

					// regex
					if (!error && matches && typeof matches === 'string' && !RegExp(matches).test(value))
						error = true;
				}

				(formData as any)[name] = { value: value, hasError: error };
			}
		}

		console.log('LABS: [FORM]', formData);
	}
</script>

<form
	id={$$props.id}
	class={classMap({
		component: 'forms',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	on:input={handleChange}
>
	<slot />
</form>
