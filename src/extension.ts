import * as vscode from "vscode";
import generate from "./function/generate_folders";
import generateFeature from "./function/generate_feature";

export function activate(context: vscode.ExtensionContext) {
  let cfGenerate = vscode.commands.registerCommand(
    "clean-file.generate",
    () => {
      generate();
      vscode.window.showInformationMessage("Clean file generate executed");
    }
  );

  let cfGenerateFeature = vscode.commands.registerCommand(
    "clean-file.feature",
    () => {
      generateFeature();
      vscode.window.showInformationMessage(
        "Clean file generate feature executed"
      );
    }
  );

  context.subscriptions.push(cfGenerate);
  context.subscriptions.push(cfGenerateFeature);
}

export function deactivate() {}
