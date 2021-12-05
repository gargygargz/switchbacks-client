// require the getFormFields function, to get data from our forms
const getFormFields = require('../../lib/get-form-fields')

// require our api auth functions
const api = require('./api')
// require out ui functions to update the page
const ui = require('./ui')

const onSignUp = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()
  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)
  // make a POST / sign-up request, pass it the email/password/confirmation
  api
    .signUp(formData)
  // if our sign up request is successful, run the signUpSuccess function
    .then(ui.onSignUpSuccess)
  // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()
  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)
  // make a POST / sign-in request, pass it the email/password/confirmation
  api
    .signIn(formData)
  // if our sign in request is successful, run the signUpSuccess function
    .then(ui.onSignInSuccess)
  // otherwise, if an error occurred, run a signInFailure function
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // make a DELETE / sign-out request
  api
    .signOut()
  // if our sign out request is successful, run the signOutSuccess function
    .then(ui.onSignOutSuccess)
  // otherwise, if an error occurred, run a signOutFailure function
    .catch(ui.onSignOutFailure)
}

// export our event handler functions, so we can use them in app.js
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
