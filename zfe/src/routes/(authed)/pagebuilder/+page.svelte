<script>
	import { onMount } from 'svelte';
	import edi from '$lib/pagebuilder.js';

	onMount(() => {(edi())})

</script>

<svelte:head>
	<meta charset="UTF-8" />
	<link rel="icon" type="image/svg+xml" href="/vite.svg" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vite + TS</title>

	<link
		rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"
	/>
	<link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css" />
	<link rel="stylesheet" href="https://grapesjs.com/stylesheets/grapesjs-preset-webpage.min.css" />
	<link rel="stylesheet" href="https://grapesjs.com/stylesheets/tooltip.css" />
	<link rel="stylesheet" href="https://grapesjs.com/stylesheets/demos.css?v3" />
	<link href="https://unpkg.com/grapick/dist/grapick.min.css" rel="stylesheet" />
</svelte:head>

<div id="app">
	<a href="/">Home</a>
	<a href="/pagebuilder">PageBuildy</a>
</div>

<div id="app">
	<div id="gjs" />
</div>


