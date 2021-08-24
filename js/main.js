$(document).ready(function() {
    let currentFloor = 2;
    const counterUp = $(".counter__up");
    const counterDown = $(".counter__down");
    const floorPath = $(".home__img path");
    const modal = $(".modal");
    const closeButton = $(".button__close");
    const viewFlats = $(".view__flats");
    const flatsPath = $(".flats path");
    const flatsLink = $(".flat__link");


    floorPath.on("mouseover", function() {
        floorPath.removeClass("current__floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });


    flatsPath.on("mouseover", function() {
        removeClass();
        $(`[data-flats-link="${$(this).attr('data-flats')}"]`).toggleClass('current__flat');
    });

    flatsLink.on("mouseover", function() {
        removeClass();
        $(`[data-flats="${$(this).attr('data-flats-link')}"]`).toggleClass('current__flat');
    });

    floorPath.on("click", toggleModal);

    closeButton.on("click", function() {
        toggleModal();
        enableScroll();
    });

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
        disableScroll();
    }

    function removeClass() {
        flatsPath.removeClass("current__flat");
        flatsLink.removeClass("current__flat");
    }

    //Блокировка скролла

    const disableScroll = () => {
        const widthScroll = window.innerWidth - document.body.offsetWidth;

        document.body.dbScrollY = window.scrollY;

        document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
        `
    };

    const enableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY,
        })
    };
});