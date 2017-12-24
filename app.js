'use strict';


// n番目のフィボナッチ数を求める
// フィボナッチ数列
// 0,1,1,2,3,5,8,13,21,34,55...
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}