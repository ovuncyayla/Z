<script>
	import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";	
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<link rel="icon" type="image/svg+xml" href="/vite.svg" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Z</title>
</svelte:head>

<div>
	<ThemeSwitcher />

	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer" class="btn btn-primary p-5 drawer-button">Open drawer</label>
			<!-- Page Content -->
			<slot />

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.9999999999998 725" width="262.9999999999998" height="725">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style class="style-fonts">
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
    </style>
    
  </defs>
  <rect x="0" y="0" width="262.9999999999998" height="725" fill="#f5faff"></rect><g stroke-linecap="round" transform="translate(10 10) rotate(0 121.49999999999989 352.5)"><path d="M32 0 M32 0 C68.4 0.1, 108.07 -2.22, 211 0 M32 0 C95.6 1.73, 158.71 1.68, 211 0 M211 0 C231.85 -1.58, 243.78 8.87, 243 32 M211 0 C233.77 -0.28, 242.36 9.4, 243 32 M243 32 C241.71 177.04, 241.84 321.44, 243 673 M243 32 C242.74 264.83, 242.97 497.44, 243 673 M243 673 C243.38 693.71, 231.41 704.82, 211 705 M243 673 C244.52 695.21, 234.53 706.87, 211 705 M211 705 C167.14 707.03, 122.39 706.33, 32 705 M211 705 C161.94 704.37, 111.04 704.52, 32 705 M32 705 C9.18 706.2, 1.81 693.02, 0 673 M32 705 C8.37 703.12, 2.01 695.14, 0 673 M0 673 C0.45 489.16, 0.85 306.2, 0 32 M0 673 C1.74 484.99, 1.56 297.2, 0 32 M0 32 C0.31 10.6, 11.13 0.45, 32 0 M0 32 C1.22 12.5, 8.59 0.39, 32 0" stroke="#1e1e1e" stroke-width="1" fill="none"></path></g></svg>


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

				<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
			</ul>
		</div>
	</div>
</div>
