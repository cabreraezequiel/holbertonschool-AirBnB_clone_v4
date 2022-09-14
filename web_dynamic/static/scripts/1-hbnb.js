checked_amenities = []
$(document).ready(function() {
    if $('checkbox').prop('checked', true) {
	checked_amenities.push(amenity.id)
    };
    if $('checkbox').prop('checked', false) {
	checked_amenities.pop(amenity.id)
    };
});
