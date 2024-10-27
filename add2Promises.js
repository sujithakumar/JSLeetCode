var addTwoPromises = async function(promise1, promise2) {
    var d1 = await data(promise1);
    var d2 = await data(promise2);
    var result = d1+d2;

return new Promise(resolve => setTimeout(() => resolve(result)));
};

var data = function(promise){
    return promise;
}

var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 10));
var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 20));
console.log(addTwoPromises(promise1,promise2));

//next
var promise1 = new Promise(resolve => setTimeout(() => resolve(10)));
var promise2 = new Promise(resolve => setTimeout(() => resolve(-12)));
console.log(addTwoPromises(promise1,promise2));