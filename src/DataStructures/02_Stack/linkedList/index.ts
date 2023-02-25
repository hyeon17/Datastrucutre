import { LinkedList } from '../../00_LinkedList/index';

type DataType = string | number;
class Stack<T = DataType> {
	list: LinkedList<T>;
	constructor() {
		this.list = new LinkedList<T>();
	}

	push(data: T) {
		this.list.insertAt(0, data);
	}

	pop() {
		try {
			return this.list.deleteAt(0);
		} catch (error) {
			return null;
		}
	}

	peek() {
		return this.list.getNodeAt(0);
	}

	isEmpty() {
		return this.list.count === 0;
	}
}

export { Stack };
