class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(item){
        return this.queue.push(item)
    }

    dequeue(){
        return this.queue.shift()
    }


    peek(){
        if (this.isEmpty()) return "Empty queue"
        return this.queue[0]
    }

    isEmpty(){
        return this.length() === 0
    }

    get length(){
        return this.queue.length
    }
}

module.exports = Queue