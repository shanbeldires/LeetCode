function AddTwoNumbers(l1,l2){
    let carry=0;
    let result=[];
    let maxLength=Math.max(l1.length,l2.length);

    for(let i=0;i<maxLength;i++){
        let sum=(l1[i] || 0)+(l2[i] || 0)+carry;
        result.push(sum%10);
        carry=Math.floor(sum/10);
    }

    if(carry>0){
        result.push(carry);
    }

    return result;
}
AddTwoNumbers([2,4,3], [5,6,4]); 
AddTwoNumbers([0],[0]);           
AddTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);