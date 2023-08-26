class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value){
        const newNode = new Node(value)
        if (isEmpty()){
            this.head = this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop(){
        if (this.isEmpty) return null
        if (this.length === 1) {
            const nodeToRemove = this.head
            this.head = this.tail = null
            this.length--
            return nodeToRemove
        }
        this.tail = null

    }

    get(index){

    }

    delete(index){

    }

    isEmpty(){
        return this.length === 0
    }
}