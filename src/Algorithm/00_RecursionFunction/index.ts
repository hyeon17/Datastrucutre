type Datatype = string | number
console.debug("example(1) 재귀 함수");
// 함수안에서 자기 자신을 참조하여 만들었다.
class fun : Datatype(number : number) {
  console.log(number);
  fun(number + 1);
}
fun(1);

function up(number) {
  for (let i = 0; i > 10; i++) {
    console.log(i);
  }
}

console.debug("example(2) 재귀함수의 기저조건");
// 10보다 크면 종료라는 기저조건을 명시함으로서 종료된다.
function func(number) {
  if (number > 10) return;
  console.log(number);
  func(number + 1);
}
func(1);

// console.debug("example(3) 콜스택");
// function fun1() {
//   function fun2() {
//     function fun3() {
//       function fun4() {}
//     }
//   }
// }

// fun1();
// fun2();
// fun3();
// fun4();
