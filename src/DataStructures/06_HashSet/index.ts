import { HashTable } from '../05_HashTable';

class HashSet<T = number> {
	hashTable: HashTable<T, T>;
	constructor() {
		this.hashTable = new HashTable<T, T>();
	}

	add(data: T) {
		if (this.hashTable.get(data) === null) {
			this.hashTable.set(data, data);
		}
	}

	isContain(data: T) {
		return this.hashTable.get(data) !== null;
	}

	remove(data: T) {
		this.hashTable.remove(data);
	}

	clear() {
		for (let i = 0; i < this.hashTable.arr.length; i++) {
			this.hashTable.arr[i].clear();
		}
	}

	isEmpty() {
		for (let i = 0; i < this.hashTable.arr.length; i++) {
			if (this.hashTable.arr[i].count > 0) {
				return false;
			}
		}
		return true;
	}

	printAll() {
		for (let i = 0; i < this.hashTable.arr.length; i++) {
			let currentNode = this.hashTable.arr[i].head;

			while (currentNode !== null) {
				console.log(currentNode.data.key);
				currentNode = currentNode.next;
			}
		}
	}
}

export { HashSet };
