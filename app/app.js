// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const hikeEvents = require('./hikes/events-hikes.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUpForm').on('submit', authEvents.onSignUp)
  $('#signInForm').on('submit', authEvents.onSignIn)
  $('#changePasswordForm').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#hike-info').on('submit', hikeEvents.onCreateHike)
  $('.get-my-hikes').on('click', hikeEvents.onGetMyHikes)
  $('.get-all-hikes').on('click', hikeEvents.onGetAllHikes)
  $('#showHikeForm').on('submit', hikeEvents.onShowHike)
  $('#updateHikeForm').on('submit', hikeEvents.onUpdateHike)
  $('#deleteHikeForm').on('submit', hikeEvents.onDeleteHike)
  $('#hikes-display').on(
    'click',
    '.hikes-delete-dynamic',
    hikeEvents.onDynamicDeleteHike
  )
})
