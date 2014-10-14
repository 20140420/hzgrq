$(function(){
    $('.nav li').mouseover(function() {
        $(this).addClass("current");
        $(this).find('.subNav').show();
    });
    $('.nav li').mouseleave(function() {
        $(this).removeClass("current");
        $(this).find('.subNav').hide();
    });
    $(document).WIT_SetTab({
        Nav:$('#J_bannerBar>li'),Field:$('#J_bannerPic>li'),Auto:true,CurCls:'current',CrossTime:120,OutTime:150,InTime:150,AutoTime:5000
    });
    function listHover() {
        $(this).addClass('current').siblings().removeClass('current');
    }
    $('#j-charts-designers .item, #j-charts-program .program,#j-charts-industry .program').mouseenter(listHover);
    
    var oScroll2 = $('#history');
    if (oScroll2.length > 0) {
        oScroll2.tinyscrollbar({
            axis: 'x'
        });
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#backtop').fadeIn(500);
        } else {
            $('#backtop').fadeOut(500);
        }
    });
    $('#backtop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        },
        1000, "easeOutExpo");
    });
    $(".casePanel .hd:first").addClass("current");
    $(".casePanel .con:first").show();
    $(".casePanel .hd .hook1").click(function() {
        $(this).parents(".casePanel .hd").next(".con").slideToggle("fast").siblings(".con:visible").slideUp("fast");
        $(this).parents(".casePanel .hd").toggleClass("current");
        $(this).parents(".casePanel .hd").siblings(".casePanel .hd").removeClass("current");
    });

})