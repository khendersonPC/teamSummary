const Employee = require("../lib/Employee");

describe("Employee", () => {
    // This tests if an employee object is created.
    describe("Initialization", () => {
        it("should create an employee with a name, id and email if provided valid arguments", () => {
            const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

            // Testing instance variables
            expect(employ.name).toEqual("Kelly Henderson");
            expect(employ.email).toEqual("khenderson@myEmail.com");
        });

    });
    describe("get Name method", () => {
        it("should return a name", () => {
            const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

            // Testing instance variables
            expect(employ.getName()).toBe("Kelly Henderson");

        });

    });
    describe("get ID method", () => {
        it("should return an ID as a number", () => {
            const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

            // Testing instance variables
            expect(employ.getId()).toBe(2);

        });

    });
    describe("get email method", () => {
        it("should return an email as a string", () => {
            const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

            // Testing instance variables
            expect(employ.getEmail()).toBe("khenderson@myEmail.com");

        });

    });

    describe("get role", () => {
        it("should return Employy", () => {
            const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

            // Testing instance variables
            expect(employ.getRole()).toBe("Employee");

        });

    });

});
