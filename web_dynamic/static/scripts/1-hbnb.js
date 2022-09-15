let checkedAmenities = {};
$(document).ready(function() {
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
