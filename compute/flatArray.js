const flatArray = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur);
    }, [])
}
console.log(flatArray([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));

const flatArray2 = (arr) => {
    let newArr = [];
    const deal = (arr) => {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                deal(item);
            } else {
                newArr.push(item);
            }
        });
    }
    deal(arr);
    return newArr;
}

console.log(flatArray2([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));