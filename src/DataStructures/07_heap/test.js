import { Heap } from ".";
export function HeapTest() {
  let heap = new Heap();
  console.log(`========= 데이터 삽입 ==========`);
  heap.heappush(1);
  heap.heappush(123);
  heap.heappush(1213);
  heap.heappush(920);
  heap.heappush(46);

  console.log(`========= 데이터 제거 ==========`);
  heap.heappop(46);
}
