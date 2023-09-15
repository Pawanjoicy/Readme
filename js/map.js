// Initialize the map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.5074, lng: -0.1278 }, // Replace with your coordinates
        zoom: 15 // Adjust the zoom level as needed
    });

    // Create a marker on the map
    var marker = new google.maps.Marker({
        position: { lat: 51.5074, lng: -0.1278 }, // Replace with your coordinates
        map: map,
        title: 'Our Office'
    });
}

// Select Location button functionality
document.getElementById('select-location').addEventListener('click', function () {
    // You can implement location selection functionality here
    alert('Location selected!');
});
