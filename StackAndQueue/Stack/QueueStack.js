// Problem Statement: Implement a Last-In-First-Out (LIFO) stack using a single queue. The implemented stack should support the following operations: push, pop, top, and isEmpty.

// Implement the QueueStack class:

// push(int x): Pushes element x onto the stack.
// pop(): Removes and returns the top element of the stack.
// top(): Returns the top element of the stack without removing it.
// isEmpty(): Returns true if the stack is empty, false otherwise.

class QueueStack {
    constructor() {
        this.q = [];
    }

    push(x){
        let s = this.q.length;
        this.q.push(x);

        for(let i = 0; i<s; i++){
            this.q.push(this.q.shift());
        }
    }

    pop(){
        let n = this.q[0];
        this.q.shift();
        return n;
    }

    top(){
        return this.q[0];
    }

    isEmpty(){
        return this.q.length === 0;
    }
}

const st = new QueueStack();

const commands = [ "push", "push", "pop", "top", "isEmpty"];
const inputs = [ [4], [8], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    switch (commands[i]) {
        case "push":
            st.push(inputs[i][0]);
            console.log("null ");
            break;
        case "pop":
            console.log(st.pop() + " ");
            break;
        case "top":
            console.log(st.top() + " ");
            break;
        case "isEmpty":
            console.log(st.isEmpty() ? "true " : "false ");
            break;
        case "QueueStack":
            console.log("null ");
            break;
    }
}