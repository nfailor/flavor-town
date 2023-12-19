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
  },
  {
    title: 'Sweet and Savory Chicken',
    body: 'Juicy grilled chicken marinated in a zesty blend of mango, lime, and chili, creating a tantalizing dance of sweet and spicy flavors',
    user_id: 8,
  },
  {
    title: 'Quinoa Salad Bowl',
    body: 'A refreshing bowl of quinoa tossed with cherry tomatoes, cucumber, feta cheese, and kalamata olives, drizzled with a lemon-oregano vinaigrette.',
    user_id: 9,
  },
  {
    title: 'Savory Pancake Surprise',
    body: 'Experiment with unexpected ingredients like cheese, spinach, and sun-dried tomatoes for a twist on traditional pancakes.',
    user_id: 10,
  },
  {
    title: 'Maple Dijon Glazed Salmon',
    body: ' Succulent salmon fillets glazed with a harmonious mix of maple syrup and Dijon mustard, creating a perfect balance of sweet and tangy goodness.',
    user_id: 11,
  },
  {
    title: 'Thai Basil Beef Stir-Fry',
    body: 'Tender strips of beef wok-fried with aromatic Thai basil, garlic, and chilies, delivering a burst of bold and savory Southeast Asian flavors.',
    user_id: 12,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
