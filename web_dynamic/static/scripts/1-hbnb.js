const jquery = require('jquery');
let checked_amenities = [];
$(document).ready(function() {
  if ($('checkbox').is('checked')) {
    console.log("true");
    checked_amenities.push(amenity.id);
  }
  if ($('checkbox').is('checked')) {
    checked_amenities.pop(amenity.id);
  }
});
