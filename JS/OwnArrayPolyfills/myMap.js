const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        const result = [];
        for(let i=0; i<this.length; i++){

            if (this == null) {
                throw new TypeError('Array.prototype.myMap called on null or undefined');
            }
            
            if(i in this){
                result.push(callback(this[i],i, this));
            }
        }
        return result;
    }
}

const map2 = array1.myMap((x) => x * 3);

console.log(map2);