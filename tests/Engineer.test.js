const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // This tests if an engineer object is created.
    describe("Initialization", () => {
        it("should create an engineer with a name, email and github username if provided valid arguments", () => {
            const en = new Engineer("Kelly Engineer", "khenderson@myEmail.com", "githubUsername");

            // Testing instance variables
            expect(en.name).toEqual("Kelly Engineer");
           // expect(en.id).toBe(1);
            expect(en.email).toEqual("khenderson@myEmail.com");
            expect(en.github).toEqual("githubUsername");
        });

        
    });
    describe("get Name method", () => {
        it("should return a name", () => {
            const en = new Engineer("Kelly Henderson", "khenderson@myEmail.com", "kellyGitHub");

            // Testing instance variables
            expect(en.getName()).toBe("Kelly Henderson");

        });

    });
    // describe("get ID method", () => {
    //     it("should return an ID as a number", () => {
    //         const employ = new Employee("Kelly Henderson", "khenderson@myEmail.com");

    //         // Testing instance variables
    //         expect(employ.getId()).toBe(1);

    //     });

    // });
    describe("get email method", () => {
        it("should return an email as a string", () => {
            const en = new Engineer("Kelly Henderson", "khenderson@myEmail.com", "GitHubName");

            // Testing instance variables
            expect(en.getEmail()).toBe("khenderson@myEmail.com");

        });

    });

    describe("get role", () => {
        it("should return role", () => {
            const en = new Engineer("Kelly Henderson", "khenderson@myEmail.com", "gitHubProf");

            // Testing instance variables
            expect(en.getRole()).toBe("Engineer");

        });

    });

});
