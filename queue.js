/** Using arrays as queues directly */

const queue = new Array(); // Declare a queue

// Queue operations: Enqueue and Dequeue
q.push(20); // Enqueue
q.push(40);
console.log(q.shift()); // Dequeue and print
console.log(q);


/** Traditional Queue implementaion in JS */

function Queue(max_capacity) {
    
    let front =-1, rear=-1;
    const MAX_CAPACITY = max_capacity;
    let queue = new Array();

    // ISEMPTY: Returns true if the queue is empty
    this.isEmpty = () => {
        if(front < 0) {
            console.log('Empty Queue');
            return true;
        } else {
            return false;
        }
    }

    // ISFULL: Returns true if the queue has reached max capacity
    this.isFull = () => {
        if(rear+1 >= MAX_CAPACITY) {
            console.log('Full Queue');
            return true;
        } else {
            return false;
        }
    }

    // ENQUEUE: Inserts an element at the rear end
    this.enqueue = (element) => {

        if(this.isFull()) return;
        queue.push(element);
        rear++;
        if(this.isEmpty()) front++; // Increment front pointer if first element
        console.log(element, "is equeued!");
    }

    // DEQUEUE: Removes and returns from the front
    this.dequeue = () => {
        if(this.isEmpty()) return;

        const element = queue.shift();

            if(front === rear) {
                front = rear = -1; // If last element: Re-intialize front and rear pointers
            } else {
                front++;
            }

            console.log(element, "is dequeued!");

            return element;

    }

    // Returns undefined if the queue is empty
    this.front = () => queue[front]; // Returns the front element
    this.rear = () => queue[rear]; // Returns the last element
}

let q = new Queue(2);
q.dequeue();
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.isEmpty();
q.isFull();
console.log(q.rear(), "Rear element");
console.log(q.front(), "Front element");
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q.rear(), "Rear element");
console.log(q.front(), "Front element");






