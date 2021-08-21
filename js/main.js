$(document).ready(function() {
    let currentFloor = 2;
    const counterUp = $(".counter__up");
    const counterDown = $(".counter__down");
    const floorPath = $(".home__img path");
    const modal = $(".modal");
    const closeButton = $(".button__close");
    const viewFlats = $(".view__flats");


    floorPath.on("mouseover", function() {
        floorPath.removeClass("current__floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });

    floorPath.on("click", toggleModal);

    closeButton.on("click", toggleModal);

    viewFlats.on("click", toggleModal);

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current__floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
        };
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current__floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
        };
    });

    function toggleModal() {
        modal.toggleClass("is__open");
    }
});