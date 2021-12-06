const config = require('../config')
const store = require('../store')

const createHike = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/hikes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const getAllHikes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getMyHikes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const showHike = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateHike = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/hikes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const deleteHike = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/hikes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createHike,
  getAllHikes,
  getMyHikes,
  showHike,
  updateHike,
  deleteHike
}
