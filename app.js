'use strict';

// アルゴリズム改善のためメモ化する
// n番目,n番目のフィボナッチ数
// という連想配列を作る
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

// n番目のフィボナッチ数を求める
// フィボナッチ数列
// 0,1,1,2,3,5,8,13,21,34,55...
function fib(n) {
    // has:連想配列memoにnという値があればtrue
    if (memo.has(n)) {
        return memo.get(n);
    }
    let value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}