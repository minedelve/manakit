<script context="module">
	import { h1, h2, h3 } from './index';
	export { h1, h2, h3 };
</script>

<script>
	import Seo from '$lib/components/seo.svelte';
	import { Container } from 'manakit';

	export let title;
	export let desc;
</script>

<Seo {title} {desc} />

<Container>
	<slot />
</Container>
