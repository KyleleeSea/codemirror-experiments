import {ExternalTokenizer, ContextTracker} from "@lezer/lr"
import {newline, LineComment, BlockComment, spaces, insertSemi} from "./domain.terms.js"

export const trackNewline = new ContextTracker({
    start: false,
    shift(context, term) {
      return term === LineComment || term === BlockComment || term === spaces
        ? context : term === newline
    },
    strict: false
  })

export const insertSemicolon = new ExternalTokenizer((input, stack) => {
    let {next} = input
    // console.log(stack.context)
    if (next === -1 || stack.context)
      input.acceptToken(insertSemi)
  }, {contextual: true, fallback: true})
  