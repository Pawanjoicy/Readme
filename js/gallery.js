function showImagesForEvent(eventId) {
    var images = document.querySelectorAll('.box');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    var eventImages = document.querySelectorAll('.box[data-event="' + eventId + '"]');
    for (var j = 0; j < eventImages.length; j++) {
        eventImages[j].style.display = 'block';
    }
}