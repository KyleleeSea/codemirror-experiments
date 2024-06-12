import {LRLanguage, LanguageSupport} from '@codemirror/language';
import {styleTags, tags as t} from '@lezer/highlight';
import {parser} from './substance.js';

export const substanceLanguage = LRLanguage.define({
  parser: parser.configure({    
    props: [
      styleTags({

      }),
    ],
  }),
});

export const substanceLanguageSupport = () => {
  return new LanguageSupport(substanceLanguage);
};

