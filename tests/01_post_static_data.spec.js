// @ts-check
const {test, expect} = require('@playwright/test');

//test case 1
test('should be able to create a booking', async ({request}) => {
    const response = await request.post(`/booking`, {
        data: {
            "firstname": "Itadori",
            "lastname": "Yuji",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Itadori");
    expect(responseBody.booking).toHaveProperty("lastname", "Yuji");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});