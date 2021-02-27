const Manager = require("../lib/Manager");

describe("Manager", () => {
    // This tests if an manager object is created.
    describe("Initialization", () => {
        it("should create a manager with a name, email and github username if provided valid arguments", () => {
            const man = new Manager("Kelly Manager", "khenderson@myEmail.com", "#123", "2");

            // Testing instance variables
            expect(man.name).toEqual("Kelly Manager");
            expect(man.id).toEqual("#123");
            expect(man.email).toEqual("khenderson@myEmail.com");
            expect(man.officeNumber).toEqual("2");
        });

        

    });
    describe("get Name method", () => {
        it("should return a name", () => {
            const man = new Manager("Kelly Manager", "khenderson@myEmail.com", "#123", "2");

            // Testing instance variables
            expect(man.getName()).toBe("Kelly Manager");

        });

    });
    describe("get ID method", () => {
        it("should return an ID as a number", () => {
            const man = new Manager("Kelly Manager", "khenderson@myEmail.com", "#123", "2");

            // Testing instance variables
            expect(man.getId()).toBe("#123");

        });

    });
    describe("get email method", () => {
        it("should return an email as a string", () => {
            const man = new Manager("Kelly Manager", "khenderson@myEmail.com", "#123", "2");

            // Testing instance variables
            expect(man.getEmail()).toBe("khenderson@myEmail.com");

        });

    });

    describe("get role", () => {
        it("should return role", () => {
            const man = new Manager("Kelly Manager", "khenderson@myEmail.com", "#123", "2");

            // Testing instance variables
            expect(man.getRole()).toBe("Manager");

        });

    });

});

