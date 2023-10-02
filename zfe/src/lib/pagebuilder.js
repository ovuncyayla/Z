import { default as grapesjs } from 'grapesjs';


function editor_plugins() {

	return {
		plugins: [
			'gjs-blocks-basic',
			'grapesjs-plugin-forms',
			'grapesjs-component-countdown',
			'grapesjs-plugin-export',
			'grapesjs-tabs',
			'grapesjs-custom-code',
			'grapesjs-touch',
			'grapesjs-parser-postcss',
			'grapesjs-tooltip',
			'grapesjs-tui-image-editor',
			'grapesjs-typed',
			'grapesjs-style-bg',
			// 'grapesjs-preset-webpage',
		],
		/** @type import('grapesjs').PluginOptions **/
		pluginsOpts: {
			'gjs-blocks-basic': { flexGrid: true },
			'grapesjs-tui-image-editor': {
				script: [
					// 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
					'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
					'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
					'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
				],
				style: [
					'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
					'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
				],
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
						strings: [
							'Text row one',
							'Text row two',
							'Text row three',
						],
					}
				}
			},
			'grapesjs-preset-webpage': {
				modalImportTitle: 'Import Template',
				modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
				modalImportContent: function(/** @type import('grapesjs').Editor **/ editor) {
					return editor.getHtml() + '<style>' + editor.getCss() + '</style>'
				},
			},
		}
	};


}



function edi() {
	/** import('grapesjs').EditorConfig **/
	return grapesjs.init({
		// Indicate where to init the editor. You can also pass an HTMLElement
		container: '#gjs',
		// Get the content for the canvas directly from the element
		// As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
		fromElement: true,
		// Disable the storage manager for the moment
		storageManager: false,
		// Avoid any default panel
		panels: { defaults: [] },
	});
}

export default edi
