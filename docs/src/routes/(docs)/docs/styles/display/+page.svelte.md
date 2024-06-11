---
title: Display
desc: display class
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn} from "manakit";

     import {dataProps} from "./props";
</script>

# Display {#display}

<Datatable data={dataProps}/>

# Usage {#usage}

Specify the element’s `display` property. These classes can be applied to all breakpoints. When using a base class,`.d-{value}`, it is inferred to be `.xs:d-{value}`.

- `.d-{value}` for no media queries
- `.{breakpoint}:d-{value}` fir use media queries

<Component>

```html
<div class="pa-2 d-inline info">d-inline</div>
<div class="pa-2 d-inline error">d-inline</div>
```

<svelte:fragment slot="preview">

<div style="width: 100%;">
    <div class="pa-2 d-inline bg:info">d-inline</div>
    <div class="pa-2 d-inline bg:success">d-inline</div>
</div>
</svelte:fragment>
</Component>

<Component>

```html
<div class="pa-2 d-block info">d-block</div>
<div class="pa-2 d-block error">d-block</div>
```

<svelte:fragment slot="preview">

<div style="width: 100%;">
    <div class="pa-2 d-block bg:info">d-block</div>
    <div class="pa-2 d-block bg:success">d-block</div>
</div>
</svelte:fragment>
</Component>
