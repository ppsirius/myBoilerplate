$(function() {

    // CSS media query
    var className = 'viewports',
        mediaQuery;

    window.currentDevice = function (device) {
        if (!mediaQuery) {
            mediaQuery = $('.' + className);
            if (!mediaQuery.length) {
                console.log(mediaQuery)
                mediaQuery = $('<div></div>').appendTo($('body')).addClass(className);
            }
        }
        var currentQuery = mediaQuery.css('font-family');
        if (device) {
            return currentQuery === device;
        }
        return device;
    };

    // Media Query for js
    //if (currentDevice('mobile') || currentDevice('tablet')) {
    //
    //}

});