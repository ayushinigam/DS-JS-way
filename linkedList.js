/** Node: Constructor for defining a basic node with data and next node */
function Node (data) {
    this.data = data;
    this.next = null;
}

/** LinkedList: Constructor for defining a linked list with basic operations */
function LinkedList () {

    this.head = null; // Maintains the head of the linked list

    // Inserts an element at the end of the linked list
    this.insert = (data) => {

        // Create a node with data
        const node = new Node(data);

        if(this.head) {
            let tempNode = this.head;
            while(tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        } else {
            this.head = node;
        }

    }

    // Deletes an element 
    this.delete = (data) => {
        let prevNode = null;
        let tempNode = this.head;

        while(tempNode) {
            if(tempNode.data === data) {
                if(prevNode) {
                    prevNode.next = tempNode.next;
                } else {
                    this.head = tempNode.next;
                }
                delete tempNode;
            }
            prevNode = tempNode;
            tempNode = tempNode.next;
        }
    }

    // Print: Recursively prints a linked list
    this.print = (tempNode = this.head) => {

        console.log('Data:', tempNode.data, " Next:", tempNode.next);

        tempNode.next && this.print(tempNode.next);
        return;
    }


    // Print: logs all nodes of a linked list
    // this.print = () => {
    //     let temp = this.head;
    //     while(temp.next) {
    //         console.log('Data:', temp.data, " Next:", temp.next);
    //         temp = temp.next;
    //     }
    // }
}

const l = new LinkedList();
l.insert(20);
l.insert(30);
l.insert(40);
l.delete(40);
l.print();
