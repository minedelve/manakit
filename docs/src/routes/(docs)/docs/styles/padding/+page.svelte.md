---
title: Padding
desc: padding class
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

     import {dataDefaultProps, dataValueProps} from "./props";
</script>

# Padding {#padding}

<Datatable data={dataDefaultProps}/>

## List {#list}

<Datatable data={dataValueProps}/>
