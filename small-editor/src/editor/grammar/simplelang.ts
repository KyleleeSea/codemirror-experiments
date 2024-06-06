import {LRLanguage, LanguageSupport} from '@codemirror/language';
import {styleTags, tags as t} from '@lezer/highlight';
import {parser} from './simplegrammar.js';

export const simpleLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Increment: t.keyword,
        Test: t.keyword,
        Internal: t.string
      }),
    ],
  }),
});

export const simpleLangSupport = () => {
  return new LanguageSupport(simpleLang);
};