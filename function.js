function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
  }
  
  
  const numbers = [1, 2, 3];
  const words = ["apple", "banana", "cherry"];
  
  console.log(`First number: ${getFirstElement(numbers)}`);
  console.log(`First word: ${getFirstElement(words)}`);
  