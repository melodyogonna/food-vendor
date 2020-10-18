const { PlaceOrder } = require("../../controllers/orderController");
const { users, foods, mongoose } = require("../../models");

describe("Test order are being place correctly", () => {

    let testFoods; let user;

    beforeAll(async () => {
        testFoods = await foods.find({ available: true }).limit(4).exec();
        user = await users.findOne({});
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    test('order is placed', async () => {
        const testIds = [];

        testFoods.forEach((food) => {
            // eslint-disable-next-line no-underscore-dangle
            testIds.push(food.id)
        })

        const order = await PlaceOrder(user.id, testIds);

        expect(typeof order).toBe('object');
        expect(order).toHaveProperty('orderId')

        expect(order.user.id).toEqual(user.id);

    });
})