//Problem Statement: Implement a Last-In-First-Out (LIFO) stack using an array. The implemented stack should support the following operations: push, pop, peek, and isEmpty.

// Implement the ArrayStack class:

// void push(int x): Pushes element x onto the stack. int pop(): Removes and returns the top element of the stack. int top(): Returns the top element of the stack without removing it. boolean isEmpty(): Returns true if the stack is empty, false otherwise.

//Initializing an array of some fixed size

class ArrayStack {
    constructor(size = 1000){
        this.stackArray = new Array(size);
        this.capacity = size;
        this.topIndex = -1;
    }

    push(x) {
        if(this.topIndex >= this.capacity - 1){
            console.log('Stack overflow');
            return;
        }
        this.stackArray[++this.topIndex] = x;
    }

    pop(){
        if(this.isEmpth()){
            console.log('Stack Empty');
            return;
        }
        return this.stackArray[this.topIndex--];
    }

    top(){
        if(this.isEmpth()){
            console.log('Stack is empty');
            return;
        }
        return this.stackArray[this.topIndex];
    }

    isEmpth(){
        return this.topIndex === -1;
    }
}

const stack = new ArrayStack();
const commands = ['ArrayStack', 'push', 'push','push', 'push', 'top', 'pop', 'isEmpty'];
const inputs = [[], [5], [10], [20], [50], []];

for(let i = 0; i < commands.length; i++){
    switch(commands[i]){
        case 'push':
            stack.push(inputs[i][0]);
            console.log(inputs[i][0]);
            break;
        case 'pop': 
            console.log(stack.pop());
            break;
        case 'top':
            console.log(stack.top());
            break;
        case 'isEmpty':
            console.log(stack.isEmpth() ? 'true' : 'false')
            break;
        case 'ArrayStack':
            console.log('null');
            break;
    }
}

// Time Complexity: O(1) for all operations (push, pop, top, isEmpty).

// Space Complexity: O(N), where N is the maximum capacity of the stack, as we are using an array to store the elements.