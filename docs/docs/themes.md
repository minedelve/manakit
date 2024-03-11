---
title: Manakit Themes
desc: Manakit allows you to customize your entire application directly via a single configuration file and to be used in a simple and optimized way thanks to variables and CSS classes.
published: true
layout: documentation
---

```javascript
	themes: {
		default: {
			primary: { light:  '#6750A4', dark:  '#D0BCFF' },
			onPrimary: { light:  '#FFFFFF', dark:  '#381E72' },
			primaryContainer: { light:  '#EADDFF', dark:  '#4F378B' },
			onPrimaryContainer: { light:  '#21005D', dark:  '#EADDFF' },
			secondary: { light:  '#625B71', dark:  '#CCC2DC' },
			onSecondary: { light:  '#FFFFFF', dark:  '#332D41' },
			secondaryContainer: { light:  '#E8DEF8', dark:  '#4A4458' },
			onSecondaryContainer: { light:  '#1D192B', dark:  '#E8DEF8' },
			tertiary: { light:  '#7D5260', dark:  '#EFB8C8' },
			onTertiary: { light:  '#FFFFFF', dark:  '#492532' },
			// ...
		}
	}
```

## Dark / Light mode

If you activate the management of dark and light themes via Manakit on your application, your style will be based by default on the theme of your device via the management of the `prefers-color-scheme`. You can then force the use of a theme via the use of a css class on the html tag called `.light` or `.dark`.

```html
<html lang="en" class="theme-light"></html>
```

```html
<html lang="en" class="theme-dark"></html>
```

### Example of function to change the mode of your application

```javascript
function toggleDarkLight() {
	const htmlElement = document.documentElement;

	if (htmlElement.classList.contains('light')) {
		htmlElement.classList.replace('light', 'dark');
	} else if (htmlElement.classList.contains('dark')) {
		htmlElement.classList.replace('dark', 'light');
	} else {
		htmlElement.classList.add('dark');
	}
}
```

## Use a custom theme

In addition to the default theme, you can create as many themes as you want.
To create a new theme for your application, you must add a new theme to the `.manakit.cjs` file.

```javascript
	themes: {
		'my-theme': {
			primary: { light:  '#6750A4', dark:  '#D0BCFF' },
			secondary: { dark:  '#CCC2DC' },
			tertiary: { light:  '#7D5260' },
			outline: '#79747E',
		}
	}
```

Once this theme has been added to your configuration file, you can call it directly in your application via the `manakit-theme` property.

```html
<html lang="en" manakit-theme="my-theme"></html>
```

This allows you to directly load the theme you want on your application.
