function isEven(x){
  // if(x % 2 === 0){return true;}
  // return false;
  return x % 2 === 0;
}

function factorial(x){
  var ret = 1;
  for(var a = x; a >= 1; a--){
    ret *= a;
  }
  return ret;
}

function kebabToSnake(str){
  return str.replace(/-/g, '_');
}

// Test
console.log(isEven(6));
console.log(isEven(3));

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(0));

console.log(kebabToSnake('sheesh-kebab-in-the-face'));
