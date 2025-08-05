const express = require('express');
const router = express.Router();
const authController = require('./authController');

// Sign up route
router.post('/signup', authController.signUp);

// Sign in route
router.post('/signin', authController.signIn);

// Sign out route
router.post('/signout', authController.signOut);

// Password reset request route
router.post('/password-reset-request', authController.passwordResetRequest);

// Password reset route
router.post('/password-reset', authController.passwordReset);

// Account verification route
router.post('/verify-account', authController.verifyAccount);

module.exports = router;
{
  "checklist": [
    {
      "action": "Create sign up route",
      "method": "POST",
      "endpoint": "/signup",
      "status": "complete"
    },
    {
      "action": "Create sign in route",
      "method": "POST",
      "endpoint": "/signin",
      "status": "complete"
    },
    {
      "action": "Create sign out route",
      "method": "POST",
      "endpoint": "/signout",
      "status": "complete"
    },
    {
      "action": "Create password reset request route",
      "method": "POST",
      "endpoint": "/password-reset-request",
      "status": "complete"
    },
    {
      "action": "Create password reset route",
      "method": "POST",
      "endpoint": "/password-reset",
      "status": "complete"
    },
    {
      "action": "Create account verification route",
      "method": "POST",
      "endpoint": "/verify-account",
      "status": "complete"
    }
  ]
}