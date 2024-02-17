---
title: Drawer
desc: Drawer is a grid layout that can show/hide a sidebar on the left or right side.
published: true
layout: components
---

#### Props

Table

data=[{name: 'open', type: 'boolean', default: 'undefined', 'desc': 'show or hide aside element. if show, display overlay element.' },{name: 'end', type: 'boolean', default: 'false', 'desc': 'display sidebar on the left of the page' }, {name: 'classAside', type: 'string', default: 'undefined', 'desc': 'add custom class on aside area' }, {name: 'classContent', type: 'string', default: 'undefined', 'desc': 'add custom class on content area' }, {name: 'background', type: 'string', default: 'undefined', 'desc': 'add background color with props, use <code>$$primary</code> for call a root color manakit' }, {name: 'color', type: 'string', default: 'undefined', 'desc': 'add color with props, use <code>$$primary</code> for call a root color manakit' }]

#### Slot

Table

data=[{name: 'default', default: 'undefined', 'desc': 'the default Svelte slot' },{name: 'aside', default: 'undefined', 'desc': 'The slot used for display content in sidebar' }]

#### Variables CSS

data=[{variable: '--mk-drawer-surface', default: '--color-surface', 'desc': 'background color for sidebar' },{variable: '--mk-drawer-overlay', default: '--color-shadow', 'desc': 'The slot used for display content in sidebar' }, {variable: '--mk-drawer-overlay-opacity', default: '0.42', 'desc': 'opacity for overlay color' } ]

#### Class

data=[{type: 'responsive' , class: 'drawer-open', desc: 'Forces the drawer to be open' }]
