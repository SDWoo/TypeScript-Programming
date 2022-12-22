"use strict";
// 밑의 예제와 같이 받고 싶은 타입과 다른 타입이 들어오면 유효하지 않은 작업을 수행한다.
function squareOf(n) {
    console.log(n * n);
}
squareOf(2); // 4로 평가
squareOf('z'); // NaN으로 평가
// 매개변수에 타입을 지정해주자!
function squareOf2(n) {
    console.log(n * n);
}
squareOf(2);
squareOf('z'); // 에러가 남
//# sourceMappingURL=index.js.map