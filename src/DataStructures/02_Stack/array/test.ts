import { ArrayStack } from '.';

export function ArrayStackTest() {
	let arrayStack = new ArrayStack();

	console.log('===== 첫 번째 출력 =====');
	arrayStack.push(1);
	arrayStack.push(2);
	arrayStack.push(3);
	arrayStack.push(4);

	console.log(arrayStack.pop());
	console.log(arrayStack.pop());
	console.log(arrayStack.pop());
	console.log(arrayStack.pop());

	console.log('===== 두 번째 출력 =====');
	arrayStack.push(1);
	arrayStack.push(2);
	arrayStack.push(3);
	arrayStack.push(4);
	console.log(arrayStack.peek());
	arrayStack.pop();
	console.log(arrayStack.peek());
	arrayStack.pop();
	console.log(`isEmpty: ${arrayStack.isEmpty()}`);
	console.log(arrayStack.peek());
	arrayStack.pop();
	console.log(arrayStack.peek());
	arrayStack.pop();
	console.log(`isEmpty: ${arrayStack.isEmpty()}`);
	console.log(arrayStack.pop());
}
