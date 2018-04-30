var myQuote="He who laughs, lasts.";

console.log(myQuote.toUpperCase());
console.log(myQuote.indexOf("a"));
console.log (myQuote.indexOf("@", 1));
console.log( myQuote.indexOf("who"));
console.log( myQuote.indexOf("a", 10));
console.log( myQuote.lastIndexOf("a"));
console.log(myQuote.lastIndexOf("a", 7));
console.log( myQuote.lastIndexOf("a", 10));
console.log(myQuote.charAt(7));
console.log( myQuote.charAt(myQuote.length));
console.log( myQuote.charAt(myQuote.length - 3));

//HE WHO LAUGHS, LASTS., 8, -1, 3, 16, 16, -1, 8 l, space, t

//#3 # 3 # 3 # 3 object oriented programming is wonderful, especially in javascript where everything is treated as an object.
// For example there are many things we can do such as create
//functions that work with our items, rather than making individual functions for every little thing.
//This allows us to use things such as callbacks and use polymorphism to its fullest potential.
//Object oriented programming provides a clean and wonderful structure to code which makes it easier to work with not just for the individual but for team members too.
//Making New objects has never been easier when there only needs to be a minimal amount of changes for the code to be efficient and operational.


    function MedRecord(FirstName,LastName,medRecord,medId,insuranceInfo){

    this.FirstName= FirstName;
    this.LastName = LastName;
    this.medRecord = medRecord;
    this.medId = medId;
    this.insuranceInfo = insuranceInfo;
}

MedRecord.prototype.changeInsurance = function(newInsurance){
    this.insuranceInfo = newInsurance;
};

var Patient = new MedRecord("Yan","Lashchev","Code Red",1234,"InsureBros");

console.log(Patient);

Patient.changeInsurance("Liability");

console.log(Patient.insuranceInfo);


people = [{"FirstName":"John","LastName":"Smith" },
          {"FirstName":"Anna","LastName":"House"},       //Javascript Object
          {"FirstName":"Mark","LastName":"McDonald"}];  //Spectacularly JSON formatted

for (var i = 0; i< people.length;i++) { //We loop through our array
    user1 = people[i].FirstName;
    user2 = people[i].LastName;         //Here we Store first and Last Name

    for(var j = 0; j<user1.length;j++){ //Nested For loops are always the solution
        newfirst = user1.charAt(0);     //reloop our first names and grab each object at index[0]
        console.log(newfirst+user2);    //Print as requested
    }


}