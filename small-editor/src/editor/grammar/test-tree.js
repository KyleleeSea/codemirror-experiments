import {parser} from './simplegrammar.js';
import { printTree } from "@lezer-unofficial/printer"

const sourceBroken = `Test {
    Internal

    Test {
    Internal
    }
    
    Increment {
        test
    }`

const source = `Test {
    Internal
    Internal
    Increment
    }
`

const tree = parser.parse(source)

console.log(printTree(tree, source))
