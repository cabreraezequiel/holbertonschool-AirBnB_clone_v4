let checkedAmenities = {};
$(document).ready(function() {
    // Api available
    $.get("http://0.0.0.0:5001/api/v1/status/", function (apiReq) {
    if (apiReq.status === "OK") {
	  $('#api_status').addClass('available');
    }
    else {
      $('#api_status').removeClass('available');
    }
  });
  // amenities checkboxes
  $('.checkbox').on('input', function() {
    if ($(this).prop('checked')) {
      console.log("true");
	  checkedAmenities[($(this).data('id'))] = ($(this).data('name'));
    }
    if (!$(this).prop('checked')) {
      console.log("false");
	  delete checkedAmenities[($(this).data('id'))];
	}
    $(".amenities h4").text(Object.values(checkedAmenities).join(', '));
  });
  // render places article
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'post',
    contentType: 'application/json',
    data: '{}',
    dataType: 'json',
    headers: {'Content-Type': 'application/json'}
  }).done(function (data) {
    for (let place of data) {
      $('<article>').append(
        $('<div>', {'class': 'title'}).append(
          $('<h2>').text(place.name),
          $('<div>', {'class': 'price_by_night'}).html(place.price_by_night)
        ),
        $('<div>', {'class': 'information'}).append(
          $('<div>', {'class': 'max_guest'}).append(
            $('<i>', {'class': 'fa fa-users fa-3x', 'aria-hidden': 'true'}),
            $('<br />'),
            place.max_guest + ' Guests'
          ),
          $('<div>', {'class': 'number_rooms'}).append(
            $('<i>', {'class': 'fa fa-bed fa-3x', 'aria-hidden': 'true'}),
            $('<br />'),
            place.number_rooms + ' Bedrooms'
          ),
          $('<div>', {'class': 'number_bathrooms'}).append(
            $('<i>', {'class': 'fa fa-bath fa-3x', 'aria-hidden': 'true'}),
            $('<br />'),
            place.number_bathrooms + ' Bathroom'
          )
        ),
        $('<div>', {'class': 'description'}).html(place.description)
      ).appendTo($('.places'));
    }
  });
});
