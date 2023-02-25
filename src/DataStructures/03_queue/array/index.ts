class ArrayQueue {
	static _SIZE = 1000;
	list: Float32Array;
	_front: number = 0;
	_rear: number = -1;
	count: number = 0;
	constructor(public size = ArrayQueue._SIZE) {
		this.list = new Float32Array(size);
	}

	/** 큐에 데이터 삽입 */
	enqueue(data: number) {
		if (this.count === this.size) {
			throw new Error('큐가 가득 찼습니다 (Queue Overflow)');
		}

		this.list[++this._rear] = data;
		this.count++;
	}

	/** 큐에서 데이터 제거 */
	dequeue() {
		if (this.count === 0) {
			// console.error('큐가 비어있습니다 (Queue Underflow)');
			return null;
		}

		this.count--;
		return this.list[this._front++];
	}

	/** 큐의 프론트 데이터 출력 */
	front() {
		return this.list[this._front];
	}

	/** 큐의 레어 데이터 출력 */
	rear() {
		return this.list[this._rear];
	}

	/** 큐가 비어있는지 확인 */
	isEmpty() {
		return this.count === 0;
	}
}

export { ArrayQueue };
