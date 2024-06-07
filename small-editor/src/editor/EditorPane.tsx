import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import {simpleLangSupport} from './grammar/simplelang'
import {autocompletion} from '@codemirror/autocomplete';
import UseAutocomplete from './hooks/useAutocomplete'

export default function EditorPane() {
  const completionFn = UseAutocomplete()
  const extensionsList = [autocompletion({override: [completionFn]}),  
  simpleLangSupport()]

  return <CodeMirror extensions={extensionsList} />;
}