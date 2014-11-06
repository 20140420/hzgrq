// JavaScript Document
/*************************************************************
各种插件，by：beihua
**************************************************************/
//弹出窗口开始
$(function() {
    

$.fn.PPDfloatDiv = function(options){
	var opts = $.extend({}, $.fn.PPDfloatDiv.defaults, options); 
	//获取参数
	var o = $.meta ? $.extend({}, opts, $this.data()) : opts; 
	//解析参数
	$("#modalbackdroptrue").remove();
	if(o.floatwidth!=560){
	$("body").append("<div id=\"modalbackdroptrue\" style='width:"+o.floatwidth+"px; left:"+o.left+"%;' class=\"modal hide fade\"></div>")
	}else{
		$("body").append("<div id=\"modalbackdroptrue\"  class=\"modal hide fade\"></div>")
		}
	if(o.btnshow == true){
	var float_cont="<div class=\"modal-header\"><a class=\"close\" data-dismiss=\"modal\">×</a><h3>"+o.handertext+"</h3>";
		if(o.subhead){
		float_cont+="<span class='float_subhead'>"+o.subhead+"</span>";
		}
		float_cont+="</div><div class=\"modal-body\" style='max-height:"+o.floatheight+"px'>"+o.context+"</div><div style=\"text-align:"+o.btnalign+"\" class=\"modal-footer\">";
		if(o.floattruebtn != false){
		    float_cont += "<span>" + o.beforetrue + "</span><input type=\"button\" id=" + o.truebtnid + "  style='padding:10px 40px 10px 40px' class=\"btn btn-primary\" value=" + o.floattruebtn + " /><span>" + o.aftertrue + "</span>";
		}
		if(o.floatfalsebtn != false){
		float_cont+="<a href=\"javascript:void(0)\" class=\"btn\"  style='padding:10px 30px 10px 30px' data-dismiss=\"modal\">"+o.floatfalsebtn+"</a></div>";
		}
	$("#modalbackdroptrue").html(float_cont);
	}else{
		//尚未加入MIN
		if(o.share == false){
		$("#modalbackdroptrue").html("<div class=\"modal-header\"><a class=\"close\" data-dismiss=\"modal\">×</a><h3>"+o.handertext+"</h3></div><div class=\"modal-body\"  style='max-height:"+o.floatheight+"px'>"+o.context+"</div>");
		}else{
		$("#modalbackdroptrue").html("<div class=\"modal-header\"><a class=\"close\" data-dismiss=\"modal\">×</a><h3>"+o.handertext+"</h3></div><div class=\"modal-body\"  style='max-height:"+o.floatheight+"px'>"+o.context+"</div><div style=\"text-align:"+o.btnalign+"\" class=\"modal-footer\"><div><span style=\"float:left;line-height:32px;\">分享到：</span><a href=\"javascript:void(0)\" id=\"qzoneshare\" style=\"background:url(http://www.ppdaicdn.com/img/share.png) 0 -32px no-repeat;display:block;width:32px;height:32px;float:left;margin-right:5px;\" title=\"分享到QQ空间\"></a> <a href=\"javascript:void(0)\" id=\"sinaweibo\" style=\"background:url(http://www.ppdaicdn.com/img/share.png) 0 0 no-repeat;display:block;width:32px;height:32px;float:left;margin-right:5px;\" title=\"分享到新浪微博\"></a> <a href=\"javascript:void(0)\" id=\"qqweibo\" style=\"background:url(http://www.ppdaicdn.com/img/share.png) 0 -1760px no-repeat;display:block;width:32px;height:32px; float:left;margin-right:5px;\" title=\"分享到腾讯微博\"></a></div></div>");
		}
	}
	$('#modalbackdroptrue').modal({
      backdrop:o.floatbgtype,//true有背景，false无背景
	  keyboard:o.keyboards,//true按ESC键关闭浮动窗口，false取消绑定
	  show:true//默认显示，无需改动
    });
}
//绑定PPDfloatDiv方法的参数，有默认值
$.fn.PPDfloatDiv.defaults = {
    btnshow: true,//底部按钮是否显示
    floatbgtype: false,//是否带有背景
    floattruebtn: '提交',//确定按钮
    floatfalsebtn: '关闭',//取消按钮
    handertext: '默认标题',//标题
    subhead: '',//副标题
    context: 'TEXT',//内容
    loadingimg: true,
    keyboards: true,//ESC关闭浮动窗口
    btnalign: 'right',//底部btn位置
    truebtnid: 'turebtn',
    beforetrue: "",//by huihui 确定按钮前加的dom
    aftertrue: "",//by huihui 确定按钮前加的dom
	floatwidth:560,//窗口宽度
	share:false,//是否显示分享按钮
	left:45,//定位
	floatheight:400//高度
  }; 
//弹出窗口结束

//我的账户引导图开始
$.fn.PPDydDiv = function(options){
	var opts = $.extend({}, $.fn.PPDydDiv.defaults, options); 
	//获取参数
	var o = $.meta ? $.extend({}, opts, $this.data()) : opts; 
	//解析参数
	var ydhtml="<div id="+o.id+" style=\"position:relative; top:"+o.top+"px; left:"+o.left+"px;\">";
	if(o.upordown == 'up'){
		ydhtml+="<div style=\"background:url(http://www.ppdaicdn.com/img/accoundbind/yd_jt.png) 0 0  no-repeat; height:100px; width:80px; position:absolute; left:85px; top:0;\"></div>"
		}else if(o.upordown == 'down'){
			ydhtml+="<div style=\"background:url(http://www.ppdaicdn.com/img/accoundbind/yd_jt.png) 0 -250px no-repeat; height:100px; width:120px; position:absolute; left:0; top:210px;\"></div>"
		}
	ydhtml+="<div style=\"background:url(http://www.ppdaicdn.com/img/accoundbind/yindao.png) 0 0 no-repeat; width:367px; height:165px; display:block; overflow:hidden; padding-top:50px; position:absolute; top:70px; left:80px;\">";
	ydhtml+="<h4 style=\" color:#f19c1c; margin-top:20px; font-size:22px; font-weight:normal; text-align:center;\">"+ o.title +"</h4>";
	ydhtml+="<div style=\"color:#f19c1c; font-size:16px; text-align:center;  width:260px; margin:0 auto;margin-top:15px;\">"+o.content+"</div>";
	ydhtml+="<a href=\"javascript:void(0)\" style=\"display:block; width:90px; height:35px;position:absolute; top:155px; left:120px;\" id="+o.ikonwid+"></a>";
	ydhtml+="<a href=\"javascript:void(0)\" style=\"display:block; width:45px; height:35px;position:absolute; top:2px; left:225px;\" id="+o.closeid+" ></a>";
	ydhtml+="</div></div>";
	$('#content_nav').append(ydhtml);
	$('#'+o.closeid).click(function (){
			$("#"+o.id).remove();
		})
}
//绑定PPDydDiv方法的参数，有默认值
$.fn.PPDydDiv.defaults = {    
   title:'',//标题
   content:'',//内容
   id:'yd_float',//div的层
   top:'0',//定位
   left:'0',//定位
   upordown:'up',//箭头方向up上 down下
   closeid:'',//关闭按钮
   ikonwid:''//我知道了按钮
  };
//我的账户引导图结束


//
////AjaxJosn Get请求开始
//$.fn.PPD_POST = function (options , callback){
//	
//	var opts = $.extend({}, $.fn.PPD_POST.defaults, options);
//	var o = $.meta ? $.extend({},opts. $this.data()):opts;
//    
//    $(this).click(function() {
//		var data = {}
//		$(o.Dom_nav).find('input').each(function (){
//			 data[$(this).attr('name')] = $(this).val()
//			})
//		if($(o.Dom_nav).find('select').length>0){
//				$(o.Dom_nav).find('select').each(function (){
//					 data[$(this).attr('name')] = $(this).find("option:selected").val()
//			})
//		}
//		
//		var gateway = new servicestack.ClientGateway(o.Url , o.toclass);
//       	//put方法，接收参数判断
//		var classto = o.toclass;
//	
//		if(o.actiontype == 'put'){
//		gateway.putToService(
//                    {
//					 classto: data
//                    }, function(e) {
//                       alert(1);
//                    }, function(e) {
//                      alert(e.ResponseStatus.Message);
//                    }
//                );
//		}
//		//delete方法，接收参数判断
//		if(o.actiontype == 'delete'){
//			gateway.deleteToService(
//                    {
//					 classto: data
//                    }, function(e) {
//                       alert(1);
//                    }, function(e) {
//                      e.ResponseStatus.Message;
//                    }
//                );
//			}
//		//post方法，接收参数判断
//		if(o.actiontype == 'post'){
//			gateway.postToService(
//                    {
//					classto: data
//                    }, function(e) {
//                  	  errormessage = e.ResponseStatus.Message;
//					  alert(errormessage);
//					  
//					  if(o.toclass == 'Auth'){
//					  if(o.fun)
//						{
//							o.fun('suecss');
//						}
//					  }
//                    }, function(e) {
//						
//                   	   errormessage = e.ResponseStatus.ErrorCode;
//					   if(o.fun)
//						{
//							o.fun(errormessage);
//						}
//                    }
//                );
//			
//			}
//		//get方法，接收参数判断
//		if(o.actiontype == 'get'){
//			gateway.getToService(
//                    {
//					 classto : data
//                    }, function(e) {
//                       alert(1);
//                    }, function(e) {
//                      //alert(e.ResponseStatus.Message);
//                    }
//                );
//			}
//      });
//	}
//$.fn.PPD_POST.defaults = {
//	Url:'javascritp:void(0)',
//	Dom_nav:null,
//	actiontype:null,
//	toclass:'Auth',
//	fun:function (){}
//	}
////AjaxJosn Get请求结束

//意见反馈
$.fn.PPDqustion = function(options){
	var opts = $.extend({}, $.fn.PPDqustion.defaults, options); 
	//获取参数
	var o = $.meta ? $.extend({}, opts, $this.data()) : opts; 
	//解析参数
	var html = '<div class="fixedBtn"><span rel="nofollow" href="javascript:void(0)" class="feedback" title="欢迎给拍拍贷找问题和提建议～">意见反馈</span>';//a换成span
  html+='<div class="feedbackTips fb-open hide green" style="display: none; "> 反馈已发送！ </div>';
  html+='<div class="feedbackCnt fb-open" style=" display:block;margin-right: -350px">';
  html+="<div style='margin-bottom: 8px;font-weight: bold;'>您的反馈对我们至关重要！</div>";
  html+="<textarea name=\"feedbackCnt\" id="+o.TextId+" placeholder="+o.tit+"></textarea>";
  html+="<span class=\"button button-green button-medium\" id="+o.BtnId+" style='color:#fff'>提交反馈</span><span style='margin-left:5px;' class='fankui_emsg'></span></div>";
  html+='</div>';
  $('body').append(html);
  var isIE=!!window.ActiveXObject;
  var isIE6=isIE&&!window.XMLHttpRequest;
  if (isIE){
	if (isIE6){
		$(".feedback").click(
		function (){
			if($(".fixedBtn").css('margin-right') == "0px"){
				if6hide()
			}else{
				if6show()
			}
		}
	)
	}else{
		
		$(".feedback").live('click',
			function (){
				if($(".fixedBtn").css('right') == "0px"){
					hide();
				}else{
					show();
				}
			}
		)
	}
  }else{
		
		$(".feedback").live('click',
			function (){
				if($(".fixedBtn").css('right') == "0px"){
					hide();
				}else{
					show();
				}
			}
		)
	}
	$(".feedback").click(function(){
			$("#submitbtn").click(function(){
				if($("#Description").val().length >= 1 && $("#Description").val().length <= 100){
					$("#Description").val('');
					$(".feedbackCnt").bind('mouseleave',function(){
						
						
						$(".fankui_emsg").text('');
						hide();
					
						})
				}else if($("#Description").val().length <= 0 || $("#Description").val().length > 100){
				}
			})
		})

window.onscroll=function()
	{ 
		var a=document.documentElement.scrollTop
		if(a<100){
			$("#topbtns").hide();
		}
		else{
			$("#topbtns").show();
		}
	} 
}
//绑定PPDqustion方法的参数，有默认值
$.fn.PPDqustion.defaults = {    
  sBtnId:'btn',
  TextId:'text',
  tit:''
};
function show(){
$(".fixedBtn").animate({right: '0px'}, "slow");
};
	
function hide(){
		$(".fixedBtn").animate({right: '-350px'}, "slow");
		$(".feedbackCnt").unbind('mouseleave')
		setTimeout("refreshed()",1000);
}
function refreshed(){
		$(".feedbackTips").hide();
		$(".feedbackCnt").show();
}
function if6hide(){
	$(".fixedBtn").animate({marginRight: '-350px'}, "slow");
	setTimeout("refreshed()",1000);
}
function if6show(){
	$(".fixedBtn").animate({marginRight: '0px'}, "slow");
}
//意见反馈
});