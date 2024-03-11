---
title: Install Manakit on your Svelte project
desc: Get started with Manakit, the Svelte framework for building feature rich, blazing fast applications.
published: true
layout: documentation
---

## Installation

For install and use Manakit on your project you need à minimal configuration:

- [Node.js](https://nodejs.org/en)
- [Svelte](https://svelte.dev/) or [Sveltekit](https://kit.svelte.dev/)
- [Vite.js](https://vitejs.dev/)

Install

1.  Install Manakit

    npm i -D manakit@latest

2.  Then add Manakit to your `vite.config.ts`

```javascript
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [sveltekit(), manakit()]
	//...
});
```

1.  And launch your project

    npm run dev

when you launch your project, manakit will generate a `.manakit.cjs` file which will be your configuration file to personalize and adapt manakit to your project.
