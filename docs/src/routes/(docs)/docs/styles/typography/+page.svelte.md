---
title: Typography
desc: typography class
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

     import {dataDefaultProps, dataPositionTextProps, dataTransformProps, dataWeightProps} from "./props";
</script>

# Typography {#typography}

<Datatable data={dataDefaultProps}/>

## Weight text

<Datatable data={dataWeightProps}/>

## Position text

<Datatable data={dataPositionTextProps}/>

## Styles and transform text

<Datatable data={dataTransformProps}/>
