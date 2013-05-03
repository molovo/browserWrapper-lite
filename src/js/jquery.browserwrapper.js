/***********************************

    browserWrapper Lite jQuery Plugin
    Developed by James Dinsdale
    http://www.molovo.co.uk

    This plugin is free to use
    for both personal and
    commercial purposes.

    v0.2 - 03/05/2013

***********************************/

(function ($) {

    //define the browserWrapper plugin
    $.fn.browserWrapper = function (options) {

        //specify the plugins defauls
        var defaults = {
            browserTitle:   'Your Awesome Title',                 //title to appear on tab
            browserURL:     'http://your.awesome.url.com',  //URL to appear in address bar
            favicon:        'http://browserwrapper.molovo.co.uk/img/favicon.png',       //URL for favicon to appear on tab
            filePath:       'browserWrapper-lite/src/',                          //path to browserWrapper
            shadow:         '0px 5px 15px rgba(0,0,0,0.3)'            //adds a box-shadow to the browser, follows CSS syntax, use '0' to remove
        };
        //overwrite the defaults
        var options         = $.extend(defaults, options);

        //set up variables
        var act             = $(this);
        var gui             = $('.browser-gui');
        var border          = $('.browser-window-border');
        var addressBar      = $('.browser-gui .address-bar');
        var height          = act.height();
        var width           = act.width();

        //grab current content of div so that it can be replaced
        var currentContent  = act.html();

        //build the controls based on variables above
        var browserControls = '<div class="browser-gui-controls"><img class="nav-buttons" src="' + defaults.filePath + 'img/nav-buttons.png" /><span class="address-bar"><img class="address-bar-icon" src="' + defaults.filePath + 'img/address-bar-icon.png" /><span class="address-bar-text">' + defaults.browserURL + '</span><img class="address-bar-bookmark" src="' + defaults.filePath + 'img/address-bar-bookmark.png" /></span><img class="nav-button-settings" src="' + defaults.filePath + 'img/nav-button-settings.png" /></div>';
        var windowControls  = '<div class="browser-window-controls"><img class="window-button red" src="' + defaults.filePath + 'img/red-button.png" /><img class="window-button yellow" src="' + defaults.filePath + 'img/yellow-button.png" /><img class="window-button green" src="' + defaults.filePath + 'img/green-button.png" /><span class="tab"><span class="tab-wrapper"><img class="favicon" src="' + defaults.favicon + '" /><span class="tabtext">' + defaults.browserTitle + '</span></span></span></div>';

        //expand div and repopulate with content and browser styling
        act.html('<div class="browser-window-border" style="box-shadow: ' + defaults.shadow  + ';">' + windowControls + '<div class="browser-gui">' + browserControls + currentContent + '</div></div>');
    }
})(jQuery);