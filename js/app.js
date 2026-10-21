$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

