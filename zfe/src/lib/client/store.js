import { writable } from 'svelte/store';

const stored = null;//localStorage.theme;
const theme = writable(stored || 'luxury');
// theme.subscribe(( /** @type String **/ value) => (localStorage.theme = value));

export { theme }
