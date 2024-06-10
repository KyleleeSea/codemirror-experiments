import {parser} from "./domain.js"
import {testTree} from "@lezer/generator/test"

function test(input, expected) {
    let tree = parser.parse(input)
    testTree(tree, expected)
}

// Empty Program
test("", "Program()")

let tree = parser.parse(`-- comments
type Set -- inline comments\r
-- type Point
predicate From(Map f, Set domain, Set codomain)\r\n
/* Multi-line comments
type ParametrizedSet ('T, 'U)
predicate From(Map f, Set domain, Set codomain)
*/
predicate From(Map f, Set domain, Set codomain)`)

console.log(tree.toString())

// let spec = `Script(FunctionDeclaration(
//   function,
//   Identifier,
//   ParamList(Identifier),
//   Block(
//     ReturnStatement(
//       return,
//       BinaryExpression(Identifier, ArithOp, Number)))))`
// testTree(tree, spec)