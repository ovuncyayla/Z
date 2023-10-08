

/**
 * @param {import("grapesjs").Editor} editor
 */
export function blocks(editor) {

	const { Commands, Blocks } = editor;

	/** @type import('grapesjs').Commands **/
	let cmd = Commands;
	console.log(cmd.getAll())

	cmd.run("export-template")
}
