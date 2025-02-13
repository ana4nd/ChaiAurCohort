const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1


if(!Array.prototype.myOfIndex){
    Array.prototype.myOfIndex = function(searchEle, startIndex = 0) {
        const start = Math.max(0,startIndex);

        for(let i=start; i<this.length; i++){
            if(this[i] == searchEle){
                return i;
            }
        }
        return -1;
    }
}

console.log(beasts.myOfIndex("bison"));

console.log(beasts.myOfIndex("bison", 2));

console.log(beasts.myOfIndex("giraffe"));