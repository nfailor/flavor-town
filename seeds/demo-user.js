const { User } = require('../models');
const bcrypt = require('bcrypt');

const userdata = [
    {
        id: 1,
        username: 'testUser',
        email: 'testUser@gmail.com',
        password: '1234'
    },
    {
        id: 2,
        username: 'gator',
        email: 'GatorGonGetEm@gmail.com',
        password: '2345'
    },
    {
        id: 3,
        username: 'Crocodile_dundee',
        email: 'juiceworld2020@gmail.com',
        password: '2345'
    },
    {
        id: 4,
        username: 'JungleExplorer',
        email: 'wildernessdiscover@gmail.com',
        password: 'nature789'
    },
    {
        id: 5,
        username: 'UrbanAdventurer',
        email: 'cityscape@gmail.com',
        password: 'metropolis123'
    },
    {
        id: 6,
        username: 'SpacePioneer',
        email: 'outerspace@gmail.com',
        password: 'galaxy456'
    },
    {
        id: 7,
        username: 'MysticTraveler',
        email: 'enchantedjourney@gmail.com',
        password: 'magic789'
    }
];

userdata.forEach(async user => {
    user.password = await bcrypt.hash(user.password, 10)
})

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser