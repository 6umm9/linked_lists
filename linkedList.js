import { Node } from './node.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        string += 'null';
        return string;
    }
}
