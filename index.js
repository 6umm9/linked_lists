import { LinkedList } from './linkedList.js';

const list = new LinkedList();

console.log("Adding 'test1' using append");
list.append("test1");
console.log(list.toString());

console.log("Adding 'test2' using append");
list.append("test2");
console.log(list.toString());

console.log("Adding 'test3' using prepend");
list.prepend("test3");
console.log(list.toString());

console.log("Full list structure:");
console.log(JSON.stringify(list, null, 2));
