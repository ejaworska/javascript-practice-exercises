const min = 1, max = 100;
const prime_numbers = [];
for (let i = min; i <= max; i++){
  let prime = true;
  for (let j=2; j<i; j++){
    if (i%j === 0 && i!=j){
      prime = false;
      break;
    }
  }
  if (prime === true && prime_numbers.indexOf(i) === -1  && i !== 1){
    prime_numbers.push(i);
  }
}
console.log("Prime prime_numbers from " + min + " to " + max + ": " + prime_numbers.join(" "));
