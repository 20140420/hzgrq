/*******************************
 * @author Mr.Think
 * @author blog http://mrthink.net/
 * @2011.02.20
 * @可自由转载及使用,但请注明版权归属
 *******************************/
(function($){
    $.fn.WIT_SetTab=function(iSet){
        /*
         * 多功能选项卡@Mr.Think
         * Nav: 导航钩子；
         * Field：切换区域
         * K:初始化索引；
         * CurCls：高亮样式；
         * Auto：是否自动切换；
         * AutoTime：自动切换时间；
         * OutTime：淡入时间；
         * InTime：淡出时间；
         * CrossTime：鼠标无意识划过时间
         * Ajax：是否开启ajax
         * AjaxFun：开启ajax后执行的函数
         */
        iSet=$.extend({Nav:null,Field:null,K:0,CurCls:'cur',Auto:false,AutoTime:4000,OutTime:100,InTime:150,CrossTime:60},iSet||{});
        var acrossFun=null,hasCls=false,autoSlide=null;
        //切换函数
        function changeFun(n){
            iSet.Field.filter(':visible').fadeOut(iSet.OutTime, function(){
                iSet.Field.eq(n).fadeIn(iSet.InTime).siblings().hide();
            });
            iSet.Nav.eq(n).addClass(iSet.CurCls).siblings().removeClass(iSet.CurCls);
        }
        //初始高亮第一个
        changeFun(iSet.K);
        //鼠标事件
        iSet.Nav.hover(function(){
            iSet.K=iSet.Nav.index(this);
            if(iSet.Auto){
                clearInterval(autoSlide);
            }
            hasCls = $(this).hasClass(iSet.CurCls);
            //避免无意识划过时触发
            acrossFun=setTimeout(function(){
                //避免当前高亮时划入再次触发
                if(!hasCls){
                    changeFun(iSet.K);
                }
            },iSet.CrossTime);
        },function(){
            clearTimeout(acrossFun);
            //ajax调用
            if(iSet.Ajax){
                iSet.AjaxFun();
            }
            if(iSet.Auto){
                //自动切换
                autoSlide = setInterval(function(){
                    iSet.K++;
                    changeFun(iSet.K);
                    if (iSet.K == iSet.Field.size()) {
                        changeFun(0);
                        iSet.K=0;
                    }
                }, iSet.AutoTime)
            }
        }).eq(0).trigger('mouseleave');
    }
})(jQuery);