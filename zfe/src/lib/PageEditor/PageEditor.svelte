<script>
	// import 'grapesjs/dist/css/grapes.min.css'
	// import 'grapesjs/dist/grapes.mjs'

	import { default as grapesjs } from 'grapesjs';
	import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
	import grapesjsPluginForms from 'grapesjs-plugin-forms';
	import grapesjsComponentCountdown from 'grapesjs-component-countdown';
	import grapesjsPluginExport from 'grapesjs-plugin-export';
	import grapesjsTabs from 'grapesjs-tabs';
	import grapesjsCustomCode from 'grapesjs-custom-code';
	import grapesjsTouch from 'grapesjs-touch';
	import grapesjsParserPostcss from 'grapesjs-parser-postcss';
	import grapesjsTooltip from 'grapesjs-tooltip';
	import grapesjsTuiImageEditor from 'grapesjs-tui-image-editor';
	import grapesjsTyped from 'grapesjs-typed';
	import grapesjsStyleBg from 'grapesjs-style-bg';
	import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
	import grapesjsNavbar from 'grapesjs-navbar';
	import grapesjsLorySlider from 'grapesjs-lory-slider';

	import { onMount } from 'svelte';

	onMount(() => {
		let editor = grapesjs.init({
			container: '#editor-content',
			height: '100%',
			canvas: {	

			},
			traitManager: {

				appendTo: '#left-sidebar-bottom'

			},

			panels: {

				defaults: []

			},
			
			styleManager: {
				appendTo: '#left-sidebar-bottom'
			},
			layerManager: {
				appendTo: '#left-sidebar-center'
			},

			blockManager: {
				appendTo: '#left-sidebar-top'
			},

			plugins: [
				grapesjsPresetWebpage
				// grapesjsBlocksBasic,
				// grapesjsPluginForms,
				// grapesjsTuiImageEditor,
				// grapesjsTabs,
				// grapesjsTyped,
				// grapesjsComponentCountdown,
				// grapesjsPluginExport,
				// grapesjsCustomCode,
				// grapesjsTouch,
				// grapesjsParserPostcss,
				// grapesjsTooltip,
				// grapesjsStyleBg,
				// grapesjsNavbar,
				// 'grapesjsLorySlider',
			],
			/** @type import('grapesjs').PluginOptions **/
			pluginsOpts: {
				grapesjsPresetWebpage: {
					showStylesOnChange: false,
					useCustomTheme: false
				}
				// grapesjsBlocksBasic: { flexGrid: true },
				// grapesjsTuiImageEditor: {
				//	script: [
				//		// 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
				//		'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
				//		'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
				//		'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
				//	],
				//	style: [
				//		'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
				//		'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css'
				//	]
				// },
				// grapesjsTabs: {
				//	tabsBlock: { category: 'Extra' }
				// },
				// grapesjsTyped: {
				//	block: {
				//		category: 'Extra',
				//		content: {
				//			type: 'typed',
				//			'type-speed': 40,
				//			strings: ['Text row one', 'Text row two', 'Text row three']
				//		}
				//	}
				// },
				// grapesjsLorySlider: { }
			}
		});

		console.log(editor.Panels.getPanels())
		
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
	<div id="editor-content" />
	<div id="gjs-pn-views-container" />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 2fr 10fr 2fr;
		grid-template-rows: 1fr 25fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'. . .'
			'. . .';
		height: 100vh;
	}
</style>
