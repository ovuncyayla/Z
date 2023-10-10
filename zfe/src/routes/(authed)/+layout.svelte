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
	<title>Z</title>
</svelte:head>

<div>
	<select bind:value={$theme}>
		#{#each themes as t, i}
			<option value={t}>{t} </option>
		{/each}
	</select>

	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer" class="btn btn-primary p-5 drawer-button">Open drawer</label>
			<!-- Page Content -->
			<slot />
		</div>
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
				<!-- Sidebar content here -->

				<div class="join join-vertical w-full">
					<div class="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" checked={true} />
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

				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1024 75"
					width="1024"
					height="75"
				>
					<!-- svg-source:excalidraw -->
					<defs>
						<style class="style-fonts">
							@font-face {
								font-family: 'Virgil';
								src: url('https://excalidraw.com/Virgil.woff2');
							}
							@font-face {
								font-family: 'Cascadia';
								src: url('https://excalidraw.com/Cascadia.woff2');
							}
						</style>
					</defs>
					<rect x="0" y="0" width="1024" height="75" fill="#f5faff" /><g
						stroke-linecap="round"
						transform="translate(10 10) rotate(0 502 27.5)"
						><path
							d="M13.75 0 M13.75 0 C278.65 -3.57, 542.36 -3.96, 990.25 0 M13.75 0 C250.78 3.19, 487.5 2.84, 990.25 0 M990.25 0 C999.59 -0.97, 1003.45 6.33, 1004 13.75 M990.25 0 C999.94 0.77, 1003.58 6.02, 1004 13.75 M1004 13.75 C1004.96 23.74, 1001.85 30.6, 1004 41.25 M1004 13.75 C1003.94 21.79, 1004.72 30.12, 1004 41.25 M1004 41.25 C1003.42 49.62, 998.95 55.27, 990.25 55 M1004 41.25 C1004.13 50.88, 1000.95 55.29, 990.25 55 M990.25 55 C745.65 55.92, 502.41 55.51, 13.75 55 M990.25 55 C765.16 56.43, 539.74 56.82, 13.75 55 M13.75 55 C4.83 53.3, 1.76 52, 0 41.25 M13.75 55 C3.77 53.78, -1.94 52.29, 0 41.25 M0 41.25 C0.84 34.97, -0.16 29.48, 0 13.75 M0 41.25 C0.48 32.71, 0.77 23.12, 0 13.75 M0 13.75 C-0.04 6.41, 5.02 -0.2, 13.75 0 M0 13.75 C0.58 3.23, 2.84 -2.08, 13.75 0"
							stroke="#1e1e1e"
							stroke-width="1"
							fill="none"
						/></g
					></svg
				>

				<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
			</ul>
		</div>
	</div>
</div>
