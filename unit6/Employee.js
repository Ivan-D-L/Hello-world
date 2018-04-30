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