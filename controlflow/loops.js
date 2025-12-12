//for loop
let arr=[1,2,3,4,5,6,7,8]
//function to return if a array is sorter or not
let ans = true
    for(let i =0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            ans= false
        }

    }



console.log(ans)