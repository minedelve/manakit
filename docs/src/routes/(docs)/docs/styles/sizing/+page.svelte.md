---
title: Sizing
desc: sizing width & height class
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

    import {dataHeightProps, dataWidthProps} from "./props";
</script>

# Sizing {#sizing}

## Width {#width}

<Datatable data={dataWidthProps}/>

## Height {#height}

<Datatable data={dataHeightProps}/>
