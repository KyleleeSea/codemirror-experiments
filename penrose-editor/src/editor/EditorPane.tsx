import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import {domainLanguageSupport} from './parser/domain/domainLanguage'
import {autocompletion} from '@codemirror/autocomplete';
import UseAutocomplete from './hooks/useAutocomplete'
import { color } from '@uiw/codemirror-extensions-color';
import {useLint} from './hooks/useLinter'

export default function EditorPane() {
  const completionFn = UseAutocomplete()
  const extensionsList = [autocompletion({override: [completionFn]}),  
  domainLanguageSupport(), color]

  return <CodeMirror extensions={extensionsList} />;
}