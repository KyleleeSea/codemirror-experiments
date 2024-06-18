import { syntaxTree } from "@codemirror/language";
import { linter, Diagnostic } from "@codemirror/lint";
import { printTree } from "@lezer-unofficial/printer";
// import {useCallback} from "react"

export const useLint = linter((view) => {
  const { state } = view;
  const tree = syntaxTree(state);

  if (tree.length === state.doc.length) {
    let pos: number | null = null;
    tree.iterate({
      enter: (n) => {
        if (pos == null && n.type.isError) {
          console.log("error");
          console.log(printTree(n.node, state.doc.toString()));

          pos = n.from;
          return false;
        }
      },
    });

    if (pos != null)
      return [
        {
          from: pos,
          to: pos + 1,
          severity: "error",
          message: "syntax error",
        },
      ];
  }

  return [];
});
