function sort_alphabetically(text, splitSign){
  const sortedTab = text.split(splitSign).sort();
  const sortedText = sortedTab.join(splitSign);
  return sortedText;
}

const my_text = "water|snow|book|angel|world|script|magic";
console.log(my_text);
console.log(sort_alphabetically(my_text, "|"));
