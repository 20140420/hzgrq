// JavaScript Document
//主要功能 bybeihua
var mousex;
var mousey;
$(document).ready(function () {
    //登入状态
    toolbar()
    //tab切换
    main_tab()
    //计算高度
    teacher();
    autoHeight();
    //首页他发布切换
    tab_he();
    //借款列表模块 开关效果
    list_on_off();
    //table边框兼容
    tableauto();
    //banner切换
    bannerauto();
    setTipshow();
    $(".fen_ye_nav").width($(".fen_ye_nav").find('table').width() + 10);
    if ($("#txtUserName").length > 0) {
        $("#txtUserName").change(function () {
            $(this).attr('isreged', 'true');
        });
    }
    if ($("#txtEmail").length > 0) {
        $("#txtEmail").change(function () {
            $(this).attr('isreged', 'true');
        });
    }
});
    function setTipshow() {
        if ($.trim($("#inmoney").val()) != "") {
            $("#tipshow").hide();
        } else {
            $("#tipshow").show();
        }
    }
//身份证号码验证 begin
function isIdCardNo(num) {
    num = num.toUpperCase(); //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。        
    if (! (/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {

        return false;
    } //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
    //下面分别分析出生日期和校验位 
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re); //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {

            return false;
        } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。        
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0,
            i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re); //检查生日日期是否正确 
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            return false;
        }
        else { //检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0,
            i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {

                return false;
            }
            return true;
        }
    }
    return false;
}
//身份证号码验证 end
//角色切换begin
$("#part").find("input[type='radio']").click(function() {
    if ($(this).val() == '4') {
        $("#BorrowerRole").show();
        $("#policy").text('《借入协议》').attr('href', 'http://www.ppdai.com/help/borrower_policy')
    };
    if ($(this).val() == '3') {
        $("#BorrowerRole").hide();
        $("#policy").text('《借出协议》').attr('href', 'http://www.ppdai.com/help/lender_policy')
    };
    $("#reg_error_box_Employment_status").hide();
});
//角色切换end
//计算底部位置 begin
function autoHeight() {
    if (!$("#content_nav").attr("dta") || $("#content_nav").attr("dta") != "done") {
        if ($("#content_nav").attr("dta") == "user") {
            return false
        };
        var windowheight = $(document).height();
        var bottom = 172;
        var regheight = (windowheight - bottom - 100) / 11;
        var contextheight = $("#content_nav").height();
        if (windowheight > contextheight) {
            if ($("#content_nav").attr('dta') == 'resetEmail') {
                $("#content_nav").animate({
                    paddingTop: regheight - 60 + 'px'
                },
                "500");
                $("#content_nav").height(windowheight - bottom - 18 - regheight)
            } else {
                if ($("#content_nav").attr("dta") == "errorpage") {
                    $("#content_nav").animate({
                        paddingTop: regheight + 53 + "px"
                    },
                    "500");
                    $("#content_nav").height(windowheight - bottom - 100 - regheight)
                } else {
                    if ($("#content_nav").attr("dta") == "login") {
                        $("#content_nav").animate({
                            paddingTop: regheight + "px"
                        },
                        "500");
                        $("#content_nav").height(windowheight - bottom - 60 - regheight)
                    } else {
                        if ($("#content_nav").attr("dta") == "rong360") {
                            $("#content_nav").animate({
                                paddingTop: regheight - 30 + "px"
                            },
                            "500");
                            $("#content_nav").height(windowheight - bottom - 114 - regheight)
                        } else {
                            if ($("#content_nav").attr("dta") == "register") {
                                $("#content_nav").animate({
                                    paddingTop: 15
                                },
                                "500");
                                $("#content_nav").height(windowheight - bottom - 18 - regheight)
                            } else if ($("#content_nav").attr('dta') == 'paybacklend' || $("#content_nav").attr('dta') == 'about' || $("#content_nav").attr('dta') == 'firstuser') {
                                if ($('#next_tab_content').height() > $(window).height()) {
                                    $("#content_nav").css("height", 'auto');
                                } else {
                                    $("#content_nav").height(windowheight - bottom - 28);
                                };
                                if ($("#content_nav").attr('dta') == 'firstuser') {
                                    $("#content_nav").css('min-height', windowheight - bottom - 28 + 'px');
                                }
                            } else {
                                $("#content_nav").height(windowheight - bottom - 28)
                            }
                        }
                    }
                }
            }
        };
    }
}
//计算底部位置 end
//main tab切换效果 begin
function main_tab() {
    var httphost = 'http://www.ppdai.com'
    $("#tabIcon").find('li').find('a').hover(function() {
			var thisicon = $(this)
			$(this).css('border-bottom','3px solid #004098')
			var nowleft =$(this).offset().left;
			$(".second_levelmenu").remove();
            thisicon.append("<div class=\"second_levelmenu\" id=secondlv" + $(this).attr('id') + "></div>");
            var html=null;
			if($(this).attr("id") == "10001"){
			    html = '<a href="' + httphost + '/lend">我要借出</a><a href="' + httphost + '/product/list">产品专区</a><a href="' + httphost + '/help/howtolend">如何借出</a><a href="' + httphost + '/help/principalprotection">本金保障</a>';//<a href="' + httphost + '/financial/product">拍拍宝</a>
			}else if($(this).attr("id") == "10002"){
				html = '<a href="' + httphost + '/borrow">我要借入</a><a href="' + httphost + '/help/howtoborrow.html">如何借入</a><a href="' + httphost + '/borrow/interestcalculate">利息计算器</a>';
			}else if($(this).attr("id") == "10004"){
			    html = '<a href="' + httphost + '/help/aboutus.htm">关于我们</a><a href="' + httphost + '/help/howworks">工作原理</a><a href="' + httphost + '/help/fees">资费说明</a><a href="' + httphost + '/job/campus">校园招聘</a>';
			}
			if(html!=null){
			$(".second_levelmenu").css('top',$(this).offset().top+33).css('left',nowleft-17)
			$(".second_levelmenu").html(html).slideDown().attr('displayview','show')
			$(".second_levelmenu").find('a').each(function (){
			    $(this).mouseover(function () { $(this).css('color', '#004098') }).mouseleave(function () { $(this).css('color', '#333') })
			})
			}
    },function (){
        $(".second_levelmenu").hide();	
		if ($(this).attr("class") != "tabon") {
		$(this).css('border-bottom','none')
		}
	})
if ($(".PPD_login_nav").length >= 1) {
    var ptop = $('.PPD_index_banner').offset().top+10;
    if ($("#login_after").length >= 1) {
        $(".PPD_login_nav").css("height", "238px");
        ptop = $('.PPD_index_banner').offset().top + 30;
    }
    $(".PPD_login_nav").css('top', ptop).css('left', $('.center980').offset().left + 720);
	$(".PPD_login_nav").show();
	}
}
//获取鼠标坐标
//function mousePos(e) {
//    var x, y;
//    var e = e || window.event;
//    return {
//        x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
//        y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
//    };
//};
//function mouseXY(e) {
//    var mouseX = mousePos(e).x;
//    var mouseY = mousePos(e).y;
//    if ($(".second_levelmenu").length > 0) {
//        if (mouseX < $("#tabIcon").offset().left || mouseY > $(".second_levelmenu").offset().top + $(".second_levelmenu").height() || mouseY < $("#tabIcon").offset().top + 10 || mouseX > $('#tabIcon').offset().left + $('#tabIcon').width()) {
//			
//        }
//    }
//};
//获取鼠标坐标
//main tab效果 end
//首页他发布 他借出切换效果 begin
function tab_he() {

    if ($('.islend').length > 0) {
        var dota = $("#publiclist");
        var ta_tc = dota.find("ul");
        var dota2 = $("#publiclist2");
        var ta_tc2 = dota2.find("ul");
        var scroll = function(uls) {
            /*复制一次内部的li*/
            var li_h = uls.eq(0).find("li").outerHeight();

            this.copy = function() {
                uls.each(function() {
                    var lis = $(this).find("li");
                    $(this).append(lis.clone());
                    $(this).attr("li_s", lis.size() * 2);
                    $(this).attr("cur_li", lis.size() * 2 - 1);
                });
            };
            this.copy();
            /*移动到最下边的li*/
            this.toLast = function() {
                uls.each(function() {
                    $(this).scrollTop(10000);
                });
            };
            this.toLast();

            var timer = null;
            /*滚动的超时时间*/
            var i = 0;
            /*开始滚动ul数组*/
            function start(i) {
                var cur_ul = uls.eq(i);
                if (cur_ul) {
                    cur_ul.animate({
                        scrollTop: cur_ul.scrollTop() - li_h - 5
                    },
                    function() {
                        var cur_li = parseInt(cur_ul.attr("cur_li"));
                        var li_s = parseInt(cur_ul.attr("li_s"));
                        cur_li--;
                        if ((li_s / 2 - 1) == cur_li) {
                            cur_ul.attr("cur_li", li_s - 1);
                            $(this).scrollTop(10000);
                        } else {
                            cur_ul.attr("cur_li", cur_li);
                        }
                        start(++i);
                    });
                };
            };
            timer = setInterval(function() {
                start(i);
            },
            3000);
        };
        scroll(ta_tc);
        scroll(ta_tc2);
    }
}
//首页他发布 他借出切换效果 end
//table右边框兼容 begin
function tableauto() {
    if ($('.table_nav')) {
        $(".table_nav").find('tr').each(function() {
            $(this).children('td').last().css('border-right', 'none');
        })
    }
}
//table右边框兼容 end
//借款列表模块 开关效果 bengin
function list_on_off() {
    $("#ifborrow , #ifyx").find("div[class='float_icon']").click(function() {
        if ($(this).css('margin-left') == '3px') {
            $(this).animate({
                marginLeft: '25px'
            },
            "fast");
            $(this).parent().attr('class', 'ifborrow_true')
            if ($(this).attr('id') == 'ifborrow_icon') {

                $('#DidIBid').attr("checked", true);
            } else if ($(this).attr('id') == 'ifyx_icon') {
                $('#PriorityPlan').attr("checked", true);
            }
        } else if ($(this).css('margin-left') == '25px') {
            $(this).animate({
                marginLeft: '3px'
            },
            "fast");
            $(this).parent().attr('class', 'ifborrow_false')
            if ($(this).attr('id') == 'ifborrow_icon') {
                $('#DidIBid').attr("checked", false);
            } else if ($(this).attr('id') == 'ifyx_icon') {
                $('#PriorityPlan').attr("checked", false);
            }
        }
    })
}
//借款列表模 块开关效果 end
//倒计时beigin
//需要在页面上设置变量 var iTime =10 时间
var iTime = 60;
function RemainTime() {
    $(".huoqu_btn[name='huoqu']").attr('disabled', true);
    var Account;
    var iDay, iHour, iMinute, iSecond;
    var sDay = "",
    sHour = "",
    sMinute = "",
    sSecond = "",
    sTime = "";

    if (iTime >= 0) {
        //     iDay = parseInt(iTime/24/3600);
        //        if (iDay > 0)
        //        {
        //            sDay = iDay + "天";
        //        }
        //        iHour = parseInt((iTime/3600)%24);
        //        if (iHour > 0){
        //            sHour = iHour + "小时";
        //        }
        //        iMinute = parseInt((iTime/60)%60);
        //        if (iMinute > 0){
        //            sMinute = iMinute + "分";
        //        }
        iSecond = parseInt(iTime);
        if (iSecond >= 0) {
            sSecond = iSecond + "秒后重新获取";
        }
        if ((sDay == "") && (sHour == "")) {
            sTime = sSecond;
        }
        else {
            sTime = sDay + sHour + sMinute + sSecond;
        }
        if (iTime == 0) {
            clearTimeout(Account);
            sTime = "请重新获取";
            iTime = 180;
            $(".huoqu_btn[name='huoqu']").attr('disabled', false)
        }
        else {
            Account = setTimeout("RemainTime()", 1000);
        }

        iTime = iTime - 1;

    }
    else {
        sTime = "请重新获取";
        $(".huoqu_btn[name='huoqu']").attr('disabled', false)
    }

    $(".huoqu_btn[name='huoqu']").val(sTime);
}
//倒计时end
//提示操作 begin
function teacher() {
    if ($("#isZero").length > 0) {

        $("#isZero").css('top', $('.userinfo_nav').offset().top + 85).css('left', $('.userinfo_nav').offset().left + 90)
    }
}
//提示操作 end
//文本框默认值
function txtFocus(el) {
    if (el.defaultValue == el.value) {
        el.value = '';
    }
}

