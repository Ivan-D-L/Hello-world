var someStuff = ["Cat","dog","mouse"];

function checkGivenProperty(someStuff,key){
    return someStuff.hasOwnProperty.call(someStuff,key);
}

console.log(checkGivenProperty(someStuff,"Cat"));
