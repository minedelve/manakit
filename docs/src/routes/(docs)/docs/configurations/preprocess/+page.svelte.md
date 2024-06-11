---
title: Installation Manakit
desc: install manakit on svelte
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

    import {dataProps} from "./props";

    let terminal = "yarn"
</script>

# Preprocessor {#preprocessor}

## Using Vite

Add manakit on your vite configuration.

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [sveltekit(), manakit()]
});
```

## Parameters

<Datatable data={dataProps}/>

### Custom configuration

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		manakit({
			verif: {
				version: false,
                install: false
			}
            style: {
                preprocessor: 'sass',
                colorPalette: ['manakit', 'webkit'],
                minimify: true
            }
		})
	],
});

```
