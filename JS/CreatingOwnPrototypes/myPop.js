const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// console.log(plants.pop());
// // Expected output: "tomato"

// console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

if(!Array.prototype.myPop){
    Array.prototype.myPop = function(){
      if(this.length == 0){
        return undefined;
      }

      const lastElement = this[this.length -1];
      this.length = this.length -1;

      return lastElement;
    }
}

console.log(plants.myPop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.myPop();

console.log(plants);