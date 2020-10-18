const { AddUser } = require("../../controllers/userController");
const { mongoose, foods } = require("../../models");
const { UserDetails } = require("../dummyInformations");

describe("Test that add user controller works", () => {
    afterAll(async () => {
        mongoose.deleteModel(foods);
        await mongoose.disconnect();
    });

    test("user is added", async () => {
        const data = UserDetails('john does', 'doe@nnd.cc')

        const user = await AddUser(data);

        expect(typeof user).toBe('object');
        expect(user).toHaveProperty("fullname");

    })

    test("test that error is thrown if same email is used twice", async () => {

        const data = UserDetails()


        expect(await AddUser(data)).toThrow();

    })
})