const Stack = require('./ds/stack')

stack = new Stack()

console.log(`Empty stack: ${stack.isEmpty()? 'YES' : 'NO'}`)
console.log(`Stack initial length is: ${stack.length()}`)

stack.push(10)

stack.push('last')

console.log(`Stack length is: ${stack.length()}`)
console.log(`Empty stack: ${stack.isEmpty()? 'YES' : 'NO'}`)
console.log(`Last element: ${stack.peek()}`)