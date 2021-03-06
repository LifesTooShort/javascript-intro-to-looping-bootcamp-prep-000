function forLoop(array) {
  for (var i=0; i < 25; i++) {
    array.push(`"I am ${i+1} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue())
  
  return array;
}


var array = [];
array = forLoop(array);
console.log(array);

var n=3;
var resp;
resp = whileLoop(n);
console.log(resp);