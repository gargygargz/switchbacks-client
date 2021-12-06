const onCreateHikeSuccess = function (responseData) {
  // extract the hike object from our response's data
  const hike = responseData.hike
  console.log(responseData)

  // create the html to display a single book
  const hikeHtml = `
    <div>
      <p>Name: ${hike.name}<p>
      <p>Location: ${hike.location}</p>
      <p>Distance: ${hike.distance}</p>
      <p>Duration: ${hike.duration}</p>
      <p>Difficulty: ${hike.difficulty}</p>
      <p>Rating: ${hike.rating}</h3>
      <p>Notes: ${hike.notes}</p>
      <p>ID: ${hike._id}</p>
    </div>
  `
  // for the div with the id hikes-display,
  // set its html to be our hike's html
  $('#hikes-display').html(hikeHtml)

  $('#hike-info').trigger('reset')

  // tell the user it was successful
  $('#success-message').text('Hike created successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  // clear (reset) all of the forms

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onCreateHikeFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Hike creation failed, please try again.')
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
  $('#hike-info').trigger('reset')
}

const onGetMyHikesSuccess = function (responseData) {
  // extract the hikes from our response data into a variable to make it easier to use
  const hikes = responseData.hikes
  console.log(responseData)

  // create a string that will store all of our hikes as html
  // so we can use the `.html` method, to display the hikes on the page later
  let hikesHtml = ''

  // loop over all of the hikes
  hikes.forEach((hike) => {
    // add html for each book, to the booksHtml variable
    hikesHtml += `
      <div>
        <p>Name: ${hike.name}</p>
        <p>Location: ${hike.location}</p>
        <p>Distance: ${hike.distance}</p>
        <p>Duration: ${hike.duration}</p>
        <p>Difficulty: ${hike.difficulty}</p>
        <p>Rating: ${hike.rating}</h3>
        <p>Notes: ${hike.notes}</p>
        <p>ID: ${hike._id}</p>
      
        <button class="hikes-delete-dynamic" data-id=${hike._id} data-name="${hike.name}">
          Delete Hike
        </button>
      </div>
    `
  })

  // for the div with the id hikes-display,
  // set its html to be our hike's html
  $('#hikes-display').html(hikesHtml)
  $('.background-info').hide()
  $('#hikes-display').css('display', 'block')

  // tell the user it was successful
  $('#success-message').text('Here is a list of all hikes!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onGetMyHikesFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Failed to get your hikes, please try again.')
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

const onGetAllHikesSuccess = function (responseData) {
  // extract the hikes from our response data into a variable to make it easier to use
  const hikes = responseData.hikes
  console.log(responseData)

  // create a string that will store all of our hikes as html
  // so we can use the `.html` method, to display the hikes on the page later
  let hikesHtml = ''

  // loop over all of the hikes
  hikes.forEach((hike) => {
    // add html for each book, to the booksHtml variable
    hikesHtml += `
      <div>
        <p>Name: ${hike.name}</p>
        <p>Location: ${hike.location}</p>
        <p>Distance: ${hike.distance}</p>
        <p>Duration: ${hike.duration}</p>
        <p>Difficulty: ${hike.difficulty}</p>
        <p>Rating: ${hike.rating}</h3>
        <p>Notes: ${hike.notes}</p>
        <p>ID: ${hike._id}</p>
      
        <button class="hikes-delete-dynamic" data-id=${hike._id} data-name="${hike.name}">
          Delete Hike
        </button>
      </div>
    `
  })

  // for the div with the id hikes-display,
  // set its html to be our hike's html
  $('#hikes-display').html(hikesHtml)
  $('.background-info').hide()
  $('#hikes-display').css('display', 'block')

  // tell the user it was successful
  $('#success-message').text('Here is a list of all hikes!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onGetAllHikesFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Failed to get all hikes, please try again.')
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

const onShowHikeSuccess = function (responseData) {
  const hike = responseData.hike
  console.log(responseData)

  const hikeHtml = `
    <div>
      <p>Name: ${hike.name}</p>
      <p>Location: ${hike.location}</p>
      <p>Distance: ${hike.distance}</p>
      <p>Duration: ${hike.duration}</p>
      <p>Difficulty: ${hike.difficulty}</p>
      <p>Rating: ${hike.rating}</h3>
      <p>Notes: ${hike.notes}</p>
      <p>ID: ${hike._id}</p>

      <button class="hikes-delete-dynamic" data-id=${hike._id} data-name="${hike.name}">
          Delete Hike
        </button>
    </div>
  `
  $('#hikes-display').html(hikeHtml)
  $('#showHikeForm').trigger('reset')
  $('.background-info').hide()
  $('#hikes-display').css('display', 'block')

  // tell the user it was successful
  $('#success-message').text('Hike retrieved successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const onShowHikeFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Hike could not be found, please try again.')
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

  $('#showHike').modal('hide')
  $('#showHikeForm').trigger('reset')
}

const onUpdateHikeSuccess = function () {
  $('#hikes-display').text('Hike updated successfully')
  $('#hikes-display').addClass('text-success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from books-display
    $('#hikes-display').html('')
    // remove the green color causes by `text-success`
    $('#hikes-display').removeClass('text-success')
  }, 5000)

  $('#updateHikeForm').trigger('reset')
  $('#hikes-display').css('display', 'block')
  $('.background-info').hide()
}

const onUpdateHikeFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Hike could not be updated, please try again.')
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

  $('#updateHike').modal('hide')
  $('#updateHikeForm').trigger('reset')
}

const onDeleteHikeSuccess = function (name = 'Hike') {
  $('#hikes-display').text(`${name} was deleted successfully`)
  $('#hikes-display').addClass('text-success')
  setTimeout(() => {
    // remove the message from hikes-display
    $('#hikes-display').html('')
    // remove the green color causes by `text-success`
    $('#hikes-display').removeClass('text-success')
  }, 5000)

  $('#deleteHikeForm').trigger('reset')
}

const onDeleteHikeFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Hike could not be deleted, please try again.')
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
  $('#deleteHike').modal('hide')
  $('#deleteHikeForm').trigger('reset')
}

module.exports = {
  onCreateHikeSuccess,
  onCreateHikeFailure,
  onGetMyHikesSuccess,
  onGetMyHikesFailure,
  onGetAllHikesSuccess,
  onGetAllHikesFailure,
  onShowHikeSuccess,
  onShowHikeFailure,
  onUpdateHikeSuccess,
  onUpdateHikeFailure,
  onDeleteHikeSuccess,
  onDeleteHikeFailure
}
