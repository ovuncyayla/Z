<script>
	import { theme } from '$lib/client/store.js';

	let themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<link rel="icon" type="image/svg+xml" href="/vite.svg" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vite + TS</title>
</svelte:head>

<div>
	<select bind:value={$theme}>
		#{#each themes as t, i}
			<option value={t}>{ t } </option>
		{/each}
	</select>

	<button class="btn">Button</button>
	<button class="btn btn-neutral">Neutral</button>
	<button class="btn btn-primary">Primary</button>
	<button class="btn btn-secondary">Secondary</button>
	<button class="btn btn-accent">Accent</button>
	<button class="btn btn-ghost">Ghost</button>
	<button class="btn btn-link">Link</button>
</div>

<!-- Page Content -->
<slot />
