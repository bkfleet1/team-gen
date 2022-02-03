const Employee = require(`./Employee`)

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name);
        super(id);
        super(email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";

    }
};

module.exports = Manager;