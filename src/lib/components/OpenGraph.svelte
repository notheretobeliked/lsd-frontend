<script lang="ts">
	type Image = {
		url: string
		alt: string
	}
	export let image: Image
	export let squareImage: Image
	export let metadescription: string
	export let ogLanguage: string = 'en_UK'
	export let pageTitle: string
	export let siteTitle: string = 'Heat Strike'
	export let siteUrl: string
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
	<meta
		name="keywords"
		content="Heat Strike, heat wave, scorcher, activism, cost of living, protest, anti-government, Just Stop Oil, Extinction Rebellion, Greenpeace, RSPB, RMT, Royal College of Nurses, Rishi Sunak, civil disobedience, Suffragettes, MLK, Berlin Wall, London, United Kingdom "
	/>
	<meta name="description" content={metadescription} />

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
</svelte:head>
