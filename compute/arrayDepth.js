const arrayDepth = (arr) =>{
  if(!Array.isArray(arr)){
    return 0;
  }
  let maxDepth = 0;
  for(const i of arr){
    const depth = arrayDepth(i);
    maxDepth = Math.max(maxDepth,depth);
  }
  return maxDepth + 1;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const depth = arrayDepth(nestedArray);
console.log(`数组的层级是 ${depth}`);