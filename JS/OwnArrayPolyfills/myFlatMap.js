
const arr1 = [1,2,1];
const result = arr1.flatMap((num)=> [[num*2]]);
console.log(result);

if(!Array.prototype.myFlatMap){
   Array.prototype.myFlatMap = function(callback, depth = 1){
    const result = [];
    
    function flatArray(arr, currentDepth){
        for(let item of arr){
            if(Array.isArray(item) && currentDepth > 0){
                flatArray(item, currentDepth-1);
            }
            else{
                result.push(callback(item));
            }
        }

        flatArray(this, depth);
        return result;
    }

}   
   
}

const result2 = arr1.myFlatMap((num)=> [num * 2]);
console.log(result2)