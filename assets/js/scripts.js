var slider = tns({
    container: ".slider",
    prevButton: ".prev",
    nextButton: ".next",
    items: 1,
    loop: true,
    swipeAngle: false,
    speed: 400,
    nav: false,
    responsive: {
        350: {
            items: 1,
            controls: false,
            edgePadding: 60,
        },
        768: {
            controls: true,
            edgePadding: 120,
        },
        992: {
            edgePadding: 240,
        },
    },
});
