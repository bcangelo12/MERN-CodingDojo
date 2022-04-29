const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    const newUser = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const resObj = {
        user: newUser,
        company: newCompany,
    };
    res.json(resObj);
});

app.listen(8000, () => {
    console.log(`Server is listening on ${PORT}`);
});
