// require the config file, so have our API's url
const config = require('../config')
// require the store file, so we have access to the store object
// so that we had the user's token when making authenticated requests
const store = require('../store')

// formData will be our credentials object w/ email, password, and confirmation
const signUp = function (formData) {
  // make a request to POST / sign-up
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    // make sure to send the formData along as the body of our request
    // this is similar to --data in the curl script
    data: formData
  })
}

// formData will be our credentials object w/ email, password
const signIn = function (formData) {
  // make a request to POST / sign-in
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    // make sure to send the formData along as the body of our request
    // this is similar to --data in the curl script
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  // make a request to DELETE / sign-out
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    // Add our authorization header, so the api can use the token to know who is trying to change the password
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
