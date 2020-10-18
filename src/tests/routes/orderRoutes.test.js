const supertest = require("supertest");

const app = require("../..");
const { mongoose, foods, users } = require("../../models");

describe("Test order routes", () => {

    let testFoods; let user;

    beforeAll(async () => {
        testFoods = await foods.find({ available: true }).limit(4).exec();
        user = await users.findOne({});
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    test('Test that orders is placed', async () => {
        const testIds = [];

        testFoods.forEach((food) => {
            // eslint-disable-next-line no-underscore-dangle
            testIds.push(food.id)
        })

        const data = { customerId: user.id, orderDetails: testIds };

        const order = await supertest(app).post('/api/v1/orders/place-order').send(data);

        expect(order.status).toBe(201);
        expect(typeof order.body.order).toBe('object');
        // eslint-disable-next-line no-underscore-dangle
        expect(order.body.order.user._id).toEqual(user.id);
    })

    test("orders are being returned", async () => {
        const orders = await supertest(app).get('/api/v1/orders');

        expect(orders.status).toBe(200);
        expect(typeof orders.body.allOrders).toBe('object');
    })
})