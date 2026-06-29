// Problem Statement: Implement a First-In-First-Out (FIFO) queue using an array. The implemented queue should support the following operations: push, dequeue, pop, and isEmpty.

// Implement the ArrayQueue class:

// void push(int x): Adds element x to the end of the queue.
// int pop(): Removes and returns the front element of the queue.
// int peek(): Returns the front element of the queue without removing it.
// boolean isEmpty(): Returns true if the queue is empty, false otherwise.

class Queue{
    constructor(){
        this.arr = new Array(10);
        this.start = -1;
        this.end = -1;
        this.currentSize = 0;
        this.maxSize = 10;
    }

    push(x){
        if(this.currentSize === this.maxSize){
            console.log('Queue is full');
            return;
        }
        if(this.end === -1){
            this.start = 0;
            this.end = 0;
        }
        else{
            this.end = (this.end + 1) % this.maxSize;
        }
        this.arr[this.end] = x;
        this.currentSize++;
    }

    pop(){
        if (this.start === -1) {
            console.log("Queue Empty\nExiting...");
            process.exit(1);
        }
        let popped = this.arr[this.start];
        if (this.currentSize === 1){
            this.start = -1;
            this.end = -1;
        }
        else {
            this.start = (this.start + 1) % this.maxSize;
        }
        this.currentSize--;
        return popped;
    }

    peek(){
        if(this.start === -1){
            console.log('Queue is empty');
            process.exit(1);
        }
        return this.arr[this.start];
    }

    isEmpty() {
        return this.currSize === 0;
    }
}
const queue = new Queue();
const commands = ["ArrayQueue", "push", "push", "peek", "pop", "isEmpty"];
const inputs = [[], [5], [10], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === "push") {
        queue.push(inputs[i][0]);
        console.log("null ");
    } else if (commands[i] === "pop") {
        console.log(queue.pop() + " ");
    } else if (commands[i] === "peek") {
        console.log(queue.peek() + " ");
    } else if (commands[i] === "isEmpty") {
        console.log(queue.isEmpty() ? "true " : "false ");
    } else if (commands[i] === "ArrayQueue") {
        console.log("null ");
    }
}
