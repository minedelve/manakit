<script lang="ts">
	import { Btn, Card, Col, Row, Toolbar } from 'manakit';
	import { paletteManakit } from './props';
	import { paletteWebkit } from './propswebkit';

	let displayColorList = 'manakit';
	let palette: any = paletteManakit;

	function handleChange(state: string) {
		displayColorList = state;
		if (state === 'manakit') palette = paletteManakit;
		else if (state === 'webkit') palette = paletteWebkit;
	}
</script>

<Toolbar>
	<Btn on:click={() => handleChange('manakit')} active={displayColorList === 'manakit'}>Manakit</Btn
	>
	<Btn on:click={() => handleChange('webkit')} active={displayColorList === 'webkit'}>Webkit</Btn>
</Toolbar>

{#each Object.keys(palette) as color}
	<Toolbar class="toolbar-xs bg:background">
		{color}
	</Toolbar>
	<Row noGutters>
		{#each Object.keys(palette[color]) as shade}
			<Col class="col-auto ma-1" title={`${color}-${shade}: ${palette[color][shade]}`}>
				<Card style="background-color: {palette[color][shade]}; width: 40px; height: 24px;" />
				<div class="text-xs">{`${color}-${shade}`}</div>
			</Col>
		{/each}
	</Row>
{/each}