function txtBlur(el) {
    if (el.value == '') {
        el.value = el.defaultValue;
    }
}
function cls() {
    with(event.srcElement) {
        if (value == defaultValue) {
            value = ""
        }
    }
}
function res() {
    with(event.srcElement) {
        if (value == "") {
            value = defaultValue
        }
    }
}
//文本框默认值
//一次提交 begin
var submitcount = 0;
function submitOnce(form) {
    if (submitcount == 0) {
        submitcount++;
        return true;
    } else {
        alert("正在操作，请不要重复提交，谢谢！");
        setTimeout('submitcount=0', 1000)
        return false;
    }
}
//一次提交 end
//我的账户安全等级 begin 
function safeLevel(safeLevel) {
    if (safeLevel == 1 || safeLevel == 2) {
        $("#AnQuanlevel").addClass('level1');
    } else {
        if (safeLevel == 3) {
            $("#AnQuanlevel").addClass('level2');
        } else {
            if (safeLevel == 4) {
                $("#AnQuanlevel").addClass('level3');
            }
        }
    }
}
//我的账户安全等级 end
//判断上传文件大小 begin
// var maxsize = 4*1024*1024;//2M
//  var errMsg = "上传的附件文件不能超过4M";
//  var tipMsg = "您的浏览器暂不支持计算上传文件的大小，确保上传文件不要超过4M，建议使用IE、FireFox、Chrome浏览器。";
//  var  browserCfg = {};
//  var ua = window.navigator.userAgent;
//  if (ua.indexOf("MSIE")>=1){
//   browserCfg.ie = true;
//  }else if(ua.indexOf("Firefox")>=1){
//   browserCfg.firefox = true;
//  }else if(ua.indexOf("Chrome")>=1){
//   browserCfg.chrome = true;
//  }
//  function checkfile(fileuploade){
//   try{
//     var obj_file = document.getElementById(fileuploade);
//     if(obj_file.value==""){
//      alert("请先选择上传文件");
//      return;
//     }
//     var filesize = 0;
//     if(browserCfg.firefox || browserCfg.chrome ){
//      filesize = obj_file.files[0].size;
//     }else if(browserCfg.ie){
//      var obj_img = document.getElementById('tempimg');
//      obj_img.dynsrc=obj_file.value;
//      filesize = obj_img.fileSize;
//     }else{
//      alert(tipMsg);
//       return;
//     }
//     if(filesize==-1){
//      alert(tipMsg);
//      return;
//     }else if(filesize>maxsize){
//      alert(errMsg);
//      return;
//    }else{
//     alert("文件大小符合要求");
//      return;
//    }
//   }catch(e){
//    alert(tipMsg);
//   }
//  }
//判断上传文件大小 end
//只能输入数字 begin
function chkPrice(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, "");

    obj.value = obj.value.replace(/^\./g, "");

    obj.value = obj.value.replace(/\.{2,}/g, ".");

    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
}
function chkLast(obj) {
    if (obj.value.substr((obj.value.length - 1), 1) == '.') obj.value = obj.value.substr(0, (obj.value.length - 1));
}
//只能输入数字 end
//快速投标金额加减选择 begin
function bidhowmoney() {
    $(".bidhowmoney").find('a').each(function() {
        var money = $(this).parent().find('input');
        $(this).click(function() {
            if ($(this).attr("class") == "addmoney") {
                if (money.val() > 19900) {
                    return
                }
                try {
                    var pt = _gat._getTracker("UA-3635664-1");
                    pt._trackPageview("/okclick/increase");
                } catch(err) {}
                var addnum = Number(money.val()) + 100;
                money.val(addnum);
            } else if ($(this).attr('class') == 'remoney') {
                try {
                    var pt = _gat._getTracker("UA-3635664-1");
                    pt._trackPageview("/okclick/decrease");
                } catch(err) {}
                if (money.val() > 100) {
                    var renum = Number(money.val()) - 100;
                    money.val(renum);
                } else {
                    money.val(0);
                }
            }
        })
    })
};
$(document).ready(function() {
    $("textarea").keyup(function() {
        $(this).val(removeHTMLTag($(this).val()));
    }).blur(function() {
        $(this).val(removeHTMLTag($(this).val()));
    })
});
function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, '');
    str = str.replace(/[ | ]*\n/g, '\n');
    str = str.replace(/&nbsp;/ig, '');
    return str;
}
//快速投标金额加减选择 end


