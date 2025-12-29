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

console.log("Checking size...");
console.log(`Size: ${list.size()}`);

console.log("Checking head value...");
console.log(`Head value: ${list.head()}`);

console.log("Checking tail value...");
console.log(`Tail value: ${list.tail()}`);

console.log("Checking at(0): " + list.at(0));
console.log("Checking at(1): " + list.at(1));
console.log("Checking at(2): " + list.at(2));
console.log("Checking at(5) (out of bounds): " + list.at(5));

console.log("Checking contains('test1'): " + list.contains('test1'));
console.log("Checking contains('test_fake'): " + list.contains('test_fake'));

console.log("Popping head...");
const popped = list.pop();
console.log("Popped value: " + popped);
console.log("New list structure:");
console.log(list.toString());
console.log("New head value: " + list.head());

console.log("Checking findIndex('test1'): " + list.findIndex('test1'));
console.log("Checking findIndex('test2'): " + list.findIndex('test2'));
console.log("Checking findIndex('non_existent'): " + list.findIndex('non_existent'));

console.log("Emptying list...");
list.pop(); // remove test1
list.pop(); // remove test2
console.log("List size: " + list.size());
console.log("Empty list toString(): '" + list.toString() + "'");
