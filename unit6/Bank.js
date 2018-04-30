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