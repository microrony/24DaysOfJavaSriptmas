const chunkyMonkey = (values, size) => {
  let chunks = [];
  while(values.length) {
    chunks.push(values.splice(0, size));
  }
  return chunks;
}

console.log(chunkyMonkey([1, 2, 5, 4], 3)) 