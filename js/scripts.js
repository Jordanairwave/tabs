$(document).ready(function() {

    tabs.init();
    
    $('.tabs_navigation ul li a').on('click', function(e) {
        e.preventDefault();
        tabs.name = $(this).attr('class');
        tabs.tabsChanger();
    });

});


var tabs = {
    
    name: null,
    wrapper: null,
    totalWrapper: null,
    
    init:function () {
        tabs.wrapper = $('#tab1').height();
        tabs.totalWrapper = tabs.wrapper + 15;
        $('.tabs_wrapper').css({ 'height' : tabs.totalWrapper});
        tabs.reset();
    },
    
    tabsChanger:function () {    
        $('#' + tabs.name).fadeIn(100).siblings().fadeOut(100);
        tabs.wrapper = $('#' + tabs.name).height();
        tabs.totalWrapper = tabs.wrapper + 15;
        $('.tabs_wrapper').animate({ 'height' : tabs.totalWrapper});
        tabs.reset();
    },
    
    reset:function () {
        tabs.name = null;
        tabs.wrapper = null;
        tabs.totalWrapper = null; 
    },

};