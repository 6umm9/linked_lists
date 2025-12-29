import { Node } from './node.js';

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        if (!this.headNode) return undefined;
        return this.headNode.value;
    }

    tail() {
        if (!this.headNode) return undefined;
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current.value;
    }

    at(index) {
        if (!this.headNode) return undefined;
        let current = this.headNode;
        let count = 0;
        while (current) {
            if (count === index) return current.value;
            count++;
            current = current.nextNode;
        }
        return undefined;
    }

    pop() {
        if (!this.headNode) return undefined;
        const value = this.headNode.value;
        this.headNode = this.headNode.nextNode;
        return value;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            index++;
            current = current.nextNode;
        }
        return -1;
    }

    toString() {
        if (!this.headNode) return '';
        let current = this.headNode;
        let string = '';
        while (current) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        string += 'null';
        return string;
    }
}
