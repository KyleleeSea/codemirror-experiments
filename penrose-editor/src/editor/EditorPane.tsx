import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import {domainLanguageSupport} from './parser/domain/domainLanguage'
import {substanceLanguageSupport} from './parser/substance/substanceLanguage'
import {autocompletion} from '@codemirror/autocomplete';
import DomainAutocomplete from './hooks/domain/domainAutocomplete'
import SubstanceAutocomplete from './hooks/substance/substanceAutocomplete'

import { color } from '@uiw/codemirror-extensions-color';
// import {useLint} from './hooks/useLinter'

export default function EditorPane() {
  const domainCompletionFn = DomainAutocomplete()
  const domainExtensions = [autocompletion({override: [domainCompletionFn]}),  
  domainLanguageSupport(), color]

  const substanceCompletionFn = SubstanceAutocomplete()
  const substanceExtensions = [autocompletion({override: [substanceCompletionFn]}),
  substanceLanguageSupport()]

  return (<div>
    <div>
      <h2>Domain</h2>
    <CodeMirror extensions={domainExtensions} />
    </div>
    <div>
      <h2>Substance</h2>
    <CodeMirror extensions={substanceExtensions} />
    </div>
</div>)
}