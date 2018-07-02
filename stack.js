/** Using Arrays as stack directly */
let stack = new Array(); // Declare a stack

// Add elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Remove the top most element
console.log(s1.pop());




/** Traditional stack implementation */

function Stack(maxElement) {

    let top = -1;
    let stack = new Array();
    const MAX_ELE= maxElement;

    // PUSH: Add an element to the top of an array
    this.push = (val) => {
        
        // Check for overflow condition
        if(top+1 >= MAX_ELE) {
            console.log('Stack OverFlow');
            return;
        }

        stack.push(val);
        top++;
        console.log(val, "is successfully pushed");
    }

    //POP: Remove and return the top most element
    this.pop = () => {

        // Check for underflow condition
        if(this.isEmpty()) return; 

        let val = stack.pop();
        top--;
        console.log(val, "is successfully poped");
        return val;
    }

    // ISEMPTY: Checks if underflow is met
    this.isEmpty = () => {
        if(top < 0) {
            console.log("Stack underflow");
            return true;
        } else {
            return false;
        }
    }

    // PEEK: Returns the topmost element
    this.peek = () => {
        console.log("Peek:", stack[top]);
        return stack[top];
    }

}

const s = new Stack(2);
s.isEmpty();

s.push(15);
s.push(10);
s.push(20);

s.isEmpty();
s.peek();

s.pop();
s.pop();
s.pop();

s.isEmpty();

s.push(35);

s.isEmpty();


