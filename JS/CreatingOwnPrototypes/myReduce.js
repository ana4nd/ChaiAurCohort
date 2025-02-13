const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback){
        let result = this[0];
        for(let i=1; i<this.length; i++){
            result = callback(result, this[i]);
        }
        return result;
    }
}

const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);