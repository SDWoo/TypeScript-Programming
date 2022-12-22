//연습문제

//1. 타입스크립트는 다음의 값을 어떻게 추론할까?
let a = 1042; // number
let b = 'apples and oranges'; //string
const c = 'pineapples'; // 'pineapples'
let d = [true, true, false]; // boolean[]
let e = { type: 'ficus' }; // {type: string}
let f = [1, false]; // (number | boolean)[]
const g = [3]; // number[]
let h = null; // any

// 2. 다음 코드는 왜 주석에 적힌 에러를 발생시킬까?

// a.
let i: 3 = 3;
// i = 4;
// => 3타입에 4를 할당하려 해서

// b.
let j = [1, 2, 3];
j.push(4);
// j.push('5');
// => number[] 타입에 문자열을 넣으려 해서

// c.
// let k: never = 4;
// => never 타입엔 반환 값이 없어야 한다.

// d.
let l: unknown = 4;
// let m = l * 2;
// unknown을 명시적으로 표시 안해주고 사용해서
// 이런식으로 사용
// if (typeof l === 'number') {
//   let n = l * 2;
// }
