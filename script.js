function firstNonRepeatedChar(str) {
 // Write your code here
	let count = -1;
  for (var i = 0; i < str.length; i++) {
      console.log("iteration ",i+1)
    for(let j=0;j<str.length;j++){
      if(str.charAt(i) === str.charAt(j)){
        count++;
        console.log(count +" "+ i)
      }
    }
    if(count == 0){
      return str.charAt(i);
    }
    count = -1;
  }
  return null
}
const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
