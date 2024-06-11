---
title: Fonts Manakit
desc: custom fonts theme manakit
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";
</script>

# Fonts {#fonts}

## Default

```javascript
const presetFonts = {
	default: {
		title: "'Ubuntu', sans-serif",
		body: "'Ubuntu', sans-serif",
		code: "'monospace', sans-serif"
	}
};
```

## Custom

```javascript
export default {
	fonts: {
		default: {
			title: "'Roboto', sans-serif"
		}
	}
};
```
