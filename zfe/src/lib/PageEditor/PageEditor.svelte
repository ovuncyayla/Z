<script>
	import { default as grapesjs } from 'grapesjs';
	import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
	import grapesjsPluginForms from 'grapesjs-plugin-forms'
	import grapesjsComponentCountdown from 'grapesjs-component-countdown'
	import grapesjsPluginExport from 'grapesjs-plugin-export'
	import grapesjsTabs from 'grapesjs-tabs'
	import grapesjsCustomCode from 'grapesjs-custom-code'
	import grapesjsTouch from 'grapesjs-touch'
	import grapesjsParserPostcss from 'grapesjs-parser-postcss'
	import grapesjsTooltip from 'grapesjs-tooltip'
	import grapesjsTuiImageEditor from 'grapesjs-tui-image-editor'
	import grapesjsTyped from 'grapesjs-typed'
	import grapesjsStyleBg from 'grapesjs-style-bg'
	import grapesjsPresetWebpage from 'grapesjs-preset-webpage'

	import { onMount } from 'svelte';

	onMount(() => {
		grapesjs.init({
			container: '#gjs',

			plugins: [
				// 'gjs-blocks-basic',
				grapesjsBlocksBasic,
				grapesjsPluginForms,
				grapesjsComponentCountdown,
				grapesjsPluginExport,
				grapesjsTabs,
				grapesjsCustomCode,
				grapesjsTouch,
				grapesjsParserPostcss,
				grapesjsTooltip,
				grapesjsTuiImageEditor,
				grapesjsTyped,
				grapesjsStyleBg,
				grapesjsPresetWebpage,
			],
			/** @type import('grapesjs').PluginOptions **/
			pluginsOpts: {
				// 'gjs-blocks-basic': { flexGrid: true },
				GjsBlocks: { flexGrid: true },
				'grapesjs-tui-image-editor': {
					script: [
						// 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
						'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
						'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
						'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
					],
					style: [
						'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
						'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css'
					]
				},
				'grapesjs-tabs': {
					tabsBlock: { category: 'Extra' }
				},
				'grapesjs-typed': {
					block: {
						category: 'Extra',
						content: {
							type: 'typed',
							'type-speed': 40,
							strings: ['Text row one', 'Text row two', 'Text row three']
						}
					}
				},
				'grapesjs-preset-webpage': {
					modalImportTitle: 'Import Template',
					modalImportLabel:
						'<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
					modalImportContent: function (/** @type import('grapesjs').Editor **/ editor) {
						return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
					}
				}
			}
		});
	});
</script>

<div id="gjs" />

