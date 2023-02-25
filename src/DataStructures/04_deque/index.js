import { DoubleLinkedList } from '../01_DoubleLinkedList';

class Deque {
	constructor() {
		this.list = new DoubleLinkedList();
	}

	/** 모든 데이터 출력 */
	printAll() {
		this.list.printAll();
	}

	/** 헤드에 데이터 삽입 */
	addFirst(data) {
		this.list.insertAt(0, data);
	}

	/** head에 데이터 제거 */
	removeFirst() {
		this.list.deleteAt(0);
	}

	/** tail에 데이터 삽입 */
	addLast(data) {
		this.list.insertLast(data);
	}

	/** tail에 데이터 제거 */
	removeLast() {
		this.list.deleteLast();
	}

	/** 리스트가 비었는지 체크 */
	isEmpty() {
		return this.list.count === 0;
	}
}

export { Deque };
