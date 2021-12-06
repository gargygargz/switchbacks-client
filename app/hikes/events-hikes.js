const getFormFields = require('../../lib/get-form-fields')
const api = require('./api-hikes')
const ui = require('./ui-hikes')

const onCreateHike = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api
    .createHike(formData)
    .then(ui.onCreateHikeSuccess)
    .catch(ui.onCreateHikeFailure)
}

const onGetMyHikes = function () {
  api
    .getMyHikes()
    .then(ui.onGetMyHikesSuccess)
    .catch(ui.onGetMyHikesFailure)
}

const onGetAllHikes = function () {
  api
    .getAllHikes()
    .then(ui.onGetAllHikesSuccess)
    .catch(ui.onGetAllHikesFailure)
}

const onShowHike = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const id = formData.hike.id
  api
    .showHike(id)
    .then(ui.onShowHikeSuccess)
    .catch(ui.onShowHikeFailure)
}

const onUpdateHike = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const id = formData.hike.id
  api
    .updateHike(id, formData)
    .then(ui.onUpdateHikeSuccess)
    .catch(ui.onUpdateHikeFailure)
}

const onDeleteHike = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const id = formData.hike.id
  api
    .deleteHike(id)
    .then(ui.onDeleteHikeSuccess)
    .catch(ui.onDeleteHikeFailure)
}

const onDynamicDeleteHike = (event) => {
  // select the button (event.target) and access its data-id attribute
  const id = $(event.target).data('id')
  // get the title as a data attribute
  const name = $(event.target).data('name')

  // make an HTTP request, to destroy a single hike based on its id
  api
    .deleteHike(id)
  // if destroying a single hike was successful, show it on the page
  // .then(ui.onDestroyHikeSuccess)
  // if we wanted to show the name after destroying a hike, we could pass it down
  // to our ui function
    .then(() => ui.onDeleteHikeSuccess(name))
  // otherwise, show an error message
    .catch(ui.onDeleteHikeFailure)
}

module.exports = {
  onCreateHike,
  onGetMyHikes,
  onGetAllHikes,
  onShowHike,
  onUpdateHike,
  onDeleteHike,
  onDynamicDeleteHike
}
