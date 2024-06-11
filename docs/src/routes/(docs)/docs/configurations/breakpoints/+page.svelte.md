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

# Breakpoints {#breakpoints}

## Default

<Datatable data={dataProps}/>

## Custom

```javascript
export default {
	breakpoints: {
		xs: '320px'
	}
};
```
