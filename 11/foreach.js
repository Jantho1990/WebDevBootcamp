function myForEach(arr, func){
  // loop through array
  for(var i = 0; i < arr.length; i++){
    // call func for each item in array
    func(arr[i]);
  }
}

Array.prototype.myForEach = function(func){
  // loop through array
  for(var i = 0; i < this.length; i++){
    // call func for each item in array
    func(this[i]);
  }
};


// Test functions
function testMyFunc(a){
  console.log('boom ' + a);
}
arr = [1, 'noodles', 'cake'];
myForEach(arr, testMyFunc);
myForEach(arr, function(a){
  console.log('you are a snake, ' + a);
})

arr.myForEach(testMyFunc);
arr.myForEach(function(a){
  console.log('you suck, ' + a);
})
