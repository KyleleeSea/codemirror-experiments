import {useCallback} from 'react';
import {CompletionContext} from '@codemirror/autocomplete';
import {syntaxTree} from '@codemirror/language';

// Recommends NotInternal if following "Internal"
const customFiltering = (context: CompletionContext) => {
    // let nodeBefore = syntaxTree(context.state).resolveInner(context.pos, -1)
    // let prevSibling = nodeBefore.prevSibling
    // if (prevSibling !== null && prevSibling.type.name == "Internal") {
    //     return [{label: "NotInternal", type: "string"}]
    // }
    // return [
    //     {
    //         label: "Internal",
    //         type: "string"
    //     }
    // ]
}

const UseAutocomplete = () => {
    return useCallback(async (context: CompletionContext) => {
        let nodeBefore = syntaxTree(context.state).topNode
        // let parent = nodeBefore.parent
        console.log(nodeBefore.toString())
        return null
        // const tagOptions = customFiltering(context);

        // if (parent === null) {
        //     return null
        // }
        
        // if (parent.name !== "Test") {
        //     return null
        // }

        // let word = context.matchBefore(/\w*/);
        // if (word == null) {
        //     return null
        // }

        // return {
        //     from: word.from,
        //     options: tagOptions
        // }

    }, [])
}

export default UseAutocomplete;