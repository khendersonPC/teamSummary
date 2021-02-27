const Intern = require("../lib/Intern");

describe("Intern", () => {
    // This tests if an intern object is created.
    describe("Initialization", () => {
        it("should create an intern with a name, email and github username if provided valid arguments", () => {
            const intern = new Intern("Kelly Engineer", "khenderson@myEmail.com","#123", "mySchool");

            // Testing instance variables
            expect(intern.name).toEqual("Kelly Engineer");
            expect(intern.id).toBe("#123");
            expect(intern.email).toEqual("khenderson@myEmail.com");
            expect(intern.school).toEqual("mySchool");
        });

        
    });
    describe("get name method", () => {
        it("should return a name", () => {
            const intern = new Intern("Kelly Henderson", "khenderson@myEmail.com","#123", "mySchool");

            // Testing instance variables
            expect(intern.getName()).toBe("Kelly Henderson");

        });

    });
    describe("get ID method", () => {
        it("should return an ID as a number", () => {
            const intern = new Intern("Kelly Henderson", "khenderson@myEmail.com","#123", "mySchool");

            // Testing instance variables
            expect(intern.getId()).toBe("#123");

        });

    });
    describe("get email method", () => {
        it("should return an email as a string", () => {
            const intern = new Intern("Kelly Henderson", "khenderson@myEmail.com", "#123", "mySchool");

            // Testing instance variables
            expect(intern.getEmail()).toBe("khenderson@myEmail.com");

        });

    });

    describe("get role", () => {
        it("should return role", () => {
            const intern = new Intern("Kelly Henderson", "khenderson@myEmail.com","#123", "mySchool");

            // Testing instance variables
            expect(intern.getRole()).toBe("Intern");

        });

    });

});