//toolbar
function toolbar(){
	$(".PPD_login_status .tool_nav").find('a').each(function (){
			if($(this).attr('name')!=undefined){
					var toolicon= $(this);
					toolicon.hover(function (){
					toolicon.addClass('on');
					$(".tool_list").remove();
					toolicon.append('<div class="tool_list" style="display:none"></div>');
					if($(this).attr('name') == 'tool_user'){
					    var tool_cont = '<ul><li><a href="http://www.ppdai.com/inpour">充值</a></li><li><a href="http://www.ppdai.com/bank/cashwithdrawal">提现</a></li><li class="last"><a href="http://ac.ppdai.com/user/logout">退出</a></li></ul>';
					}else if($(this).attr('name') == 'tool_help'){
						var tool_cont ='<ul><li><a href="http://help.ppdai.com">帮助中心</a></li><li><a href="http://www.ppdai.com/consult">客服中心</a></li></ul>';
						}
					toolicon.find('em').addClass('icon_on');
					$('.tool_list').append(tool_cont).css('top',toolicon.offset().top+30).css('left',toolicon.offset().left).css('width',$(this).width()+7).slideDown('fast');
				},function (){
					toolicon.find('em').removeClass('icon_on');
					toolicon.removeClass('on');
					$('.tool_list').remove();
				})
			}
	})
}
function bannerauto(){
	if($("#kinMaxShow").length>=1){
$("#kinMaxShow").kinMaxShow({
		height:300,
		button:{
			showIndex:false,
			normal:{background:'url(http://www.ppdaicdn.com/img/banner/button.png) no-repeat -14px 0',marginRight:'8px',border:'0',right:'44%',bottom:'20px'},
			focus:{background:'url(http://www.ppdaicdn.com/img/banner/button.png) no-repeat 0 0',border:'0'}
		},
		callback:function(index,action){
		//	switch(index){
//				case 0 :
//				if(action=='fadeIn'){
//					$(this).find('.sub_1_1').animate({left:'70px'},600)
//					$(this).find('.sub_1_2').animate({top:'60px'},600)
//					
//				}else{
//					$(this).find('.sub_1_1').animate({left:'110px'},600)
//					$(this).find('.sub_1_2').animate({top:'120px'},600)
//					
//				};
//				break;
//						
//				case 1 :
//				if(action=='fadeIn'){
//					$(this).find('.sub_2_1').animate({left:'-100px'},600)
//					$(this).find('.sub_2_2').animate({top:'60px'},600)
//				}else{
//					$(this).find('.sub_2_1').animate({left:'-160px'},600)	
//					$(this).find('.sub_2_2').animate({top:'20px'},600)
//				};
//				break;
//						
//				case 2 :
//				if(action=='fadeIn'){
//					$(this).find('.sub_3_1').animate({right:'350px'},600)
//					$(this).find('.sub_3_2').animate({left:'180px'},600)
//				}else{
//					$(this).find('.sub_3_1').animate({right:'180px'},600)	
//					$(this).find('.sub_3_2').animate({left:'30px'},600)
//				};
//				break;											
//			}
		}
	
	});
	}
}

