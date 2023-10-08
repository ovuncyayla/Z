<script>
	import 'grapesjs/dist/css/grapes.min.css'
	import './styles.css'
	import { init_editor } from './editor/index.js'
	import { onMount } from 'svelte';

	/** @type HTMLElement **/
	let editor;

	onMount(() => {
		let edi = init_editor(editor);
		// console.log(edi.Panels.getPanels())
	});

</script>

<div class="container">
	<div />
	<div />
	<div />
	<div id="left-sidebar">
		<div id="left-sidebar-top"></div>
		<div id="left-sidebar-center"></div>
		<div id="left-sidebar-bottom"></div>
	</div>
	<div id="page-editor" bind:this={editor}>
		<h1>asdasda</h1>
	</div>
	<!-- <div id="gjs-pn-views-container" /> -->
</div>

