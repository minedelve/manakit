<script lang="ts">
	import { classMap, styleMap } from '../../libs/helpers';
	import { onMount } from 'svelte';
	import { validatorProcess } from './validator';

	export let model: any | undefined;

	onMount(() => {
		model = {
			errors: undefined,
			values: { ...$$props.initialValues },
			isValid: false
		};

		if ($$props.validationSchema) {
			model.errors = validatorProcess($$props.validationSchema, $$props.initialValues);
			model.isValid = hasError(model.errors);
		}
	});

	function hasError(obj: any) {
		for (let key in obj) {
			if (obj[key].hasError) {
				return false;
			}
		}
		return true;
	}

	const valuesSchema = () => {
		const form = document.querySelector('form');
		console.log(form);
		let data: { [key: string]: string } = {};
		if (form === null) return;
		for (let i = 0; i < form.elements.length; i++) {
			const input = form.elements[i] as HTMLInputElement;

			console.log('INPUT', input);
			if ((input.tagName === 'INPUT' || input.tagName === 'SELECT') && input.type !== 'submit') {
				data[input.name] = input.value;
				model.values[input.name] = input.value;
			}
		}

		if ($$props.validationSchema) {
			model.errors = validatorProcess($$props.validationSchema, data);
			model.isValid = hasError(model.errors);
		}
	};
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
	on:input={valuesSchema}
>
	<slot />
</form>
