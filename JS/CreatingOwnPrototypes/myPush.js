const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);
// // Expected output: 4
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push("chickens", "cats", "dogs");
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


if(!Array.prototype.myPush){
    Array.prototype.myPush = function(...ele){

        const currentLength = this.length; // Save current length to avoid recalculating it repeatedly
        
        // Loop over all elements in the arguments and add them to the array
        for (let i = 0; i < ele.length; i++) {
            this[currentLength + i] = ele[i]; // Directly set the new indices
        }

        // Return the new length of the array
        return this.length;
    }
}

const count = animals.myPush("cows","dog");
console.log(count);
console.log(animals);

