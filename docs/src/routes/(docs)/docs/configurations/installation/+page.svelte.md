---
title: Installation Manakit
desc: install manakit on svelte
---

<script>
	import Component from "$lib/components/component.svelte";
    import Datatable from "$lib/components/datatable.svelte";
    import {Btn, Row, Col, Card} from "manakit";

    let terminal = "yarn"
</script>

# Get started with Manakit {#get-started-with-manakit}

## Installation

Manakit has support multiple diffrent installation in your project svelte.

For more information regarding supported package managers, please visit their official websites:

- [yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)
- [pnpm](https://pnpm.io/)
- [bun](https://bun.sh/package-manager)

## Command line

To get started with Manakit, create new svelte project or enter in your existant project folder.

<Btn on:click={() => terminal = "yarn"} active={terminal === 'yarn'}>yarn</Btn>
<Btn on:click={() => terminal = "npm"} active={terminal === 'npm'}>npm</Btn>
<Btn on:click={() => terminal = "pnpm"} active={terminal === 'pnpm'}>pnpm</Btn>
<Btn on:click={() => terminal = "bun"} active={terminal === 'bun'}>bun</Btn>

{#if terminal === "yarn"}

```sh
yarn add -D manakit
```

{:else if terminal === "npm"}

```sh
npm install --save-dev manakit
```

{:else if terminal === "pnpm"}

```sh
pnpm i -D manakit
```

{:else if terminal === "bun"}

```sh
bun add -d manakit
```

{/if}

## Svelte documentation

<Row noGutters>
    <Col class="col-12 sm:col-6">
        <Card href="https://svelte.dev/" target="_blank" class="ma-1">
            <h3>Svelte</h3>
            <p>See official documentation svelte</p>
        </Card> 
    </Col>
    <Col class="col-12 sm:col-6">
        <Card href="https://kit.svelte.dev/" target="_blank" class="ma-1">
            <h3>Sveltekit</h3>
            <p>See official documentation sveltekit</p>
        </Card> 
    </Col>
</Row>
