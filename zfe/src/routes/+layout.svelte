<script>
// import '@picocss/pico'
</script>
<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Zen FE</title>
</svelte:head>

<slot />

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
</style>
