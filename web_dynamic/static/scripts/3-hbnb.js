$(function () {
  let amenityCheckBoxes = $(".amenities input");
  let amenities = {};
  for (let i = 0; i < amenityCheckBoxes.length; i++)
  {
    let currentAmenity = amenityCheckBoxes[i]
    $(currentAmenity).change(function () {
      let amenityId = $(currentAmenity).attr('data-id');
      let amenityName = $(currentAmenity).attr('data-name');
      if ($(currentAmenity).is(':checked')) {
	amenities[amenityId] = amenityName;
      } else {
	delete amenities[amenityId];
      }
      $('.amenities h4').text(Object.values(amenities).join(', '));
    });
  }
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('#api-status').addClass('available');
    }
  })
  $.ajax({
    type: "POST",
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function (data) {
      $.each(data, function (i, place) {
	guest_suffix = place.max_guest != 1? 's' : ''
	room_suffix = place.number_rooms != 1? 's' : ''
	bath_suffix = place.number_bathrooms != 1? 's' : ''
	$('.places').append(`<article>
	  <div class="title_box">
	    <h2>${place.name}</h2>
	    <div class="price_by_night">$ ${place.price_by_night}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">${place.max_guest} Guest${guest_suffix}</div>
            <div class="number_rooms">${place.number_rooms} Bedroom${room_suffix}</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${bath_suffix}</div>
	  </div>
          <div class="description">
	    ${place.description}
          </div>
	</article>`)
      });
    }
  })
});
