'use strict';
// function fib(n){
    // console.log(n + "のフィボナッチ数は××です");
// }
// for(let i = 1; i <= 40; i++){
//     fib(i);
// }
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value =  fib(n - 1) + fib(n - 2);
    memo.set(n,value);
    return value;
}
const length = 40;
for(let i = 0; i <= length; i++){
    console.log(i + "のフィボナッチ数は" + fib(i) + "です");
}