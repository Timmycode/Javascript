function extractEveryThird(arr){
    let newArr = [];
    for(let i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    return newArr;
}
extractEveryThird([1,2,3]);
extractEveryThird([1,2,3,4,5,6]);
extractEveryThird(["a","b","c","d"]);
extractEveryThird(["first value", "second value", "third value"]);