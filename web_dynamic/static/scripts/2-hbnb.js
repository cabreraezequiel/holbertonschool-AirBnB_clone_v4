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
});
