import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "hex-decimal-magic" is now active!');

	let disposableDtoH = vscode.commands.registerCommand('extension.convertDecToHex', () => {		
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;
		
		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let dec = document.getText(selection);
			let hex = DecToHex(dec);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, hex);
			});
		}
	});

	let disposableHtoD = vscode.commands.registerCommand('extension.convertHexToDec', () => {		
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;
		
		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let hex = document.getText(selection);
			let dec = HexToDec(hex);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, dec);
			});
		}
	});

	context.subscriptions.push(disposableHtoD);
	context.subscriptions.push(disposableDtoH);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function DecToHex(dec: string): string {
	console.log('input dec:', dec);

	let hex = '';
	hex = (+dec).toString(16).toUpperCase();
		
	console.log('return hex:', hex);
	return hex;
}

function HexToDec(hex: string): string {
	console.log('input hex:', hex);

	let dec = '';
	dec = parseInt(hex, 16).toString();
		
	console.log('return dec:', dec);
	return dec;
}
