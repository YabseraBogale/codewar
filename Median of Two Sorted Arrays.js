function twomd(arr1,arr2){
    let arrsize3=arr1.length+arr2.length;
    let arr3=[];
    let j=0;
    for(let i=0;i<arrsize3;i++){
        if(i<arr1.length){
            arr3.push(arr1[i]);
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    return arr3;
}
//test
arr1=[1,2,5];
arr2=[4,5,6,7];
console.log(twomd(arr1,arr2));
