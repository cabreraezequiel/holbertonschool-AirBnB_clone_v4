let checkedAmenities = {};
$(document).ready(function() {
  $('.checkbox').on('input', function() {
    if ($(this).prop('checked')) {
      console.log("true");
	  checkedAmenities[($(this).data('id'))] = ($(this).data('name'));
      //checked_amenities.push(amenity.id);
    }
    if (!$(this).prop('checked')) {
      //checked_amenities.pop(amenity.id);
      console.log("false");
	  delete checkedAmenities[($(this).data('id'))];
	}
    $(".amenities h4").text(Object.values(checkedAmenities).toString(", ")); // MISSING CORRECT DELIMITER
  });
});
