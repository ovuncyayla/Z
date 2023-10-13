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

<select class=""  bind:value={$theme}>
	#{#each themes as t, i}
		<option value={t}>{t} </option>
	{/each}
</select>

<style>
  select {
    @apply select;
    @apply select-bordered;
    @apply max-w-xs;
    font-family: Virgil;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    scrollbar-width: 1px;
  }

</style>
