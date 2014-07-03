##! Did you know, we can have **for** loops without statement section?


```
var testArr = [1,2,3,4,5];
console.log(testArr);
for(var i=5; i<10; i=i+1, testArr[i-1]=i);
console.log(testArr);
```
