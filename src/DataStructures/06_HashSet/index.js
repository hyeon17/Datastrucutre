import { HashTable } from '../05_HashTable';

class HashSet {
	constructor() {
		this.hashTable = new HashTable();
	}

	add(data) {
		if (this.hashTable.get(data) === null) {
			this.hashTable.set(data, data);
		}
	}

	isContain(data) {
		return this.hashTable.get(data) !== null;
	}

	remove(data) {
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
