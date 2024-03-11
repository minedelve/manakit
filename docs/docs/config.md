---
title: Configuration
desc: Manakit allows you to set default configuration values ​​globally or per component when configuring your application. Using this feature, you can, for example, disable component styles on all components or define new colors for your application's theme.
published: true
layout: documentation
---

Manakit can be configured from your `.manakit.cjs` file. Default config:

```javascript
export default {
	dark: false,
	normalize: true,
	themes: {},
	screens: {},
	exclude: []
};
```

## Config values explained:

- **dark**

  Boolean (default: false)

If you enable this setting, you will enable light and dark world management on your project. You can customize the colors and different themes for your application. manakit supports color-scheme and handling a CSS class on the dom.

- **normalize**

  Boolean (default: false)

Using this parameter you can choose whether or not to activate a standard normalization of the default CSS values ​​of your project. Manakit is based on version 8.0.1 of [normalize](https://necolas.github.io/normalize.css/).

- **themes**

  Array (default: {})

The themes property of Manakit and the core of the framework. Using these settings, you can add/modify/delete colors and themes on your application quickly and easily. This will automatically generate the classes and variables so you can use them in your project.

- **screens**

  Array (default: {})

This parameter allows you to modify and adapt the manakit breakpoints throughout your project, so the manakit classes will directly inherit the modifications that you add to this parameter

- **exclude**

  Object (default: [])

This setting offers you the possibility of deactivating part of Manakit's CSS in order to reduce the CSS of your applications from classes and functionalities that you do not use.
