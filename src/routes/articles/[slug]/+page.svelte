<script lang="ts">
	import type { PageData } from './$types'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Download from '$lib/components/atoms/Download.svelte'
	import { SoundCloud, Vimeo } from 'sveltekit-embed'

	export let data: PageData
	

	import { burgerStore, activeSectionStore } from '$lib/utilities/stores';
	burgerStore.set(false)
	let activeSection: string = 'articles	'
	activeSectionStore.set("articles");

	function checksection(event: CustomEvent) {
    activeSectionStore.set(event.detail.section);
	}

	$: activeSection = $activeSectionStore;



	const { title, author, embedType, embed, pdf, content, slug } = data
</script>

<Logo />
<div class="h-screen flex flex-col md:flex-row homesection">
	<Homepagesection
		title="Articles"
		bind:activeSection
		section="articles"
		gradient
		on:activateSection={checksection}
	>
		<div class="relative px-2 lg:px-12 w-full max-w-[900px] mx-auto">
			<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8" />
			<hgroup class="mb-12">
				<h1 class="mb-12 text-4xl">{title}</h1>
				<h2 class="mb-12 text-center font-serif normal-case text-base italic">{author}</h2>
			</hgroup>
			<div>
				<div class="wp-content">
					{@html content || ''}
				</div>
				{#if embed && embedType === 'soundcloud'}
					<div class="alignwide mb-24">
						<SoundCloud soundcloudLink={embed} />
					</div>
				{/if}
				{#if embed && embedType === 'vimeo'}
					<div class="alignwide mb-24">
						<Vimeo vimeoId={embed} />
					</div>
				{/if}
				{#if pdf}
					<Download {...pdf} />
				{/if}
			</div>
		</div>
	</Homepagesection>

	<Homepagesection
		title="Edition"
		bind:activeSection
		section="edition"
		on:activateSection={checksection}
	/>

	<Homepagesection
		title="Crédits"
		bind:activeSection
		section="credits"
		on:activateSection={checksection}
	/>
	<Homepagesection
		title="A propos"
		bind:activeSection
		section="a-propos"
		on:activateSection={checksection}
	/>
</div>

{#if slug === 'lecole-batarde'}
	<style lang="postcss">
		@font-face {
			font-family: BBBBaskervvol-Fondue;
			font-weight: 400;
			src: url(/fonts/BBBBaskervvol-Fondue.woff2) format('woff2'),
				url(/fonts/BBBBaskervvol-Fondue.woff) format('woff');
			font-display: swap;
		}

		@font-face {
			font-family: DINdong;
			font-weight: 200;
			src: url(/fonts/DINdong.woff2) format('woff2'), url(/fonts/DINdong.woff) format('woff');
			font-display: swap;
		}

		@font-face {
			font-family: DuctusRegular;
			font-weight: 200;
			src: url(/fonts/DuctusRegular.woff2) format('woff2'),
				url(/fonts/DuctusRegular.woff) format('woff');
			font-display: swap;
		}

		@font-face {
			font-family: Homoneta-Regular;
			font-weight: 200;
			src: url(/fonts/Homoneta-Regular.woff2) format('woff2'),
				url(/fonts/Homoneta-Regular.woff) format('woff');
			font-display: swap;
		}
		@font-face {
			font-family: Amiamie-Light;
			font-weight: 200;
			src: url(/fonts/Amiamie-Light.woff2) format('woff2'),
				url(/fonts/Amiamie-Light.woff) format('woff');
			font-display: swap;
		}

		@font-face {
			font-family: Amiamie-Light;
			font-weight: 200;
			src: url(/fonts/Amiamie-LightItalic.woff2) format('woff2'),
				url(/fonts/Amiamie-LightItalic.woff) format('woff');
			font-display: swap;
			font-style: italic;
		}

		h4 {
			@apply font-serif uppercase tracking-wide pb-0 mb-0;
		}

		h5 {
			@apply text-center pb-0 mb-0;
		}

		.indented {
			@apply pl-3 md:pl-12;
		}

		.halix {
			font-family: DINdong;
		}

		.felixe {
			font-family: BBBBaskervvol-Fondue;
		}

		.axxenne {
			font-family: DuctusRegular;
		}

		.enza {
			font-family: Homoneta-Regular;
		}

		.laurence {
			font-family: Amiamie-Light;
			font-weight: 200;
		}
	</style>
{/if}
