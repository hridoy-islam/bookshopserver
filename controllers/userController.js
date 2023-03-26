const { faker } = require("@faker-js/faker");
const UserModel = require("../models/userModel");

const allUsers = async(req, res) => {
    const users = await UserModel.find({}).limit(20);
    res.json(users);
}

const getUser = async(req, res)=> {
    const users = await UserModel.findById(req.params.id);
    res.json(users);
}

const checkUser = async (req, res) => {
    const email = req.params.email;
    const result = await UserModel.findOne({ email });
    if (result?.email) {
      return res.send({ status: true, data: result });
    }
    res.send({ status: false });
}

const createUser = async (req, res) => {
    const user = req.body;
    const result = await UserModel.create(user);
    res.send(result);
}

const fakeUser = (req, res) => {
    // generating Fake Data.

    for (let i = 0; i < 1300; i++) {
        let user = new UserModel({
            name: faker.name.fullName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            photo: faker.image.avatar(),
            phone: faker.phone.number(),
            address: {
                street: faker.address.street(),
                suite: faker.address.buildingNumber(),
                city: faker.address.city(),
                zipcode: faker.address.zipCode(),
            },
            website: faker.internet.domainName(),
            role: 1,
        });
        user.save();
    }

    res.send('faker Worked');
}

const fakeUserDeleteAll = (req, res) => {
    UserModel.deleteMany({}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    res.send('Deleted All');
}

module.exports = { allUsers, getUser, createUser, checkUser, fakeUser, fakeUserDeleteAll }