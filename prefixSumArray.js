const array=[1,3,5,7,8,9];
let prefixArray=[];
array.reduce((acc,val)=>
{
    acc+=val;
    prefixArray.push(acc);
    return acc;
},0);
console.log(prefixArray);