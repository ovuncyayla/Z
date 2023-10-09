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


<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    	<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
			<button class="btn">Button</button>
			<button class="btn btn-neutral">Neutral</button>
			<button class="btn btn-primary">Primary</button>
			<button class="btn btn-secondary">Secondary</button>
			<button class="btn btn-accent">Accent</button>
			<button class="btn btn-ghost">Ghost</button>
			<button class="btn btn-link">Link</button>
			<!-- Page Content -->
			<slot />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
<div class="join join-vertical w-full">
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>



    		<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
    </ul>
  </div>
</div>


</div>

