import {useCallback} from 'react';
import {CompletionContext} from '@codemirror/autocomplete';
import {syntaxTree} from '@codemirror/language';

// Recommends NotInternal if following "Internal"
const customFiltering = (context: CompletionContext) => {
    let nodeBefore = syntaxTree(context.state).resolveInner(context.pos, -1)
    let prevSibling = nodeBefore.prevSibling
    if (prevSibling !== null && prevSibling.type.name == "Internal") {
        return [{label: "NotInternal", type: "string"}]
    }
    return [
        {
            label: "Internal",
            type: "string"
        }
    ]
}

const UseAutocomplete = () => {
    return useCallback(async (context: CompletionContext) => {
        let nodeBefore = syntaxTree(context.state).resolveInner(context.pos, -1)
        let parent = nodeBefore.parent
        // console.log(`Before: ${nodeBefore.name}`)
        // console.log(nodeBefore)
        const tagOptions = customFiltering(context);
        console.log(tagOptions)

        if (parent === null) {
            console.log("null node")
            return null
        }
        
        // console.log(`Parent: ${parent.name}`)

        if (parent.name !== "Test") {
            return null
        }

        let word = context.matchBefore(/\w*/);
        // console.log(word)
        // console.log(tree)
        if (word == null) {
            return null
        }

        return {
            from: word.from,
            options: tagOptions
        }

    }, [])
}

export default UseAutocomplete;