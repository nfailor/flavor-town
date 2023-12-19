const { Post } = require('../models');

const postdata = [
  {
    title: 'A Fake Recipe',
    body: 'This is designed to make sure my routes and posts are properly executing',
    user_id: 1,
  },
  {
    title: 'Spicy Chocolate Delight',
    body: 'Indulge in the rich combination of dark chocolate and chili for a unique taste experience.',
    user_id: 3,
  },
  {
    title: 'Citrus Burst Smoothie',
    body: 'Blend together oranges, pineapples, and a hint of mint for a refreshing and nutritious smoothie.',
    user_id: 4,
  },
  {
    title: 'Savory Pancake Surprise',
    body: 'Experiment with unexpected ingredients like cheese, spinach, and sun-dried tomatoes for a twist on traditional pancakes.',
    user_id: 5,
  },
  {
    title: 'Coconut Caramel Dream Bars',
    body: 'Create a heavenly treat by combining coconut, caramel, and a buttery crust for a delightful dessert.',
    user_id: 6,
  },
  {
    title: 'Mango Tango Salsa',
    body: 'Mix ripe mangoes, tomatoes, and jalapeños for a zesty salsa that pairs perfectly with chips or grilled dishes.',
    user_id: 7,
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
