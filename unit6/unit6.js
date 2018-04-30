function Employee(first, last, ssn, eid, dept) { //constructor
    this.firstName = first;
    this.lastName = last;
    this.ssn = ssn || Employee.prototype.ssn;   //short-circuit
    this.eid = eid;
    this.dept = dept || Employee.prototype.dept;
}

Employee.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};


var eJohnDoe = new Employee("John", "Doe", "123-34-1234", "001234", "acct");
var eSallyRally = new Employee("Sally", "Rally","123-34-1235", "001235", "hr");

alert(eJohnDoe.name());

Employee.prototype = { //the specific prototype for the constructor
    ssn: '000-00-000',
    dept: 'empty'
};

function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType){ //bank constructor
    this.acctNum = acctNum;
    this.acctOwner = acctOwner;
    this.checkBalance = checkBalance;
    this.saveBalance = saveBalance;
    this.acctType = acctType;
}

BankAcct.prototype.checkTransfer = function(credit){ //transfer prototype function
    if((credit + this.checkBalance) > 0){ //cannot deposit negative money
        this.checkBalance = credit;
    }else{
        alert("balance is below 0");
    }
}

var SenoAcc = new BankAcct(9999,"Prof. Seno",50,25,"checking"); //creating a new object using constructor above

SenoAcc.checkTransfer(100000000); //tranferring some money //checking if prototype function works correctly.

console.log(SenoAcc);


var someStuff = ["Cat","dog","mouse"];

function checkGivenProperty(someStuff,key){
    return someStuff.hasOwnProperty.call(someStuff,key);
}

console.log(checkGivenProperty(someStuff,"Cat"));




