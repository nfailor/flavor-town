const { Comment } = require('../models');

const commentdata = [
  {
    body: 'This is designed to make sure my comments are properly posting',
    user_id: 1,
    post_id: 1,
  },
  {
    body: 'Testing comments for user 2 on post 2.',
    user_id: 2,
    post_id: 2,
  },
  {
    body: 'Another comment for user 3 on post 3.',
    user_id: 3,
    post_id: 3,
  },
  {
    body: 'Commenting as user 4 on post 4.',
    user_id: 4,
    post_id: 4,
  },
  {
    body: 'User 5 shares thoughts on post 5.',
    user_id: 5,
    post_id: 5,
  },
  {
    body: 'Comment from user 6 on post 6.',
    user_id: 6,
    post_id: 6,
  },

];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
