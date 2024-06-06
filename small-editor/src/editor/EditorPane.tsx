import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import React from 'react'

export default function EditorPane() {
  return <CodeMirror extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />;
}