//首页login
$(window).resize(function () {
    if ($(".PPD_login_nav").length >= 1) {
        var ptop = $('.PPD_index_banner').offset().top+10;
        if ($("#login_after").length >= 1) {
            $(".PPD_login_nav").css("height", "238px");
            ptop = $('.PPD_index_banner').offset().top + 30;
        }
        $(".PPD_login_nav").css('top', ptop).css('left', $('.center980').offset().left + 720);
    }
})
	
//新注册验证
 function RegAuth(str) {
			if(str == 'UserName' ){
				return T_user()
			}else if(str == 'Email' && $("#txtEmail").length>0){
				return T_email()
			}else if(str == 'Password' ){
				return T_pwd()
			}else if( str == 'all'){
				T_user();
				T_email();
				T_pwd();
				T_agree();
				if($("#txtEmail").length>0){
					if(T_user() == true &&T_email()==true&&T_pwd()==true&&T_agree()==true && $("#txtUserName").attr('isreged')!='true'&& $("#txtEmail").attr('isreged')!='true'){
						return true;
					}else{
						return false;	
					}
				}else{
					if(T_user() == true &&T_pwd()==true&&T_agree()==true && $("#txtUserName").attr('isreged')!='true'){
				  	return true;
				}else{
					return false;	
				}
				}
			}
}
 function T_user() {
     // "admin", "bank", "all", "money", "ppdai", "system", "ppd" 
     var userreg = /^\w*[a-zA-Z]+\w*$/;
     var startreg = /^(?!^(?:admin|bank|all|money|ppdai|system|ppd))(?=.*?[a-zA-Z_])[\da-zA-Z_]+$/i;
	if($("#txtUserName").val() == ""){	
					$("#txtUserName").parent('td').next().find('span').html('请输入用户名').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else if($("#txtUserName").val().length < 3 || $("#txtUserName").val().length > 15 ){
					$("#txtUserName").parent('td').next().find('span').html('用户名长度必须在3至15个字符之间').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else if (!userreg.test($("#txtUserName").val())) {
	    $("#txtUserName").parent('td').next().find('span').html('用户名可由字母，数字和下划线组成，且必须包含字母').addClass('reg_type_e').removeClass('reg_type_s');
	    return false;
				} else if (!startreg.test($("#txtUserName").val())) {
				    $("#txtUserName").parent('td').next().find('span').html('用户名不可以以 "admin", "bank", "all", "money", "ppdai", "system", "ppd"开头').addClass('reg_type_e').removeClass('reg_type_s');
				    return false;
	}
				else {
				
				    if ($("#txtUserName").attr('isreged') != 'false') {
				        $.getJSON("http://ac.ppdai.com/registercheck?callback=?", { name: 'userName', value: $("#txtUserName").val(), _: Math.random() }, function (data) {
				            if (data.Code != 1) {
							if($("#txtUserName").attr('third')!='false'){
								$("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');	
							}else{
								$("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="javascript:void(0)" id="gogl">去关联</a>').addClass('reg_type_e').removeClass('reg_type_s');
							    $("#gogl").live('click', function() {
							        newregBD1($(".register_headerlink_nav"));
							    });
							}
						    $("#txtUserName").attr('isreged', 'true');
						}else{
							$("#txtUserName").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
						    $("#txtUserName").attr('isreged', 'false');
						}
					});
					}
					return true;
				}
	}
function T_pwd(){
	var pwdreg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
			if($("#txtPassword").val() == ""){	
				$("#txtPassword").parent('td').next().find('span').html('请输入密码').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else if($("#txtPassword").val().length < 8 || $("#txtPassword").val().length > 16 ){
					$("#txtPassword").parent('td').next().find('span').html('密码长度必须在8至16个字符之间').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else if(!pwdreg.test($("#txtPassword").val())){
					$("#txtPassword").parent('td').next().find('span').html('密码可由字母，数字和特殊字符组成，且必须包含字母和数字').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
					}else{
					$("#txtPassword").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');	
					return true;
					}
				}
function T_email(){
	var rex =/^[\w-\.]+@(?:[A-Za-z0-9-]+\.)+[a-z]+$/;
		if($("#txtEmail").val() == ""){	
					$("#txtEmail").parent('td').next().find('span').html('请输入邮箱地址').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else if(!rex.test($("#txtEmail").val())){
					$("#txtEmail").parent('td').next().find('span').html('请输入正确的邮箱地址').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else{
					if($("#txtEmail").attr('isreged')!='false'){
					    $.getJSON("http://ac.ppdai.com/registercheck?callback=?", { name: 'email', value: $("#txtEmail").val(), _: Math.random() }, function (data) {
					        if (data.Code != 1) {
								$("#txtEmail").parent('td').next().find('span').html('邮箱已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');
					            $("#txtEmail").attr('isreged', 'true');
					        }else{
								$("#txtEmail").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');	
								$("#txtEmail").attr('isreged','false');
							}
						});
					}
					return true;
				}
	}
function T_agree(){
	if($("#agree").attr('checked')!='checked'){
					$("#agree").parent('td').next().find('span').html('请同意服务条款').addClass('reg_type_e').removeClass('reg_type_s');
					return false;
				}else{
					$("#agree").parent('td').next().find('span').html('').removeClass('reg_type_e');
					return true;	
				}
	}
function RegAuth2(str){
			var alt = '';
            var type='s';
            var type2='e';
			var a1 = true;
			var a2= true;
			if(str ==null){
			if ($("#txtUserName").val()=="" ) {
                alt = '请输入用户名';
                type = 'e';
                type2 = 's';
				a1=false;
				$("#txtUserName").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
            }else{
				alt = '';
                type = 's';
                type2 = 'e';
				a1=true;
				$("#txtUserName").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2)
			}
			
			if ($("#txtPassword").val() == "") {
                alt = '请输入密码';
                type = 'e';
                type2 = 's';
				a2=false;
				$("#txtPassword").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
            }else{
				alt = '';
                type = 's';
                type2 = 'e';
				a2=true;
				$("#txtPassword").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
			}
			
			}else{
				if(str == 'UserName'){if($("#txtUserName").val()==""){
				   	alt = '请输入用户名';
					type = 'e';
					type2 = 's';
					a1=false;
					$("#txtUserName").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
				}else{
					alt = '';
					type = 's';
					type2 = 'e';
					a1=true;
					$("#txtUserName").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
				}
				}
				if (str == 'Password'){if($("#txtPassword").val() == "") {
					alt = '请输入密码';
					type = 'e';
					type2 = 's';
					a2=false;
					$("#txtPassword").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
				}else{
					alt = '';
					type = 's';
					type2 = 'e';
					a2=true;
					$("#txtPassword").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
				}
				}
			}
if(a1==true && a2==true){return true}else{return false}	
}


function newregBD1(str){
	 str.html('<a href="javascript:void(0);" class="newregister_h_user" id="btnBind">没有拍拍贷账号</a>');
            $("#auth ,#juese").hide();
            $('.tit').find('td').html('用户名和密码，可直接登录！');
            $("#txtType").val('2');
            $("#btnSubmit").val('绑定');
            $("#txtUserName,#txtPassword").attr('isreg', 'true');
            $("#txtUserName,#txtPassword,#agree").parent('td').next().find('span').text('').removeClass();
	}
function newregBD2(str){
	str.html('<a class="newregister_h_user">已有拍拍贷账号</a>');
            $("#auth ,#juese").show();
            $('.tit').find('td').html('完善以下信息，用户名和密码可直接登录！');
            $("#txtType").val('1');
            $("#btnSubmit").val('注册');
            $("#txtUserName,#txtPassword").removeAttr('isreg');
            $("#txtUserName,#txtPassword,#agree").parent('td').next().find('span').text('').removeClass();
	}