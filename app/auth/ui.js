const store = require('../store')

const onSignUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Signed up successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  console.log('responseData is', responseData)

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)

  // clear (reset) all of the forms
  $('#signUpForm').trigger('reset')
}

const onSignUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, please try again.')
  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)
}

const onSignInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  // tell the user it was successful
  $('#success-message').text('Signed in successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('#sign-out, .change-password, .get-my-hikes, .get-all-hikes, .show-hike, .update-hike, .delete-hike, .create-hike').css('display', 'block')
  $('.sign-up').hide()
  // clear (reset) all of the forms
  $('#signInForm').trigger('reset')
}

const onSignInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed, please try again.')
  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)
}

const onChangePasswordSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Password changed successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  console.log('responseData is', responseData)

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)

  // clear (reset) all of the forms
  $('#changePasswordForm').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Password change failed, please try again.')
  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)
}

const onSignOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Signed out successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  // clear (reset) all of the forms
  $('#signUpForm, #signInForm, #changePasswordForm, #hike-info, #deleteHikeForm #updateHikeForm, #showHikeForm'
  ).trigger('reset')
  $('.sign-up, .sign-in, .background-info').show()
  $(
    '#sign-out, #hikes-display, .change-password, .get-my-hikes, .get-all-hikes, .show-hike, .update-hike, .delete-hike, .create-hike'
  ).hide()

  console.log('responseData is', responseData)
  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onSignOutFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign out failed, please try again.')
  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)
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
