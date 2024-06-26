## manakit@0.8.1

### What's Changed

- [new] module `Menu`.
- [update] logo librairy manakit.

## manakit@0.8.0

### What's Changed

**Module App, Main has been delete to Manakit**
**Manakit module prefix has been changed, `kit` to `mk`**
**Manakit have new logo !!!**

- [new] module `Switch`.
- [new] module `Label`.
- [new] module `List`.
- [new] module `ListItem`.
- [update] class `grid` add new class `d-grid`.
- [update] module `container` add new size display container, and delete props fill-height.
- [update] module `Modal` has changed to `Dialog`.
- [update] module `Btn` has all size class.
- [update] module `Footer` new css for area.
- [update] module `Dialog` new props fullscreen.
- [update] css `outline` has been updated.

### Patch Changes

- [bugfix] fix tag default module `footer` to div.
- [bugfix] fix color var on balise `html`.
- [bugfix] fix module `toolbar` bad display on container.
- [bugfix] fix css global and prose for assure not end to container all modules Manakit.
- [bugfix] fix css `margin` size 6 not working.
- [bugfix] fix module `Card` props text not working on container.
- [bugfix] fix module `Drawer` area content heritage color class.
- [bugfix] fix module `Col` grids to bad display container.
- [bugfix] fix module `Dialog` autofocus input and button by default.
- [bugfix] fix css theme `.dark` and `.light` on mixed.

## manakit@0.7.3

### What's Changed

- [update] add new class for margin (16 to 24)
- [update] add new class for padding (16 to 24)

### Patch Changes

- [bugfix] fix class gap not call gap property but padding ...

## manakit@0.7.2

### What's Changed

- [new] module `CardTitle`
- [new] module `CardSubtitle`
- [new] module `CardText`
- [new] module `CardActions`
- [update] tag class component `mk` to `kit`.

### Patch Changes

- [bugfix] fix shadow drawer position if drawer is absolute.
- [bugfix] update fix conflict css rounded class
- [bugfix] fix properties Vite not working ! FIXED !

## manakit@0.7.1

### What's Changed

- [new] css -> `Typography` class css.
- [new] css -> `Margin` class css.
- [new] css -> `Padding` class css.
- [new] css -> `Gap` class css.
- [new] css -> `Display` class css.
- [new] css -> `Elevation` class css.
- [new] css -> `Position` class css.
- [new] css -> `Rounded` class css.
- [new] css -> `Height` class css.
- [new] css -> `Width` class css.

### Patch Changes

- [bugfix] fix overflow not working with `drawer` fixed
- [bugfix] bottom `drawer` use all screen display
- [bugfix] conflict css in `drawer` module bottom and left / right

## manakit@0.7.0

### Patch Changes

- [bugfix] fix module `btn` css square size #49
- [bugfix] fix module `drawer` fix position absolute position #50
- [bugfix] fix module `drawer` fix crash display right position #48
- [bugfix] fix module `drawer` fix conflic mutli drawer in page #50
- [bugfix] fix module `toolbar` fix display overflow-x content #51

## manakit@0.6.18

### What's Changed

**The SASS package is no longer required to use Manakit! You are free to use the CSS precompiler of your choice :)**

- [new] preprocessor Manakit, use css native -> scss is not required for use manakit !.
- [update] preprocessor vite, add props for generate scss variables.
- [update] preprocessor vite, add props for minimify css, use palette color etc...

### Patch Changes

- [bugfix] fix crash with css not generated
- [bugfix] fix size toolbar not working #42
- [bugfix] fix btn-active status not display on render #43
- [bugfix] crash on start if verify version manakit not working #40
- [bugfix] crash on install manakit if sass is not install on your project !

## manakit@0.6.17

### What's Changed

- [new] **License MIT** set !
- [update] Readme with introduction and basic install configuration.
- [update] package informations

## manakit@0.6.16

### Patch Changes

- [bugfix] clear dependencie with Package-version. **Manakit not require PackageVersion for work !**
- [bugfix] standardise console message for run / install and error

## manakit@0.6.15

### Patch Changes

- [bugfix] #35 fix modal container no display on all mobile device.

## manakit@0.6.14

### What's Changed

- [new] add new features for color-scheme in manakit #33
- [update] module `App` add new props dark and light for forced theme use in this module.
- [update] module `Btn` add new props dark and light for forced theme use in this module.
- [update] module `Card` add new props dark and light for forced theme use in this module.
- [update] module `Divider` add new props dark and light for forced theme use in this module.
- [update] module `Drawer` add new props dark and light for forced theme use in this module.
- [update] module `Footer` add new props dark and light for forced theme use in this module.
- [update] module `Modal` add new props dark and light for forced theme use in this module.
- [update] module `Toolbar` add new props dark and light for forced theme use in this module.

### Patch Changes

