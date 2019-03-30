// Fibonacci

// 0 1 1 2 3 5 8 13 21
function fib(n) {
  if (n < 1) {
    return 0;
  }
  
  if (n < 3) {
    return 1;
  }
  
  var curr = 1;
  var last = 1;
  var temp = 0;
 
  while(n > 2) {
    //[last, curr] = [curr, last+curr];
    temp = last;
    last = curr;
    curr = temp + curr;
    n--;
  }
  return curr;
}


function fibA(n) {
  if (n < 1) {
    return 0;
  }
  
  if (n < 3) {
    return 1;
  }
  
  return fibA(n-1) + fibA(n-2);
}

console.log(fib(8));
console.log(fibA(8));