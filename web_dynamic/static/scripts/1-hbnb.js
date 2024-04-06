$(document).ready(function () {
  const amenityIDs = {};

  $('input[type="checkbox"]').change(function () {
    const amenityID = $(this).attr('data-id');
    if ($(this).is(':checked')) {
      amenityIDs[amenityID] = true;
    } else {
      delete amenityIDs[amenityID];
    }

    const amenitiesList = Object.keys(amenityIDs).join(', ');
    $('.amenities h4').text('Amenities: ' + amenitiesList);
  });
});
