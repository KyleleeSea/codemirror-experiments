import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import {simpleLangSupport} from './grammar/simplelang'
import {autocompletion} from '@codemirror/autocomplete';
import UseAutocomplete from './hooks/useAutocomplete'
import { color } from '@uiw/codemirror-extensions-color';
import {useLint} from './hooks/useLinter'

export default function EditorPane() {
  const completionFn = UseAutocomplete()
  const extensionsList = [autocompletion({override: [completionFn]}),  
  simpleLangSupport(), color, useLint]

  return <CodeMirror extensions={extensionsList} />;
}