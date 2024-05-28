<script>
	import Seo from '$lib/components/seo.svelte';

	export let title;
	export let desc;
</script>

<Seo {title} {desc} />

TEMPLATE !!!
<slot />
