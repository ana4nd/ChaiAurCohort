const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"


if(!Array.prototype.myJoin){
    Array.prototype.myJoin = function(seperator=","){
        let result = "";
        for(let i=0; i<this.length; i++){
            if(i < this.length-1){
                result += this[i] + seperator;
            }
            else{
                result += this[i];
            }
        }
        return result;
    }
}

console.log(elements.myJoin());
// Expected output: "Fire,Air,Water"

console.log(elements.myJoin(""));
// Expected output: "FireAirWater"

console.log(elements.myJoin("-"));