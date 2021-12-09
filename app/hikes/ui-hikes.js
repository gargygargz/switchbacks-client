const onCreateHikeSuccess = function (responseData) {
  // extract the hike object from our response's data
  const hike = responseData.hike
  // create the html to display a single hike
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
  $('createHike').hide()
  // tell the user it was successful
  $('#success-message').text('Hike created successfully!').fadeIn(0, 1)
  $('#success-message').text('Hike created successfully!').fadeOut(4000, 0)
}

const onCreateHikeFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Hike creation failed, please try again.').fadeIn(0, 1)
  $('#error-message').text('Hike creation failed, please try again.').fadeOut(4000, 0)
  $('#hike-info').trigger('reset')
}

const onGetMyHikesSuccess = function (responseData) {
  // extract the hikes from our response data into a variable to make it easier to use
  const hikes = responseData.hikes

  // create a string that will store all of our hikes as html
  // so we can use the `.html` method, to display the hikes on the page later
  let hikesHtml = ''
  // loop over all of the hikes
  hikes.forEach((hike) => {
    // add html for each hike, to the hikesHtml variable
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
  $('#success-message').text('Successfully retrieved all your hikes!').fadeIn(0, 1)
  $('#success-message').text('Successfully retrieved all your hikes!').fadeOut(4000, 0)
}

const onGetMyHikesFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Failed to get your hikes, please try again.').fadeIn(0, 1)
  $('#error-message').text('Failed to get your hikes, please try again.').fadeOut(4000, 0)
}

// const onGetAllHikesSuccess = function (responseData) {
//   // extract the hikes from our response data into a variable to make it easier to use
//   const hikes = responseData.hikes

//   // create a string that will store all of our hikes as html
//   // so we can use the `.html` method, to display the hikes on the page later
//   let hikesHtml = ''

//   // loop over all of the hikes
//   hikes.forEach((hike) => {
//     // add html for each hike, to the hikesHtml variable
//     hikesHtml += `
//       <div>
//         <p>Name: ${hike.name}</p>
//         <p>Location: ${hike.location}</p>
//         <p>Distance: ${hike.distance}</p>
//         <p>Duration: ${hike.duration}</p>
//         <p>Difficulty: ${hike.difficulty}</p>
//         <p>Rating: ${hike.rating}</h3>
//         <p>Notes: ${hike.notes}</p>
//         <p>ID: ${hike._id}</p>
//         <button class="hikes-delete-dynamic" data-id=${hike._id} data-name="${hike.name}">
//           Delete Hike
//         </button>
//       </div>
//     `
//   })
//   // for the div with the id hikes-display,
//   // set its html to be our hike's html
//   $('#hikes-display').html(hikesHtml)
//   $('.background-info').hide()
//   $('#hikes-display').css('display', 'block')
//   // tell the user it was successful
//   $('#success-message').text('Here is a list of all hikes!').fadeIn(0, 1)
//   $('#success-message').text('Here is a list of all hikes!').fadeOut(4000, 0)
// }

// const onGetAllHikesFailure = function () {
//   // tell the user it was failure
//   $('#error-message').text('Failed to get all hikes, please try again.').fadeIn(0, 1)
//   $('#error-message').text('Failed to get all hikes, please try again.').fadeOut(4000, 0)
// }

const onShowHikeSuccess = function (responseData) {
  const hike = responseData.hike

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
  $('#success-message').text('Hike retrieved successfully!').fadeIn(0, 1)
  $('#success-message').text('Hike retrieved successfully!').fadeOut(4000, 0)
}

const onShowHikeFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Hike could not be found, please try again.').fadeIn(0, 1)
  $('#error-message').text('Hike could not be found, please try again.').fadeOut(4000, 0)
  $('#showHike').modal('hide')
  $('#showHikeForm').trigger('reset')
}

const onUpdateHikeSuccess = function () {
  $('#success-message').text('Hike updated successfully').fadeIn(0, 1)
  $('#success-message').text('Hike updated successfully').fadeOut(4000, 0)
  $('#updateHikeForm').trigger('reset')
  $('#hikes-display').css('display', 'block')
  $('updateHike').hide()
  $('.background-info').hide()
}

const onUpdateHikeFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Hike could not be updated, please try again.').fadeIn(0, 1)
  $('#error-message').text('Hike could not be updated, please try again.').fadeOut(4000, 0)
  $('#updateHike').modal('hide')
  $('#updateHikeForm').trigger('reset')
}

const onDeleteHikeSuccess = function (name = 'Hike') {
  $('#success-message').text(`${name} was deleted successfully`).fadeIn(0, 1)
  $('#success-message').text(`${name} was deleted successfully`).fadeOut(4000, 0)
  $('#deleteHikeForm').trigger('reset')
}

const onDeleteHikeFailure = function () {
  // tell the user it was failure
  $('#error-message').text('Hike could not be deleted, please try again.').fadeIn(0, 1)
  $('#error-message').text('Hike could not be deleted, please try again.').fadeOut(4000, 0)
  $('#deleteHike').modal('hide')
  $('#deleteHikeForm').trigger('reset')
}

module.exports = {
  onCreateHikeSuccess,
  onCreateHikeFailure,
  onGetMyHikesSuccess,
  onGetMyHikesFailure,
  // onGetAllHikesSuccess,
  // onGetAllHikesFailure,
  onShowHikeSuccess,
  onShowHikeFailure,
  onUpdateHikeSuccess,
  onUpdateHikeFailure,
  onDeleteHikeSuccess,
  onDeleteHikeFailure
}
