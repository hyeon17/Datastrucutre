type DataType = string | number;
class Node<T> {
	constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T = DataType> {
	/** Head Node */
	head: Node<T> | null = null;
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

			// 마지막 노드인지 확인
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
	 * 원하는 인덱스에 노드 삽입
	 *
	 * newNode 변수에 Node 생성자 인수에 data를 넣어서 할당
	 *
	 * case A. index가 0일 때
	 * 1. 새로운 노드의 next에 head를 넣어준다.
	 * 2. head에 새로운 노드를 넣어준다.
	 *
	 * case B. index가 0이 아닐 때
	 * 1. currentNode를 head로 초기화
	 * 2. for문을 통해 삽입하려는 곳의 이전 노드까지 이동
	 * 3. newNode의 next를 currentNode(삽입 하려는 인덱스 바로 이전)의 next(삽입하려했던 인덱스)로 설정
	 * 4. currentNode의 next를 newNode로 설정
	 *
	 * 정상적으로 동작 확인되어 count++
	 *
	 */
	insertAt(index: number, data: T) {
		this._validation(index);

		let newNode = new Node(data);

		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let currentNode = this.head; // 현재 노드에 head를 할당

			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode?.next || null;
			}

			newNode.next = currentNode?.next || null;
			if (currentNode) currentNode.next = newNode;
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

	/**
	 *
	 * 인덱스 삭제
	 *
	 * index 유효성 검증
	 *
	 * case A. index가 0일 때
	 * 1. head에 head의 next를 할당
	 * 2. head의 next를 null로 설정
	 *
	 * case B. index가 0이 아닐 때
	 * 1. 삭제하려는 인덱스의 이전까지 이동
	 * 2. 삭제하려는 인덱스의 next를 삭제하려는 인덱스의 이전 노드의 next에 할당
	 *
	 * 삭제되었으니 카운트 감소
	 */
	deleteAt(index: number) {
		this._validation(index, '제거할 수 없습니다.');

		let currentNode = this.head;

		if (index === 0) {
			let deleteNode = this.head;
			this.head = this.head?.next || null;
			this.count--;
			return deleteNode;
		} else {
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode?.next || null;
			}

			let deleteNode = currentNode?.next || null;
			if (currentNode) {
				currentNode.next = currentNode.next?.next || null;
			}

			this.count--;
			return deleteNode;
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

export { Node, LinkedList };
