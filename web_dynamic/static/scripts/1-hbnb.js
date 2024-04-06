$(document).ready(function() {
    let amenityIDs = {};

    $('input[type="checkbox"]').change(function() {
        let amenityID = $(this).attr('data-id');
        if ($(this).is(':checked')) {
            amenityIDs[amenityID] = true;
        } else {
            delete amenityIDs[amenityID];
        }

        let amenitiesList = Object.keys(amenityIDs).join(', ');
        $('.amenities h4').text('Amenities: ' + amenitiesList);
    });
});
