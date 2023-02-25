type DataType = string | number;
class Node<T = DataType> {
	prev: Node<T> | null;
	next: Node<T> | null;
	constructor(public data: T, next = null, prev = null) {
		this.prev = prev;
		this.next = next;
	}
}

class DoubleLinkedList<T = DataType> {
	/** Head Node */
	head: Node<T> | null = null;
	/** Tail Node */
	tail: Node<T> | null = null;
	/** 연결리스트 길이 */
	count: number = 0;

	/**
	 * 모든 데이터 출력
	 *
	 * 1. currentNode에 head를 할당
	 * 2. currentNode가 null이 아닐 때까지 반복
	 * 3. currentNode의 data를 출력
	 * 4. currentNode에 currentNode의 next를 할당
	 * 5. 마지막에 text에 ']'를 추가
	 * 6. text를 출력
	 *
	 */
	printAll() {
		let currentNode = this.head;
		let text = '[';

		while (currentNode !== null) {
			text += currentNode.data;
			currentNode = currentNode.next;

			if (currentNode !== null) {
				text += ',';
			}
		}

		text += ']';
		console.log(text);
	}

	/**
	 *
	 * 모든 데이터 제거
	 *
	 * 연결리스트의 상태를 초기화 해준다.
	 *
	 */
	clear() {
		this.head = null;
		this.tail = null;
		this.count = 0;
	}

	/**
	 *
	 * @param {number} index
	 * @param {} msg
	 *
	 * 유효성 검사
	 *
	 * index가 0보다 작거나 count보다 크면 에러를 발생시킨다.
	 *
	 */
	private _validation(index: number, msg = '범위를 벗어났습니다.') {
		if (index > this.count || index < 0) {
			throw new Error(msg);
		}
	}

	/**
	 *
	 * 원하는 인덱스에 노드 삽입
	 *
	 * case A. 삽입 위치가 Head일 떄
	 *
	 * case B. 삽입 위치가 Tail일 때
	 *
	 * case C. index가 count - 1일 때
	 *
	 */
	insertAt(index: number, data: T) {
		this._validation(index);

		const newNode = new Node(data);

		if (index === 0) {
			// 헤드가 없다면 tail도 설정될거임.
			newNode.next = this.head;
			// head에 삽입하는 경우
			if (this.head !== null) {
				this.head.prev = newNode;
			}
			this.head = newNode;
		} else if (index === this.count) {
			// tail에 삽입하는 경우
			newNode.next = null;
			newNode.prev = this.tail;
			if (!!this.tail) {
				this.tail.next = newNode;
			}
		} else {
			// 처음도 마지막이 아닌 중간 위치에 삽입하고자 하는 경우

			let currentNode = this.head;

			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode?.next || null;
			}

			newNode.next = currentNode?.next || null;
			newNode.prev = currentNode;

			if (currentNode) {
				currentNode.next = newNode;
				currentNode.next.prev = newNode;
			}
		}

		// 새로운 노드의 다음이 없다. -> 마지막이거나, 처음이자 마지막이거나
		if (newNode.next === null) {
			this.tail = newNode;
		}

		this.count++;
	}

	/**
	 *
	 * 연결리스트 마지막에 노드 삽입
	 *
	 * insertAt 메서드를 사용하여 마지막에 노드를 삽입한다.
	 *
	 */
	insertLast(data: T) {
		this.insertAt(this.count, data);
	}

	deleteAt(index: number) {
		this._validation(index, '제거할 수 없습니다.');
		let currentNode = this.head;
		if (index === 0) {
			let deletedNode = this.head;
			if (this.head?.next == null) {
				// 데이터가 1개일 때
				this.head = null;
				this.tail = null;
			} else {
				// 데이터가 2개 이상일 때
				this.head = this.head.next;
				// 연결을 끊어준다 (head는 이전 노드가 없기때문에)
				this.head.prev = null;
			}

			this.count--;
			return deletedNode;
		} else if (index === this.count) {
			let deletedNode = this.tail;
			if (!!this.tail && this.tail.prev) {
				this.tail.prev.next = null;
			}
			this.tail = this.tail?.prev || null;

			this.count--;
			return deletedNode;
		} else {
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode?.next || null;
			}

			let deletedNode = currentNode?.next || null;

			if (!!currentNode) {
				currentNode.next =
					currentNode.next !== null ? currentNode.next.next : null;

				if (currentNode.next !== null) {
					currentNode.next.prev = currentNode;
				}
			}

			this.count--;
			return deletedNode;
		}
	}

	/**
	 *
	 * 마지막 삭제
	 *
	 * deleteAt 메서드를 사용하여 마지막 노드를 삭제한다.
	 *
	 */
	deleteLast() {
		return this.deleteAt(this.count - 1);
	}

	/**
	 *
	 * 인덱스 참조
	 *
	 * 1. index 유효성 검증
	 * 2. 삭제하려는 index까지 이동
	 *
	 */
	getNodeAt(index: number) {
		this._validation(index);

		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode?.next || null;
		}

		return currentNode;
	}
}

export { Node, DoubleLinkedList };
