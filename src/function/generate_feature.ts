import * as vscode from "vscode";
import paths from "./paths";

function generateFeature() {
  const wsedit = new vscode.WorkspaceEdit();

  const wsPath = vscode.workspace.workspaceFolders![0].uri;

  paths.gFeature.map((pathInfo) => {
    const filePath = vscode.Uri.joinPath(wsPath, pathInfo.path!);

    if (pathInfo.content!) {
      const trasnformDataDocument = Uint8Array.from(
        pathInfo.content!.split("").map((letter) => letter.charCodeAt(0))
      );

      wsedit.createFile(filePath, {
        ignoreIfExists: true,
        contents: trasnformDataDocument,
      });
    } else {
      wsedit.createFile(filePath, {
        ignoreIfExists: true,
      });
    }
  });

  vscode.workspace.applyEdit(wsedit);
}

export default generateFeature;
