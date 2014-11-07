// JavaScript Document
$(function() {

    var timeId1 = null;
    var timeId2 = null;
	$('.hasStatusArrow').hover(function(){
	    $(this).addClass('current').children('em').addClass('statusArrowUp');
	    var _this = $(this);
	    timeId1 = setTimeout(function() {
	        _this.children('.subContent').slideDown();
	    },300);
		
	},function(){
	    $(this).removeClass('current').children('em').removeClass('statusArrowUp');
	    clearTimeout(timeId1);
		$(this).children('.subContent').slideUp(0);
	});
	
	var timeId2 = null;
	$('#tabIcon>.hasSubMenu').hover(function () {
	    var _this = $(this);
	    timeId2 = setTimeout(function() {
	        _this.children('.subMenu').stop(true, true).slideDown();
	    },300);
	}, function () {
	    clearTimeout(timeId2);
		$(this).children('.subMenu').stop(true,true).slideUp(0);
	});
	

	
});
window.onload = function() {
    var height = $('.PPD_header_nav').outerHeight(true) + $('.footer').outerHeight(true) + 75;
    if ($(window).height() == $(document).height()) {
        $('.my-frame').animate({
            height: $(window).height() - height
        }, 200);
        $('.main').animate({
            height: $(window).height() - height
        }, 200);
        $('.row').animate({
            height: $(window).height() - height
        }, 200);
    }
}