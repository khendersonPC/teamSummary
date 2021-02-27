const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // This tests if an engineer object is created.
    describe("Initialization", () => {
        it("should create an engineer with a name, email and github username if provided valid arguments", () => {
            const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "#123", "githubUsername");

            // Testing instance variables
            expect(en.name).toEqual("Kelly Engineer");
            expect(en.id).toBe("#123");
            expect(en.email).toEqual("khenderson@myEmail.com");
            expect(en.github).toEqual("githubUsername");
        });


    });
    describe("get Name method", () => {
        it("should return a name", () => {
            const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "#123", "githubUsername");

            // Testing instance variables
            expect(en.getName()).toBe("Kelly Engineer");

        });

    });
    describe("get ID method", () => {
        it("should return an ID as a number", () => {
            const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "#123", "githubUsername");


            // Testing instance variables
            expect(en.getId()).toBe("#123");

        });

        // });
        describe("get email method", () => {
            it("should return an email as a string", () => {
                const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "#123", "githubUsername");

                // Testing instance variables
                expect(en.getEmail()).toBe("khenderson@myEmail.com");

            });

        });

        describe("get role", () => {
            it("should return role", () => {
                const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "#123", "githubUsername");

                // Testing instance variables
                expect(en.getRole()).toBe("Engineer");

            });

        });

    });
});
