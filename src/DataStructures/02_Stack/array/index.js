class ArrayStack {
	// static SIZE = 1000;
	constructor(size = 1000) {
		this.stack = new Float32Array(size);
		this.top = -1;
		this.size = size;
	}

	push(data) {
		if (typeof data !== 'number') {
			throw new Error('숫자를 입력해주세요');
		}

		if (this.top === this.size - 1) {
			throw new Error('스택이 가득 찼습니다 (Stack Overflow) \n');
		}

		this.stack[++this.top] = data;
	}

	pop() {
		if (this.top === -1) {
			console.error('스택이 비어있습니다 (Stack Underflow)');
			return null;
		}

		return this.stack[this.top--];
	}

	peek() {
		return this.stack[this.top];
	}

	isEmpty() {
		return this.top < 0;
	}
}

export { ArrayStack };
