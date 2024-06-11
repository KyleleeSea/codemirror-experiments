import {parser} from "./domain/domain.js"
import {testTree} from "@lezer/generator/test"

export function testParser(input, expected) {
    let tree = parser.parse(input)
    testTree(tree, expected)
}