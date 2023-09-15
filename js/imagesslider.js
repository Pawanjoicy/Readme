// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}

//   // Hide all slides and reset left property
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     slides[i].style.left = "0"; // Reset left property
//   }

//   // Remove the "active" class from all dots
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Display the current slide and apply left/right transition
//   slides[slideIndex-1].style.display = "block";
//   if (n > slideIndex) {
//     slides[slideIndex-1].style.left = "-100%"; // Slide to the left
//   } else if (n < slideIndex) {
//     slides[slideIndex-1].style.left = "100%"; // Slide to the right
//   }

//   // Add the "active" class to the current dot
//   dots[slideIndex-1].className += " active";
// }

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
// var slideIndex = 0;
// showSlides();
// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 5000); // Change image every 2 seconds
// }