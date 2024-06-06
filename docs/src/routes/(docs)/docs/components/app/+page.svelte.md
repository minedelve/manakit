---
title: Application
desc: Component Application
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";

    import {App} from "manakit";
    import {dataSlot, dataProps} from "./props";
</script>

# App {#app}

The `App` component is the basic structure of an application with Manakit. It ensures the proper functioning and display of the different components and the rendering of the APIs included in Manakit. It notably allows the proper functioning and management of dark/light schemes, personalized themes and content rendering.

It is important not to nest multiple `App` components within your applications. if you have layouts with specific sections, you can include it in the layout directly instead of placing it in the root file of your project.

## Default application markup {#default-application-markup}

This is an example of the default application markup for Manakit. You can place your layout elements anywhere.

<Component onlyCode>

```svelte
<App>
	<Drawer>
		<svelte:fragement slot="aside"></svelte:fragement>
		<svelte:fragement slot="content"></svelte:fragement>
			<Toolbar></Toolbar>
			<Main>
				<Container>
					<slot/>
				</Container>
			</Main>
			<Footer></Footer>
		</svelte:fragement>
	</Drawer>
</App>
```

</Component>

**If you want fixed Toolbar in your app, it’s recommanded to use position: sticky.**

### Application components {#application-components}

- Toolbar: is a generique component, you can use `Toolbar` for `App Bar` for display actions your navigation bar.
- Footer: is `<footer>` component for your app.
- Drawer: is component `aside` and content, Drawer ajuste `automaticly` display on your page if `aside` is visible or hidden.

## How to use App {#how-to-use-app}

<Component>

```svelte
<script>
	import { App } from 'manakit';
</script>

<App>
	// your content
	<slot />
</App>
```

<svelte:fragment slot="preview">
<App style="max-height: 150px;">

<p>your content</p>
</App>
</svelte:fragment>

</Component>

## API {#api}

### Props {#api-props}

<Datatable data={dataProps} />

### Slots {#api-slots}

<Datatable data={dataSlot}/>
