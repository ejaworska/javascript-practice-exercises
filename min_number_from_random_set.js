// find a minimum number from 10 random numbers
const numbers = [];
for (let i=0; i<10; i++){
  numbers.push(Math.floor(Math.random()*100));
}

function getMinFromTab(tab){
  let min = tab[0];
  for (let i=1; i<tab.length; i++){
    if (tab[i] < min){
      min = tab[i];
    }
  }
  return min
}

console.log("A minimum number from (" + numbers + ") is: "
+ getMinFromTab(numbers));
