
const pets = ["cat", "dog", "bat",NaN];
console.log(pets.includes("cat"));

if (!Array.prototype.myIncludes) {
    Array.prototype.myIncludes = function(searchEle) {
        // Iterate through the array
        for (let i = 0; i < this.length; i++) {
            // Check if the current element is strictly equal to searchEle
            if (this[i] === searchEle) {
                return true;
            }
            // Special case for NaN, as NaN !== NaN
            if (Number.isNaN(this[i]) && Number.isNaN(searchEle)) {
                return true;
            }
        }
        // If no match is found, return false
        return false;
    }
}


console.log(pets.myIncludes(NaN));
