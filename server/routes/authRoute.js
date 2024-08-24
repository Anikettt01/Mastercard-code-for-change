import { Signup } from '../controllers/authController.js';
import { Login } from '../controllers/authController.js';
import { userVerification } from '../middlewares/authMiddleware.js';
import express from 'express';

const Router = express.Router();
/* Whenever you are trying to access any module using import structute keep in mind that always use .js at the last else it won't works */
Router.post('/signup', Signup);
Router.post('/login', Login);
Router.get('/', userVerification, (req, res) => {
   
  if (req.user) {
    res.status(200).json({ status: true, user: req.user.username });
  } else {
    res.status(401).json({ status: false });
  }
});


export default Router;
