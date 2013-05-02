/***********************************

    browserWrapper Lite jQuery Plugin
    Developed by James Dinsdale
    http://www.molovo.co.uk

    This plugin is free to use
    for both personal and
    commercial purposes.

    v0.1 - 12/10/2012

***********************************/

(function ($) {

    //define the browserWrapper plugin
    $.fn.browserWrapper = function (options) {

        //specify the plugins defauls
        var defaults = {
            browserTitle:   'Your Awesome Title',                 //title to appear on tab
            browserURL:     'http://your.awesome.url.com',  //URL to appear in address bar
            favicon:        'http://browserwrapper.molovo.co.uk/img/favicon.ico',       //URL for favicon to appear on tab
            filePath:       'browserWrapper-lite/',                          //path to browserWrapper
            shadow:         '0px 5px 15px rgba(0,0,0,0.3)',             //adds a box-shadow to the browser, follows CSS syntax, use '0' to remove
            responsive:     'n'                                         // if 'y', reloads page on window.resize to redraw browser window at a different size
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
        var addressBarWidth = width - 154;
        var addressTxtWidth = width - 214;
        var guiHeight       = height + 35;
        var windowHeight    = height + 69;

        //grab current content of div so that it can be replaced
        var currentContent  = act.html();

        //build the controls based on variables above
        var browserControls = '<div class="browser-gui-controls"><img class="nav-buttons" src="' + defaults.filePath + 'src/img/nav-buttons.png" /><span class="address-bar" style="width: ' + addressBarWidth + 'px;"><img class="address-bar-icon" src="' + defaults.filePath + 'src/img/address-bar-icon.png" /><span class="address-bar-text" style="width: ' + addressTxtWidth + 'px;">' + defaults.browserURL + '</span><img class="address-bar-bookmark" src="' + defaults.filePath + 'src/img/address-bar-bookmark.png" /></span><img class="nav-button-settings" src="' + defaults.filePath + 'src/img/nav-button-settings.png" /></div>';
        var windowControls  = '<div class="browser-window-controls"><img class="window-button red" src="' + defaults.filePath + 'src/img/red-button.png" /><img class="window-button yellow" src="' + defaults.filePath + 'src/img/yellow-button.png" /><img class="window-button green" src="' + defaults.filePath + 'src/img/green-button.png" /><span class="tab"><span class="tab-wrapper"><img class="favicon" src="' + defaults.favicon + '" /><span class="tabtext">' + defaults.browserTitle + '</span></span></span></div>';

        //expand div and repopulate with content and browser styling
        act.height(windowHeight).html('<div class="browser-window-border" style="height: ' + windowHeight + 'px; box-shadow: ' + defaults.shadow  + ';">' + windowControls + '<div class="browser-gui" style="height: ' + guiHeight + 'px;">' + browserControls + currentContent + '</div></div>').trigger('refresh');


        if ( defaults.responsive == 'y' ) {
            //refresh page to force browser redraw on resize
            $(window).resize(function(){
                location.reload();
            });
        }

    }
})(jQuery);