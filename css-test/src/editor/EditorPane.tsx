import CodeMirror from '@uiw/react-codemirror';
import {css} from '@codemirror/lang-css';
import React from 'react'

export default function EditorPane() {

  return <CodeMirror extensions={[css()]} />;
}