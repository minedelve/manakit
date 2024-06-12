---
title: Card
desc: Component Card
---

<script>
	import AdvancedComponent from "$lib/components/advanced-component.svelte";
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";

    import {Btn, Card, Toolbar, CardTitle, CardText, CardActions, CardSubtitle} from "manakit";
    import {dataSlot, dataProps} from "./props";

    let outline = false;
    let text = false;
</script>

# Card {#card}

<AdvancedComponent>
	<svelte:fragment slot="toolbar">
		<Btn on:click={() => (outline = false, text = false)} active={!outline && !text}>Default</Btn>
		<Btn on:click={() => (outline = true, text = false)} active={outline}>Outline</Btn>
		<Btn on:click={() => (outline = false, text = true)} active={text}>Text</Btn>
	</svelte:fragment>
	<svelte:fragment slot="preview">
    	<Card {outline} {text} style="max-width: 300px; width: 100%;">
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Subtitle text</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae enim vel tellus ultrices suscipit. Vestibulum rutrum lacus sed ultricies aliquet.</CardText>
            <CardActions>
                    <Btn text>Action 1</Btn>
                    <Btn>Action 2</Btn>
            </CardActions>
    	</Card>
    </svelte:fragment>

</AdvancedComponent>

## Examples {#examples}

### Card with brand colors {#card-with-brand-colors}

<Component>

```svelte
<script>
	import { Card } from 'manakit';
</script>

<Card>
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card class="primary">
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card class="secondary">
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card class="tertiary">
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card class="bg:secondary text:primary">
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
```

<svelte:fragment slot="preview">
<Card>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card class="primary">
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card class="secondary">
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card class="tertiary">
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card class="bg:secondary text:primary">
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
</svelte:fragment>

</Component>

### Actives Cards (only with href or button tag) {#actives-cards}

<Component>

```svelte
<script>
	import { Card } from 'manakit';
</script>

<Card tag="a" active>
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card tag="button" active>
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
```

<svelte:fragment slot="preview">
<Card tag="a" active>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card tag="button" active>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
</svelte:fragment>

</Component>

### Disabled Cards (only with href or button tag) {#actives-cards}

<Component>

```svelte
<script>
	import { Card } from 'manakit';
</script>

<Card tag="a" disabled>
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
<Card tag="button" disabled>
	<CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
</Card>
```

<svelte:fragment slot="preview">
<Card tag="a" disabled>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
<Card tag="button" disabled>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardText>
</Card>
</svelte:fragment>

</Component>
