function findMax(arr){
    if(arr.length===0){
        return null
    }

    let  maxNumber=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxNumber){
maxNumber=arr[i]
        }
        }
    return maxNumber
}

console.log(findMax([2,5,8,3,9,1]))





