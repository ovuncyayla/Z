<script>
	import { onMount } from 'svelte';
	import edi from '$lib/pagebuilder.js';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

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


<AppShell>
	<svelte:fragment slot="header">

		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>

	</svelte:fragment>


<div id="app">
	<a href="/">Home</a>
	<a href="/pagebuilder">PageBuildy</a>
</div>


	<div id="app">
		<div id="gjs" />
	</div>

</AppShell>

