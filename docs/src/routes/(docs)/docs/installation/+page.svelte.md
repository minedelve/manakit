---
title: Installation
desc: How to install Manakit on your Svelte or Sveltekit project?
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn} from "manakit";
</script>

# Get started with H1 {#started}

## Get started with H2 {#startedh2}

#### Get started with H4 {#startedh4}

<Datatable  
data="{[
  { name: 'absolute', type: 'boolean', default: 'false', desc: 'Container element' },
  { name: 'activator-props', type: 'unknown', default: '{}', desc: 'Apply custom properties to the activator.' },
  { name: 'close-on-content-click', type: 'boolean', default: 'false', desc: 'Apply custom properties to the activator.' },
   { name: 'location-strategy', type: `'static' | 'connected' | LocationStrategyFn`, default: 'static',  desc: 'Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both…' },
{ name: 'target', type: `| Element
  | 'parent'
  | 'cursor'
  | (string & {})
  | ComponentPublicInstance
  | [number, number]`, default: undefined,  desc: 'For locationStrategy=“connected”, specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default.' },
]}"/>

##### Get started with H5 {#startedh5}

###### Get started with H6 {#startedh6}

<Component>

```javascript
yarn add gnome
```

<svelte:fragment slot="preview">

<Btn>Click on Button</Btn>

</svelte:fragment>
</Component>

### Get started with Component {#component}

<Component>

```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { manakit } from 'manakit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		manakit({
			verif: {
				version: true, // boolean
				install: true // boolean
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
```

<svelte:fragment slot="preview">

<Btn>Click on Button</Btn>

</svelte:fragment>
</Component>
