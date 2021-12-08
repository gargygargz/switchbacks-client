const store = require('../store')

const onSignUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Signed up successfully!').fadeIn(0, 1)
  $('#success-message').text('Signed up successfully!').fadeOut(4000, 0)
  // clear (reset) all of the forms
  $('#signUpForm').trigger('reset')
}

const onSignUpFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, please try again.').fadeIn(0, 1)
  $('#error-message').text('Sign up failed, please try again.').fadeOut(4000, 0)
  $('#signUpForm').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  // tell the user it was successful
  $('#success-message').text('Signed in successfully!').fadeIn(0, 1)
  $('#success-message').text('Signed in successfully!').fadeOut(4000, 0)
  $('#sign-out, .change-password, .get-my-hikes, .get-all-hikes, .show-hike, .update-hike, .delete-hike, .create-hike').css('display', 'block')
  $('.sign-up').hide()
  $('#signIn').hide()
  $('.sign-in').hide()
  $('.modal-backdrop').hide()
  // clear (reset) all of the forms
  $('#signInForm').trigger('reset')
}

const onSignInFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Sign in failed, please try again.').fadeIn(0, 1)
  $('#error-message').text('Sign in failed, please try again.').fadeOut(4000, 0)
  $('#signInForm').trigger('reset')
}

const onChangePasswordSuccess = function () {
  // tell the user it was successful
  $('#success-message').text('Password changed successfully!').fadeIn(0, 1)
  $('#success-message').text('Password changed successfully!').fadeOut(4000, 0)
  // clear (reset) all of the forms
  $('#changePasswordForm').trigger('reset')
}

const onChangePasswordFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Password change failed, please try again.').fadeIn(0, 1)
  $('#error-message').text('Password change failed, please try again.').fadeOut(4000, 0)
  $('#changePasswordForm').trigger('reset')
}

const onSignOutSuccess = function () {
  // tell the user it was successful
  $('#success-message').text('Signed out successfully!').fadeIn(0, 1).fadeIn(0, 1)
  $('#success-message').text('Signed out successfully!').fadeIn(0, 1).fadeOut(4000, 0)
  $('.sign-up, .sign-in, .background-info').show()
  $('#sign-out, #hikes-display, .change-password, .get-my-hikes, .get-all-hikes, .show-hike, .update-hike, .delete-hike, .create-hike').hide()
  // clear (reset) all of the forms
  $('#signUpForm, #signInForm, #changePasswordForm, #hike-info, #deleteHikeForm #updateHikeForm, #showHikeForm, #sign-out').trigger('reset')
}

const onSignOutFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Sign out failed, please try again.').fadeIn(0, 1)
  $('#error-message').text('Sign out failed, please try again.').fadeOut(4000, 0)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
