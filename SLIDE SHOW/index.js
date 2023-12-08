let slideIndex = 0;
    let slideshowInterval;

    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        slideshowInterval = setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }

    function plusSlides(n) {
        clearTimeout(slideshowInterval);
        showSlides(slideIndex += n);
    }

    function toggleSlideshow() {
        if (slideshowInterval) {
            clearTimeout(slideshowInterval);
            slideshowInterval = null;
        } else {
            showSlides();
        }
    }