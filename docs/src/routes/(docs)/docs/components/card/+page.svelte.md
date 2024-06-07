---
title: Card
desc: Component Card
---

<script>
	import AdvancedComponent from "$lib/components/advanced-component.svelte";
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";

    import {Btn, Card, Toolbar} from "manakit";
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
            <div style="padding: 0.25rem">
                <h2>Card title</h2>
                <p>Subtitle text</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae enim vel tellus ultrices suscipit. Vestibulum rutrum lacus sed ultricies aliquet.</p>

                <Toolbar style="background: transparent">
                    <Btn text>Action 1</Btn>
                    <Btn>Action 2</Btn>
                </Toolbar>
            </div>
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

<Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="bg:secondary text:primary"
	>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
>
```

<svelte:fragment slot="preview">
<Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card class="bg:secondary text:primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</svelte:fragment>

</Component>

### Actives Cards (only with href or button tag) {#actives-cards}

<Component>

```svelte
<script>
	import { Card } from 'manakit';
</script>

<Card tag="a" active>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card tag="button" active>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
```

<svelte:fragment slot="preview">
<Card tag="a" active>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card tag="button" active>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</svelte:fragment>

</Component>

### Disabled Cards (only with href or button tag) {#actives-cards}

<Component>

```svelte
<script>
	import { Card } from 'manakit';
</script>

<Card tag="a" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card tag="button" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
```

<svelte:fragment slot="preview">
<Card tag="a" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
<Card tag="button" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</svelte:fragment>

</Component>
