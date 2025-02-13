
const item = [1,2, 3];
const copyItems = [];

item.forEach((item)=>{
    copyItems.push(item*2);
})

// console.log(copyItems);

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
        const result = [];
        for(let i=0; i<this.length; i++){
            result.push(callback(this[i]));
        }

        return result;
    }
}

const item2 =[];

item.myForEach((item)=>{
    item2.push(item);
})

console.log(item2);