import { DoubleLinkedList } from '../01_DoubleLinkedList';

type DataType = string | number;

class Deque<T = DataType> {
	list: DoubleLinkedList<T>;
	constructor() {
		this.list = new DoubleLinkedList<T>();
	}

	/** 모든 데이터 출력 */
	printAll() {
		this.list.printAll();
	}

	/** 헤드에 데이터 삽입 */
	addFirst(data: T) {
		this.list.insertAt(0, data);
	}

	/** head에 데이터 제거 */
	removeFirst() {
		this.list.deleteAt(0);
	}

	/** tail에 데이터 삽입 */
	addLast(data: T) {
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
