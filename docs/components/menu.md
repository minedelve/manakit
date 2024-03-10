---
title: Menu
desc: .
published: true
layout: components
---

<script>

    const dataProps = [{name: 'open', type: 'boolean', default: 'undefined', 'desc': 'show or hide menu groups element.' }, {name: 'disabled', type: 'boolean', default: 'false', 'desc': 'disabled li action.' },{name: 'horizontal', type: 'boolean', default: 'false', 'desc': 'display menu horizontal' }, {name: 'vertical', type: 'boolean', default: 'false', 'desc': 'display meny vertical' }, {name: 'size', type: 'string', default: 'undefined', 'desc': 'choose size for li <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>' }, {name: 'background', type: 'string', default: 'undefined', 'desc': 'add background color with props, use <code>$$primary</code> for call a root color manakit' }, {name: 'color', type: 'string', default: 'undefined', 'desc': 'add color with props, use <code>$$primary</code> for call a root color manakit' }]

    const dataSlot = [{name: 'default', default: 'undefined', 'desc': 'the default Svelte slot' },{name: 'section', default: 'undefined', 'desc': 'The slot used for first li to details menu' }]

    const dataCSS = [{variable: '--menu-background', default: '#1f2837', 'desc': 'background color for li menu' },{variable: '--menu-color', default: '#f2f2f2', 'desc': 'color for li menu' }, {variable: '--menu-background-hover', default: '#e0e0e1', 'desc': 'hover background for li in menu' }, {variable: '--menu-color-disabled', default: '#c0c3c5', 'desc': 'disabled color text li in menu' }, {variable: '--menu-color-line', default: '#1f2c32', 'desc': 'color css for :before ul line' } ]

    const dataClass= [{type: 'responsive' , class: 'menu-vertical', desc: 'Force the menu to display vertical (default)' }, {type: 'responsive' , class: 'menu-horizontal', desc: 'Force the menu to display horizontal' }, {type: 'responsive' , class: 'menu-xs', desc: 'display li size to xs menu size' }, {type: 'responsive' , class: 'menu-sm', desc: 'display li size to sm menu size' }, {type: 'responsive' , class: 'menu-md', desc: 'display li size to md menu size' }, {type: 'responsive' , class: 'menu-lg', desc: 'display li size to lg menu size' }]

</script>

#### Props

Table

#### Slot

Table

#### Variables CSS

#### Class