- [bugfix] fix error unit on module `Row` margin
- [bugfix] color sheme system is not automatically activate #33
- [bugfix] if call variables SCSS in your style component svelte, you have message (.dark not used) #25

## manakit@0.6.13

### Patch Changes

- [bugfix] #28 add `restProps` on module `Modal`
- [bugfix] #29 add params on:click and on:dbclick for module `Btn`

## manakit@0.6.12

### What's Changed

- [update] module `Col` for standard class css for size and offset , delete props
- [update] module `Modal` for add props permanent + new class css

### Patch Changes

- [bugfix] fix module `Modal` for center content Card and add new class for top, bottom, and center position

## manakit@0.6.11

### What's Changed

- [new] module `Main` for display global content
- [new] module `Row` for control row cell to display
- [new] module `Col` for control column cell to display
- [update] module `Container` for add new wrapper
- [update] module `App` for add new wrapper

### Patch Changes

- [bugfix] fix container size width media queries
- [bugfix] add new css for fix overflow y with padding and margin associate to width: 100%

## manakit@0.6.10

### What's Changed

- [update] module `Btn` add new props rounded for display rounded border right and left (not square and circle)

## manakit@0.6.9

### What's Changed

- [new] new system value SCSS
- [new] add new path for load in your project directly variables scss in <style></style> with `manakit/style/variables` ( env 12ko )
- [update] style global load only css module, colors, and prose , reduce file to env 380ko ⇒ 116ko.
- [update] change path for global css modules to `manakit/style/css`

## manakit@0.6.8

### What's Changed

- [update] add Sass package to peerDependencies.

### Patch Changes

- [bugfix] #7 - Error message to start project

## manakit@0.6.7

### Patch Changes

- [bugfix] https://github.com/minedelve/manakit/issues/7 - Error message to start project

## manakit@0.6.6

### What's Changed

- [new] class colors on Themes and Custom Theme.
- [update] module `Btn` for use var —color and —background-color
- [update] module `Card` for use var —color and —background-color
- [update] module `Dividier` for use var —color
- [update] module `Dividier` not use $$slots , use display class.
- [update] module `Drawer` for use var —color and —background-color
- [update] module `Modal` —var color name standard
- [update] module `Toolbar` for use var —color and —background-color
- [update] module `Footer` for use var —color and —background-color

### Patch Changes

- [bugFix] load class theme and display content not working because have conflict to order load CSS.
- [bugFix] module `Btn` for display link class and hover
- [bugFix] module `Btn` disabled not display color theme
- [update] module `Card` fix align content center if use tag button
- [bugFix] module `Divider` for display full ligne if not content
- [bugFix] module `Divider` for display start & end value in Divider
- [bugFix] module `Divider` for display full ligne if not content
- [bugFix] module `Divider` vertical class not working
- [bugfix] [#13](https://github.com/minedelve/manakit/issues/13) - Npm command in check version is not good !

## manakit@0.6.5

### Patch Changes

- [bugFix] #6 - edit fonts on .manakit.cjs crash server
- [bugFix] #8 - devMode = manakit local , bad proxy Request timed out verif version package

## manakit@0.6.4

### What's Changed

- [new] module `Card`
- [new] module `Container`
- [new] module `Footer`
- [new] module `Dividier`
- [new] module `Drawer`
- [new] module `Modal`
- [new] module `Spacer`
- [new] module `Toolbar`
- [new] module `Btn`
- [new] module `Vstack`
- [new] module `Hstack`

### Patch Changes

- [bugFix] `fluid` props for module Container not working

## manakit@0.6.3

### What's Changed

- [new] create component `App` for define base to structural application.
- [new] create internal function for generate custom class with props.
- [new] init color background and color to html balise.
- [update] change camelCase to kebab-case variables in default theme.

## manakit@0.6.2

### What's Changed

- [new] prefers-color-scheme for theme default and custom theme
- [new] add normalize css 8.0.1 by [necolas](https://necolas.github.io/normalize.css/)
- [new] create prose css for display content
- [update] add condition for choici in config to use default light mode or default dark mode for user interface

### Patch Changes

- [bugFix] No load default theme if .manakit.cjs have not define default or custom theme.
- [bugFix] No load default font if .manakit.cjs have not define default or custom fonts.

## manakit@0.6.1

**Fix**

- Fix error on install manakit in project, Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'pkg-versions' imported from /.../node_modules/manakit/dist/check-version.js.

## manakit@0.6.0

**Add scss themes**

Creane vite.js process for generate styles and scss compilator for generate css files with multi variables js.

**Add 2 palettes colors**

- Webkit based on Apple Humans colors
- Manakit based on Tailwind colors

**2 new path Manakit**

- /vite -> for add preprocess on vite.config.js project;
- /style -> for import scss file on project;

## manakit@0.0.1

### Initial project

Init project with [SvelteKit](https://kit.svelte.dev/docs/creating-a-project)
