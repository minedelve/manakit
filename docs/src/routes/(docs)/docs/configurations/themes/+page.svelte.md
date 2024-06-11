---
title: Installation Manakit
desc: install manakit on svelte
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

    import {dataProps} from "./props";
</script>

# Theme configuration {#theme-configuration}

## Default

```javascript
const presetThemes = {
	default: {
		primary: { light: 'var(--lime-500, #84cc16)', dark: 'var(--lime-400, #a3e635)' },
		'on-primary': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-800, #1f2937)' },
		secondary: { light: 'var(--indigo-500, #6366f1)', dark: 'var(--indigo-400, #818cf8)' },
		'on-secondary': { light: 'var(--neutral-50, #fafafa)', dark: 'var(--neutral-50, #fafafa)' },
		tertiary: { light: 'var(--amber-900, #78350f)', dark: 'var(--amber-800, #92400e)' },
		'on-tertiary': { light: 'var(--neutral-50, #fafafa)', dark: 'var(--neutral-50, #fafafa)' },
		error: { light: 'var(--red-500, #ef4444)', dark: 'var(--red-400, #f87171)' },
		'on-error': { light: 'var(--neutral-50, #fafafa)', dark: 'var(--neutral-50, #fafafa)' },
		warning: { light: 'var(--amber-500, #f59e0b)', dark: 'var(--amber-400, #fbbf24)' },
		'on-warning': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-800, #1f2937)' },
		success: { light: 'var(--green-500, #22c55e)', dark: 'var(--green-400, #4ade80)' },
		'on-success': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-800, #1f2937)' },
		info: { light: 'var(--blue-500, #3b82f6)', dark: 'var(--blue-400, #60a5fa)' },
		'on-info': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-800, #1f2937)' },
		surface: { light: 'var(--stone-200, #e7e5e4)', dark: 'var(--slate-800, #1e293b)' },
		'on-surface': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-100, #f3f4f6)' },
		outline: { light: '#79747E', dark: '#938F99' },
		outlineVariant: { light: '#CAC4D0', dark: '#49454F' },
		background: { light: 'var(--slate-50, #f8fafc)', dark: 'var(--slate-900, #0f172a)' },
		'on-background': { light: 'var(--gray-800, #1f2937)', dark: 'var(--gray-100, #f3f4f6)' },
		scrim: 'var(--neutral-950, #0a0a0a)',
		shadow: 'var(--neutral-950, #0a0a0a)'
	}
};
```

## Custom CSS

For edit and add new color on your theme:

- key: `value` for use uniq color for light / dark scheme
- key: `{light: {value}, dark: {value}}` for use uniq color for light / dark scheme
-

```javascript
export default {
	//...
	themes: {
		default: {
			primary: { light: 'blue', dark: 'red' }
		}
	}
	//...
};
```

## Parameters

<Datatable data={dataProps}/>
