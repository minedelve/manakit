---
title: Elevation
desc: elevation class
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

     import {dataProps} from "./props";
</script>

# Elevation {#elevation}

<Datatable data={dataProps}/>

## Usage {#usage}

<Component>

```svelte
<Row style="justify-content: center;">
	{#each { length: 25 } as _, i}
		<Col class="col-auto">
			<Card
				class={`bg:primary elevation-${i}`}
				style="width: 100px; height: 100px; justify-content: center; text-align: center"
			>
				<span class="text-sm">.elevation-{i}</span>
			</Card>
		</Col>
	{/each}
</Row>
```

<svelte:fragment slot="preview">

<div style="width: 100%;">
    <Row style="justify-content: center;">
        {#each { length: 25 } as _, i}
            <Col class="col-auto">
             <Card class={`bg:primary elevation-${i}`}  style="width: 100px; height: 100px; justify-content: center; text-align: center">
                <span class="text-sm">.elevation-{i}</span>
             </Card>
            </Col>
		{/each}
    </Row>
</div>
</svelte:fragment>
</Component>
