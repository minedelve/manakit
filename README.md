<div align="center">

![manakit-logo](https://github.com/minedelve/manakit/blob/main/static/manakit-library.png)

# Manakit for Svelte

[![][github-header]](https://github.com/minedelve)
[![][discord-header]](https://discord.gg/CmtVqtSzHP)
[![][npm-header]](https://www.npmjs.com/package/manakit)

[![][version]](https://www.npmjs.com/package/manakit)
[![][installs]](https://www.npmjs.com/package/manakit)
[![][installs-this-month]](https://www.npmjs.com/package/manakit)
[![][commit]](https://www.npmjs.com/package/manakit)
[![][license]](https://www.npmjs.com/package/manakit)
[![][discord]](https://discord.gg/CmtVqtSzHP)

</div>

| :warning: | **Manakit is currently in development.** <br> We will post a link here when we have an alpha and beta release ready for testing. Until then, we welcome contributors to help bring this project to life. | &nbsp;&nbsp;&nbsp;&nbsp;[CONTRIBUTE](https://github.com/minedelve/manakit)&nbsp;&nbsp;&nbsp;&nbsp; |
| --------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |

## Install

```cmd
npm install --save-dev manakit
```

```cmd
yarn add -D manakit
```

Connect Manakit on yout project with **vite.config.ts** or **vite.config.js**

```javascript
//vite.config.(js|ts)
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [sveltekit(), manakit()]
});
```

Add global and components css manakit on your project directly on your start page

```svelte
<script>
	//+(layout|page).svelte / app.svelte
	import 'manakit/style/css';
	import { Btn } from 'manakit';

	const handle = () => {
		alert('Hello you use Manakit!');
	};
</script>

<Btn on:click={() => handle()}>Click on me</Btn>
```

## License

Licensed under the [MIT license](https://github.com/minedelve/manakit/blob/main/LICENSE.md).

Copyright © 2022-2024 [Minedelve](https://minedelve.com), [Nycolaide](https://github.com/Nycolaide)

[github-header]: https://img.shields.io/badge/Github%20@Minedelve-black.svg?style=for-the-badge&logo=Github
[discord-header]: https://img.shields.io/badge/Join%20the%20community-black.svg?style=for-the-badge&logo=Discord
[npm-header]: https://img.shields.io/badge/ManaKit-black.svg?style=for-the-badge&logo=NPM
[version]: https://img.shields.io/npm/v/manakit.svg?label=Version&color=f58142
[commit]: https://badgen.net/github/last-commit/minedelve/manakit?label=Last%20commit&color=40ba12
[license]: https://badgen.net/github/license/minedelve/manakit?label=License&color=cc5640
[installs]: https://badgen.net/npm/dt/manakit?label=NPM%20installs&color=40ba12
[installs-this-month]: https://badgen.net/npm/dm/manakit?label=NPM%20installs&color=40ba12
[discord]: https://img.shields.io/discord/1093887038991896717?color=5865F2&label=Discord&logo=discord&logoColor=white
