import { DoubleLinkedList } from '.';

export function DoubleLinkedListTest() {
	// let node1 = new Node(1);
	// let node2 = new Node(2);
	// let node3 = new Node(3);

	let list = new DoubleLinkedList();

	console.log('===== insertAt() 다섯 본 호출 =====');
	list.insertAt(0, 1);
	list.insertAt(1, 2);
	list.insertAt(2, 3);
	list.insertAt(3, 4);
	list.insertAt(4, 5);

	list.printAll();

	console.log('===== clear() 호출 =====');
	list.clear();
	list.printAll();

	console.log('===== insertLast() 세번 호출 =====');
	list.insertLast(0);
	list.insertLast(1);
	list.insertLast(2);
	list.printAll();

	console.log('===== deleteAt() 호출 =====');
	list.deleteAt(0);
	list.printAll();
	list.deleteAt(1);
	list.printAll();

	console.log('===== deleteLast() 호출 =====');
	list.insertLast(5);
	list.deleteLast();
	list.deleteLast();
	list.printAll();

	console.log('===== getNodeAt() 호출 =====');
	list.insertLast(1);
	list.insertLast(2);
	list.insertLast(3);
	list.insertLast(4);
	list.insertLast(5);

	let secondNode = list.getNodeAt(2);
	console.log(secondNode);
}
