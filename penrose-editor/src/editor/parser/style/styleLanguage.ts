import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";
import { parser } from "./style.js";
import { Namespace } from "./style.terms.js";

export const styleLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment,
        BlockComment: t.lineComment,
        type: t.keyword,
        Namespace: t.typeName,
        // predicate: t.keyword,
        // symmetric: t.keyword,
        // function: t.keyword,
        // constructor: t.keyword,
      }),
    ],
  }),
});

export const styleLanguageSupport = () => {
  return new LanguageSupport(styleLanguage);
};
