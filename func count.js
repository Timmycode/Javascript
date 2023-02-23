
function countEvensAndOdds(arr){
    let count = {
        oddCount: 0,
        evenCount: 0
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count.evenCount++;
        } else {
            count.oddCount++;
        }
    }
    return count;
}
countEvensAndOdds([1,2,3,4]);
icountEvensAndOdds([1,2,3,4,5,6,7]);