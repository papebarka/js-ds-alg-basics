class Stack {
    constructor(){
        this.stack = []
    }

    pop(){
        return this.stack.pop()
    }

    push(item){
        return this.stack.push(item)
    }

    peek(){
        if (this.isEmpty()) return this.stack
        return this.stack[this.length() - 1]
    }

    isEmpty(){
        return this.length() === 0
    }

    length(){
        return this.stack.length
    }

}

module.exports = Stack