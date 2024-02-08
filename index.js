#!/usr/bin/env node

//Factory functions for rstoring node and a full linked list.
function LinkedList(headNode = null) {
    return {
        headNode: headNode,

        append(value) {
            let node = new Node(value);

            if(!headNode) {
                headNode = node;
                return headNode;
            }

            let currentNode = headNode;
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }

            return currentNode.nextNode = node;

        },

        prepend(value) {
            let node = new Node(value, headNode);

            headNode = node;
            return headNode
        },

        size() {
            let listSize = 0;

            if(headNode) {
                listSize++
                let currentNode = headNode;
                while(currentNode.nextNode) {
                    listSize++;
                    currentNode = currentNode.nextNode;
                }
            }

            return listSize;
        },

        head() {
            if(headNode) {
                return headNode;
            }

            return "headNode is null";
        },

        tail() {
            if(headNode) {
                let currentNode = headNode;
                while(currentNode.nextNode) {
                    currentNode = currentNode.nextNode;
                }

                return currentNode
            }

            return "headNode is null"
        },

        at(index) {
            if (list.size() < index || index <= 0) return null;

            let nodeCount = 1;
            let currentNode = headNode;
            for(let i = 0; i <= index; i++) {
                if(nodeCount === index) return currentNode;
                nodeCount++;
                currentNode = currentNode.nextNode
            }
        },

        pop() {
            let currentNode = headNode;

            if(currentNode.nextNode === null) {headNode = null};
            while(currentNode.nextNode && (currentNode.nextNode).nextNode) {
                currentNode = currentNode.nextNode
            }
            return currentNode.nextNode = null;
        },

        contains(value) {
            let currentNode = headNode;
            while(currentNode) {
                if(currentNode.value === value) return true;
                currentNode = currentNode.nextNode;
            }

            return "Does not contain the said value"
        },

        find(value) {
            if(headNode) {
                let indexValue = 0;
                let currentNode = headNode;
                while(currentNode) {
                    indexValue++;
                    if(value === currentNode.value) {return indexValue};
                    currentNode = currentNode.nextNode;
                }
            }

            return null
        },

        toString() {
            if(!headNode) return "list is empty";
            
            let currentNode = headNode;
            let result = ` `;
            while(currentNode) {
                result += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            }

            result += "Null";
            return result;
        },

        insertAt(value, index) {
            if(!headNode || index <= 0) return "sorry, no can do";

            if(index === 1) {
                return list.prepend(value)
            }

            let currentNode = headNode;
            let previousNode = null;
            for(let i = 1; i < index; i++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                if(currentNode == null) break;
            }
            let node = new Node(value)
            previousNode.nextNode = node;
            node.nextNode = currentNode;
        },

        removeAt(index) {
            if(!headNode || index <= 0 || index > list.size()) return "sorry, no can do";

            if(index === list.size()) {return list.pop()};

            let currentNode = headNode;
            let previousNode = null;
            for(let i = 1; i < index; i++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                if(currentNode == null) break;
            }
            previousNode.nextNode = currentNode.nextNode;
        }
    }
}

function Node(value = null, nextNode = null) {
    return {
        value: value,
        nextNode: nextNode
    }
}

//functions for linked lists.
//1. Append function for appending a new node at the last of the linked list with a value.


let list = new LinkedList();

list.append(1)
list.append(2)
list.pop();
list.append(3);
list.prepend(2);
console.log(list.at(2))
console.log(list.contains(2))
console.log(list.find(2))
console.log(list.toString())
list.insertAt(5,5)
console.log(list.toString())
console.log(list.removeAt(2))
console.log(list.toString())