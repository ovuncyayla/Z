<script>
	import { onMount } from 'svelte';
	import '../app.postcss';

	import { theme } from '$lib/client/store.js'

</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Zen FE</title>
</svelte:head>

<div data-theme={ $theme }>
	<slot>This is an optional fallback!</slot>
</div>

<style>
	@font-face {
		font-family: 'Quicksand';
		src: url('/fonts/Quicksand.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'Space Grotesk';
		src: url('/fonts/SpaceGrotesk.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'Playfair Display';
		src: url('/fonts/PlayfairDisplay-Italic.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'Abril Fatface';
		src: url('/fonts/AbrilFatface.ttf');
		font-display: swap;
	}
	@font-face {
		font-family: 'Virgil';
		src: url('/fonts/Virgil.woff2');
	}
	@font-face {
		font-family: 'Cascadia';
		src: url('/fonts/Cascadia.woff2');
	}
</style>
