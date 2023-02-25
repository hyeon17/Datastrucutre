import { DoubleLinkedList } from '../../01_DoubleLinkedList';

class LinkedListQueue {
	constructor() {
		this.list = new DoubleLinkedList();
	}

	/** 큐에 데이터 삽입 */
	enqueue(data) {
		this.list.insertAt(0, data);
	}

	/** 큐에서 데이터 제거 */
	dequeue() {
		try {
			return this.list.deleteLast();
		} catch (error) {
			return null;
		}
	}

	/** 큐의 프론트 데이터 출력 */
	front() {
		return this.list.tail;
	}

	/** 큐의 레어 데이터 출력 */
	rear() {
		return this.list.head;
	}

	/** 큐가 비어있는지 확인 */
	isEmpty() {
		return this.list.count === 0;
	}
}

export { LinkedListQueue };
