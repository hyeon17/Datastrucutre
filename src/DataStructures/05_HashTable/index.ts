import { DoubleLinkedList } from '../01_DoubleLinkedList';

type DataType = string | number;

class HashData<K = number, T = DataType> {
	constructor(public key: K, public value: T) {}
}

class HashTable<K = number, T = DataType> {
	arr: DoubleLinkedList<HashData<K, T>>[];
	constructor() {
		this.arr = [];
		for (let i = 0; i < 10; i++) {
			this.arr[i] = new DoubleLinkedList<HashData<K, T>>();
		}
	}

	private _hashFunction(key: K) {
		if (typeof key === 'number') {
			return key % 10;
		}
		return key.toString().length % 10;
	}

	set(key: K, value: T) {
		const hashData: HashData<K, T> = new HashData<K, T>(key, value);
		this.arr[this._hashFunction(key)].insertAt(0, hashData);
	}

	get(key: K) {
		let currentNode = this.arr[this._hashFunction(key)].head;

		while (currentNode !== null) {
			if (currentNode.data.key === key) {
				return currentNode.data.value;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	remove(key: K) {
		let list = this.arr[this._hashFunction(key)];
		let currentNode = list.head;
		let deletedIndex = 0;

		while (currentNode !== null) {
			if (currentNode.data.key === key) {
				return list.deleteAt(deletedIndex);
			}
			deletedIndex++;
			currentNode = currentNode.next;
		}

		return null;
	}
}

export { HashTable };
