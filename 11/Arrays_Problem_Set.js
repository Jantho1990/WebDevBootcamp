/**
 *  Print the reverse of an array.
 *  @param arr An array
 */
function printReverse(arr){
  // for(var a = arr.length; a > 0; a--){
  //   console.log(arr[a - 1]);
  // }
  for(var a = arr.length - 1; a >= 0; a--){
    console.log(arr[a]);
  }
}

/**
 *  Return true if all members of an array are identical.
 *  @param arr An array
 */
function isUniform(arr){
  // var b = undefined;
  // var ret = true;
  // arr.forEach(function(a){
  //   if(ret === false){return;}
  //   if(a !== b && b !== undefined){
  //     ret = false;
  //   }else{
  //     b = a;
  //   }
  // });
  // return ret;
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

/**
 *  Return the sum of all numbers in an array.
 *  @param arr An array
 */
function sumArray(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

/**
 *  Return the largest number in an array.
 *  As per the exercise, the array is assumed to be solely numbers.
 *  @param arr An array
 */
function max(arr){
  var max = arr[0];
  // arr.forEach(function(a){
  //   if(a > max){
  //     max = a;
  //   }
  // });
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

// test the functions
printReverse([5,4,3,2,1]);
printReverse(['apples', 'bananas', 'oranges', 'grapes', 'kiwi', 'strawberries']);

console.log(isUniform([1,1,1,1]));
console.log(isUniform([1,2,3,4]));
console.log(isUniform([1, undefined, 1, 1]));
console.log(isUniform([undefined, undefined, undefined]));

console.log(sumArray([1,2,3]));
console.log(sumArray([6,4,5]));

console.log(max([1,2,3,5,2]));
console.log(max([6,77,25,-17,44,1]));
