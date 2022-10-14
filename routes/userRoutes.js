const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.loginRequired, userController.getAllUsers)
  .post(userController.loginRequired, userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.loginRequired, userController.updateUser)
  .delete(userController.loginRequired, userController.deleteUser);

router
    .route('/auth/register')
    .post(userController.register);

router
    .route('/auth/sign_in')
    .post(userController.sign_in);


module.exports = router;
