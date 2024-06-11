import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import {domainLanguageSupport} from './parser/domain/domainLanguage'
import {autocompletion} from '@codemirror/autocomplete';
import DomainAutocomplete from './hooks/domain/domainAutocomplete'
import { color } from '@uiw/codemirror-extensions-color';
import {useLint} from './hooks/useLinter'

export default function EditorPane() {
  const completionFn = DomainAutocomplete()
  const extensionsList = [autocompletion({override: [completionFn]}),  
  domainLanguageSupport(), color]

  return <CodeMirror extensions={extensionsList} />;
}