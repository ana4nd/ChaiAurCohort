// const array1 = ["one", "two", "three"];
// console.log("array1:", array1);
// // Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log("reversed:", reversed);
// // Expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log("array1:", array1);
// // Expected output: "array1:" Array ["three", "two", "one"]


if(!Array.prototype.myReverse){
    Array.prototype.myReverse = function(){
        const result = [];
        for(let i=this.length-1; i>=0; i--){
            result.push(this[i]);
        }
        return result;
    }
}

const array2 = ["one", "two", "three"];
const result = array2.myReverse();
console.log("array2:", result);
// Expected output: "array2:" Array ["one", "two", "three"]