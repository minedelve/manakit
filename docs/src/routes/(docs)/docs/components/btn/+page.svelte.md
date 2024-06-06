---
title: Btn
desc: Component Button
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";

    import {Btn} from "manakit";
    import {dataSlot, dataProps} from "./props";
</script>

# Btn {#btn}

The `Btn` component remplaces the standard html `button` , `anchor` and `input type button`, with Manakit theme and a multitude of options. Any color helper class can be used to alter the background or text color.

## Usage {#usage}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn>Button</Btn>
```

<svelte:fragment slot="preview">
<Btn>Button</Btn>
</svelte:fragment>

</Component>

## Examples {#examples}

### Buttons with brand colors {#buttons-with-brand-colors}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn>Default</Btn>
<Btn class="primary">Primary</Btn>
<Btn class="secondary">Secondary</Btn>
<Btn class="tertiary">Tertiary</Btn>
<Btn class="bg:secondary text:primary">Custom</Btn>
```

<svelte:fragment slot="preview">
<Btn>Default</Btn>
<Btn class="primary">Primary</Btn>
<Btn class="secondary">Secondary</Btn>
<Btn class="tertiary">Tertiary</Btn>
<Btn class="bg:secondary text:primary">Custom</Btn>
</svelte:fragment>

</Component>

### Actives Buttons {#actives-buttons}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn active>Default</Btn>
<Btn class="primary" active>Primary</Btn>
<Btn class="secondary" active>Secondary</Btn>
<Btn class="tertiary" active>Tertiary</Btn>
<Btn class="bg:secondary text:primary" active>Custom</Btn>
```

<svelte:fragment slot="preview">
<Btn active>Default</Btn>
<Btn class="primary" active>Primary</Btn>
<Btn class="secondary" active>Secondary</Btn>
<Btn class="tertiary" active>Tertiary</Btn>
<Btn class="bg:secondary text:primary" active>Custom</Btn>
</svelte:fragment>

</Component>

### Buttons with state colors {#buttons-with-state-colors}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn info>Info</Btn>
<Btn success>Success</Btn>
<Btn warning>Warning</Btn>
<Btn error>Error</Btn>
```

<svelte:fragment slot="preview">
<Btn info>Info</Btn>
<Btn success>Success</Btn>
<Btn warning>Warning</Btn>
<Btn error>Error</Btn>
</svelte:fragment>

</Component>

### Outline buttons {#buttons-outline}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn outline>Default</Btn>
<Btn class="primary" outline>Primary</Btn>
<Btn class="secondary" outline>Secondary</Btn>
<Btn class="tertiary" outline>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn outline>Default</Btn>
<Btn class="primary" outline>Primary</Btn>
<Btn class="secondary" outline>Secondary</Btn>
<Btn class="tertiary" outline>Tertiary</Btn>
</svelte:fragment>

</Component>

### Outline buttons with state colors {#buttons-outline-with-state-colors}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn info outline>Default</Btn>
<Btn success outline>Primary</Btn>
<Btn warning outline>Secondary</Btn>
<Btn error outline>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn info outline>Default</Btn>
<Btn success outline>Primary</Btn>
<Btn warning outline>Secondary</Btn>
<Btn error outline>Tertiary</Btn>
</svelte:fragment>

</Component>

### Buttons Sizes {#buttons-sizes}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn class="btn-xs">Button xs</Btn>
<Btn class="btn-sm">Button sm</Btn>
<Btn class="btn-md">Button md</Btn>
<Btn class="btn-lg">Button lg</Btn>
```

<svelte:fragment slot="preview">
<Btn class="btn-xs">Button xs</Btn>
<Btn class="btn-sm">Button sm</Btn>
<Btn class="btn-md">Button md</Btn>
<Btn class="btn-lg">Button lg</Btn>
</svelte:fragment>

</Component>

### Wide and Block button {#wide-and-block}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn wide>Button Wide</Btn>
<Btn block>Button Block</Btn>
```

<svelte:fragment slot="preview">
<Btn wide>Button Wide</Btn>
<Btn block>Button Block</Btn>
</svelte:fragment>

</Component>

### Buttons with different HTML tags {#buttons-with-different-HTML-tags}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn tag="a">Anchor</Btn>
<Btn href="https://manakit.dev" target="_blank">Anchor automatique</Btn>
<Btn tag="button">Button</Btn>
<Btn tag="input" type="submit">Submit</Btn>
<Btn tag="input" type="button" value="Input" />
<Btn tag="input" type="submit" value="Submit" />
<Btn tag="input" type="radio" ariaLabel="Radio" />
<Btn tag="input" type="checkbox" ariaLabel="Checkbox" />
<Btn tag="input" type="reset" value="Reset" />
```

<svelte:fragment slot="preview">
<Btn tag="a">Anchor</Btn>
<Btn href="https://manakit.dev" target="_blank">Anchor automatique</Btn>
<Btn tag="button">Button</Btn>
<Btn tag="input" type="submit">Submit</Btn>
<Btn tag="input" type="button" value="Input"/>
<Btn tag="input" type="submit" value="Submit"/>
<Btn tag="input" type="radio" ariaLabel="Radio"/>
<Btn tag="input" type="checkbox" ariaLabel="Checkbox"/>
<Btn tag="input" type="reset" value="Reset"/>
</svelte:fragment>

</Component>

### Disabled buttons {#disabled-buttons}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn disabled>Disabled using attribute</Btn>
```

<svelte:fragment slot="preview">
<Btn disabled>Disabled using attribute</Btn>
</svelte:fragment>

</Component>

### Square buttons {#square-buttons}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn square>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn square outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
```

<svelte:fragment slot="preview">
<Btn square>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn square outline>
<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
</svelte:fragment>

</Component>

### Circle buttons {#circle-buttons}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn circle>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn circle outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
```

<svelte:fragment slot="preview">
<Btn circle>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn circle outline>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
</svelte:fragment>

</Component>

### With Icons {#with-icons}

<Component>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn>
	Button
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn outline>
	Button
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
	Button
</Btn>
<Btn outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
	Button
</Btn>
```

<svelte:fragment slot="preview">
<Btn>
Button
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn outline>
Button
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
Button
</Btn>
<Btn outline>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
Button
</Btn>
</svelte:fragment>

</Component>

## API {#api}

### Props {#api-props}

<Datatable data={dataProps} />

### Slots {#api-slots}

<Datatable data={dataSlot}/>
