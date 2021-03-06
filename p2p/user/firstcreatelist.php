<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>创建列表-普通借款标 -理财网-中国首家，最大、最多人使用的互联网金融P2P网络借贷平台。提供小额贷款,短期贷款,个人贷款,自定利率,借期灵活。您还可以成为借出人理财投资,超低门槛，获得高年收益率回报</title>
    <meta name="description" content="理财网，中国首家，最大、最多人使用的互联网金融P2P(人人贷)网络借贷平台。提供小额贷款,短期贷款,个人贷款,抵押,无抵押贷款服务。利率自定,借期灵活。您还可以成为借出人理财借贷投资，获得高年收益率回报，超低门槛，超高收益。作为可信赖的投融资,理财,贷款,信贷平台,理财网助您财富实现增值" />
    <meta name="keywords" content="网络贷款,民间借贷,小额贷款,无抵押贷款,信用贷款,网络借贷,借贷平台,理财网,人人贷,投资理财,个人理财,p2p贷款,贷款,互联网金融,投融资" />
    <link href="http://www.ppdaicdn.com/css/min/bootstrap-min.css?v=2" rel="stylesheet" />
    <link href="http://www.ppdaicdn.com/css/min/validation-min.css" rel="stylesheet" />
    <link href="http://static.guruquan.com/skin/css/cssnext/imgareaselect-animated.css" rel="stylesheet">
    <link href="http://www.ppdaicdn.com/css/min/default-min.css?v=0428" rel="stylesheet" />
    <script src="http://www.ppdaicdn.com/js/jquery.js" type="text/javascript"></script>
    <script src="http://www.ppdaicdn.com/js/jquery.cookie.js"></script>
    <script src="http://www.ppdaicdn.com/js/min/ppd-min.js?v=2" type="text/javascript"></script>
    <script src="http://www.ppdaicdn.com/js/min/servicestack-min.js"></script>
    <script src="http://www.ppdaicdn.com/js/bootstrap.min.js"></script>
    <script src="http://www.ppdaicdn.com/js/newRefer.js?v=0807"></script>
    <link rel="shortcut icon" href="http://www.ppdaicdn.com/favicon.ico" type="image/x-icon" />

<?php 
	include_once('firstheader.php');
?>    


<div class="clear">
</div>
<div id="content_nav" class="row show-grid center980">
    <div class="first_lend_left">
        <h1>申请贷款</h1>
            <div class="useron">
                1.个人信息
            </div>
            <div class="lendon">
                2.借款信息
            </div>
            <!--lendon-->
            <div class="certoff">
                3.资质审核
            </div>
            <!--certon-->

    </div>
    <div class="span8" style="width: 770px;">
        <div class="next_tab_content" style="width: 770px;">
            <form id="create_list_form">
                <div class="create_list_info" style="margin-top: 43px;">
                    <div class="info_tit">
                        <div>
                        </div>
                        <span class="float_l">借款基本信息</span>
                    </div>
                    <table>
                        <tr>
                            <td align="right">借款用途：
                            </td>
                            <td>
                                <select id="BorrowType" style="width: 200px">
                                    <option value="" selected>请选择借款用途</option>
                                    <option value="101" >实体经营</option>
                                    <option value="102" >网商经营</option>
                                    <option value="103" >个人消费</option>
                                    <option value="104" >累积信用</option>
                                    <option value="105" >网贷体验</option>
                                    <option value="106" >其他</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">借款标题：
                            </td>
                            <td>
                                <input type='text' style="width: 400px" name="Title" id="Title" maxlength="30" data-validation-engine="validate[required,minSize[8]]" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">借款金额：
                            </td>
                            <td>
                                <span class="float_l">3000 元 </span><span class="altQust" title="此为初次借款额度，还清后可申请提高额度，最高可至50万。"></span>
                                
                            </td>
                        </tr>
                        <tr>
                            <td align="right">借款期限：
                            </td>
                            <td>
                                <select name="Months" id="Months" class="float_l">
                                     <option value="6" selected>6个月</option>
                                    <option value="7" >7个月</option>
                                    <option value="8" >8个月</option>
                                    <option value="9" >9个月</option>
                                    <option value="10" >10个月</option>
                                    <option value="11" >11个月</option>
                                    <option value="12" >12个月</option>
                                </select>
                                <span class="altQust" style="margin-top: 4px;" title="可提前还款"></span>
                            </td>
                        </tr>
                        <tr style="height: 65px" id="zenz">
                            <td></td>
                            <td>
                                    <div class="jue jue_on" thistype='1' style="color: #4f96cf;">
                                        享受增值服务<p class="alt">年利率12%</p>
                                        <p>手续费+服务费：319元</p>
                                    </div>
                                    <div class="jue " thistype='0' style="color: #999">
                                        未享受增值服务<p class="alt">年利率22~24%</p>
                                        <p>手续费:120元</p>
                                    </div>

                          
                                <span class="altQust" style="margin-top: 4px;" title="首次信用增值服务&#13;三大优势：&#13;1、&nbsp;&nbsp;利率平均直降9%&#13;2、&nbsp;&nbsp;闪电满标&#13;3、&nbsp;&nbsp;优先审核"></span>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">年利率：
                            </td>
                            <td id="rate_nav">
                                <input type='text'  disabled="disabled" style="width: 80px" value="12" onfocus="rate_alt()" onblur="rate_alt_close()" name="Rate" id="Rate" data-validation-engine="validate[required,custom[only2float],Rate[22,24]]"/>
                                %
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="moneyalt">实际支付利息<span id="interestmsg">0</span>元
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="moneyalt">实际到款金额<span id="interestmsg1">2681</span>元
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p style="color:#999;padding-left:34px;margin-bottom:0;">注：实际到账金额=借款金额-手续费-服务费</p>
                                <p style="color:#999;padding-left:60px;margin-bottom:0;">选择增值服务，利率低，审核快，满标到账如闪电</p>
                                <p style="color:#999;padding-left:60px;margin-bottom:0;">不成功不收取任何费用：<a style="color:#999;" href="http://www.guruquan.com/help/fees" target="_blank">费用说明</a></p>
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="create_list_info">
                    <div class="info_tit">
                        <div>
                        </div>
                        <span class="float_l">借款描述</span>
                    </div>
                    <div class="about_list">
                            <span style="width: 738px; border: none; height: 100px; padding: 5px; margin-bottom: 9px; position: absolute; display: block; cursor: text; color: #999999;" id="spantip">请输入借款描述，例如您的自我介绍/想要使用这笔款做什么/您的还款能力说明</span>
                            <textarea name="textarea1" edit="true" id="ListDescription" data-validation-engine="validate[required,minSize[10]]"></textarea>



                    </div>
                </div>
            </form>
             <span class="error-summary" id="message" style="color: red; text-align: center">
                </span>
            <input type="button" class="btn btn-primary first_lend_nextbtn" value="确定无误，下一步"
                id="publish" />
            <input type="hidden" id="txtUseService" value="true" />
        </div>
    </div>
</div>
<iframe src="/cookie" style="height: 1px; width: 1px; position: absolute; left: 0pt; top: 0pt; margin-left: -100px;"></iframe>
<script src="http://www.ppdaicdn.com/js/validation.js?v=1"></script>
<script src="http://www.ppdaicdn.com/js/validation-zh.js?=v=1"></script>
<script src="http://www.ppdaicdn.com/js/customize.js?=v=1"></script>
<script src="http://www.ppdaicdn.com/js/recordTime.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#create_list_form").validationEngine();
        $("select").each(function () {
            $(this).attr('data-validation-engine', 'validate[required]');
        });
        if ("True"=="True") {
            $("#spantip").live("click", function () {
                $(this).hide();
                $("#ListDescription").focus();
            });
            
            $("#ListDescription").live("blur", function () {
                if ($.trim($(this).val()) == "") {
                    $("#spantip").show();
                } else {
                    $("#spantip").hide();
                }
            });
            $("#ListDescription").live("click", function () {
                $("#spantip").hide();

            });


        }

        interest();
        record.Init("firstcreatelist");
        record.startRecord();
        $(document).PPDqustion({ BtnId: 'submitbtn', TextId: 'Description', tit: '亲爱的拍友们，为了给您提供最好的服务，请留下您宝贵的意见和建议，以便我们改正。' });

        var gateway = new servicestack.ClientGateway('http://' + window.location.host);
        $("#submitbtn").click(function () {
            var data = { Description: $("#Description").val(), CategoryId: "0" };
            gateway.postToService(
                {
                    FeedbackRequest: data
                },
                function (e) {
                    $(".fankui_emsg").html(e.ResponseStatus.Message);
                    $("#Description").val("");//清空内容

                },
                function (e) {
                    $(".fankui_emsg").html(e.message);
                    //继续提交
                }
            );
        });
        


    }); 
         
</script>

<script type="text/javascript">
    var gateway = new servicestack.ClientGateway('http://' + window.location.host);
    var flag = true;
    var isTestUser = "False";
    

    $('.jue').click(function() {
        $('.jue').removeClass('jue_on').css('color', '#999');
        $(this).addClass('jue_on').css('color', '#4f96cf');
        if ($(this).attr('thistype') == '1') {
            $("input[name='Rate']").prop({ disabled: true }).val('12');
            $("#txtUseService").val("true");
        } else {
            $("input[name='Rate']").prop({ disabled: false }).val('');
            $("#txtUseService").val("false");
        }
        $(".RateformError").remove();
        interest();
    });


    $('.jue').click(function() {
        var index = $(this).index();
        if(index ==0) {
            $('#interestmsg1').text('2681');
        }else {
            $('#interestmsg1').text('2880');
        }
    });
   
 

    $("#publish").click(function() {
        record.setmodule("publish");
        record.endRecord();
        //验证form
        if ($("#txtUseService").val() == "") {
            alert('请选择是否享受增值服务');
            return;
        }
        if ($("#create_list_form").validationEngine('validate') && flag) {
            $("#publish").attr("disabled", "true");
            if ($("#ListDescription").attr('edit') == 'true') {
                //判断3个输入域是否被编辑过
                var data = {
                    Type: 1,
                    Title: $("#Title").val(),
                    ListAmount: 3000,
                    Months: $("#Months").val(),
                    Rate: $("#Rate").val(),
                    BorrowType: $("#BorrowType").val(),
                    Description: $("#ListDescription").val(),
                    BorrowCredit: 0,
                    UseService: $("#txtUseService").val(),
                    IsDraft:isTestUser
                };
                gateway.postToService(
                    {
                        FirstCreateListRequest: data
                    }, function(e) {
                        $("#publish").removeAttr("disabled");
                        //成功信息
                        $("#message").html(e.ResponseStatus.Message);
                        if (e.ResponseStatus.Message != '') {
                            $("#message").show();
                        }
                        flag = true;
                    }, function(e) {
                        if (e.errorCode == "531") {
                            if (isTestUser.toLowerCase() == "true") {
                                location.href = "/firstuserdetail";
                                return;
                            }
                            var alemess = "<div style='font-size:14px;line-height:18px; margin:10px 0 20px 0;'> 贷款顾问将在三个工作日内通过<span style='font-weight:bold; color:#004098;'>021-31017090</span>与您联系，请您留意接听，避免错失贷款机会。</div><div style='font-size:12px;margin-bottom:10px;'>建议您继续完善资料，以提高贷款成功率和放款速度！</div>";
                            $("#publish").PPDfloatDiv({
                                floatbgtype: true,
                                handertext: '提交成功！',
                                context: "<div style='font-size:14px'>" + alemess + "</div>",
                                floattruebtn: '去完善资料',
                                floatfalsebtn: false,
                                btnshow: true,
                                truebtnid: "btnpuscecc",
                                keyboards: false
                            });
                            $('#btnpuscecc').live("click", function() {
                                location = e.message;
                            });
                            // location = e.message;
                        } else {
                            $("#publish").removeAttr("disabled");
                            //错误信息

                            alert(e.message);
                        }
                        flag = true;

                    }
                );
            } else {
                //如果没编辑 阻止提交
                $("#publish").removeAttr("disabled");
                alert("请编辑借款描述后提交");
                var errorhtml = "借款描述： 请编辑借款描述后提交";
                $.post("/actionlog", { useraction: 'firstuser', functionname: "发标验证未通过", remark: errorhtml });
                return false;
            }
        } else {
            recordErrorinfo();
        }
        return false;
    });
    function recordErrorinfo() {
        var errorhtml = "";
        $(".formErrorContent").each(function() {
            if ($(this).parent().next().attr("id") == "ListDescription") {
                var spntxt0 = $.trim($(this).parent().parent().prev().find("span").text());
                var cuhtml0 = $.trim($(this).html());
                errorhtml += spntxt0 + cuhtml0 + "  |  ";
            } else {
                var spntxt = $.trim($(this).parent().parent().parent().children(":eq(0)").text());
                var cuhtml = $.trim($(this).html());
                errorhtml += spntxt + cuhtml + "  |  ";
            }

        });
        if ($("#ListDescription").attr('edit') != 'true') {
            errorhtml += "借款描述： 关于我/我想要使用这笔款项做什么/我的还款能力说明" + "  |  ";
        }
        errorhtml = errorhtml.substring(0, errorhtml.length - 3).replace(/<br>/g, "").replace(/<BR>/g, "");
        $.post("/actionlog", { useraction: 'firstuser', functionname: "发标验证未通过", remark: errorhtml });

        
        
    }
    function customFloat(str1,str2) {
        //添加一个提示浮动层
        $("#content_nav").append("<div id='reg_error_box_" + str2.attr('name') + "'  class='register_float_box' style=\"display: none;\"><div>"+str1+"</div></div>");
        $("#reg_error_box_" + str2.attr('name')).css('top', str2.offset().top-3).css('left',str2.offset().left+str2.width()+15).fadeIn('slow');
    }
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#10002").attr('class', 'tabon');
        $("#Months").change(function () {
            if ($("txtUseService").val() == "false") {
                //判断还款月份切换利率
                var oldRate = $('#Rate').val();
                if ($(this).val() >= 4) {
                    var halfyearrate = " <input type='text' style=\"width: 80px\" name=\"Rate\" onfocus=\"rate_alt()\" value=\""+oldRate+"\" onblur=\"rate_alt_close()\" id=\"Rate\" data-validation-engine=\"validate[required,custom[only2float],Rate[22 , 24]]\"/>%";
                    $("#rate_nav").html(halfyearrate);
                } else if ($(this).val() <= 3) {
                    var YearRate = " <input type='text' style=\"width: 80px\" name=\"Rate\" id=\"Rate\" value=\""+oldRate+"\" onfocus=\"rate_alt()\" onblur=\"rate_alt_close()\" data-validation-engine=\"validate[required,custom[only2float],Rate[22 ,22.4]]\"/>%";
                        $("#rate_nav").html(YearRate);
                    }
         
            }
            interest();
           
        });
        $(".about_list").children('textarea').focus(function () {
            //如果输入域被编辑改编为编辑状态，且去除提示语
            if ($(this).attr('edit') != 'true') {
                $(this).val('');
                $(this).css("color","#555");
            }
            $(this).attr('edit', 'true');
        });
        $("#Title").focus(function () {
            //借款标题提示语
            var str1 = "请认真填写，建议扼要简单说明借款目的，此为借出者支持您的第一印象。";
            var str2 = $(this);
            customFloat(str1, str2);
        });
        $("#Title").focusout(function () {
            //去除借款标题提示语
            $("#reg_error_box_" + $(this).attr('name')).remove();
        });
        $("#ListAmount").focus(function () {
            //借款金额提示语

            var str1 = "您当前的额度为"+3000+"元";
            var str2 = $(this);
            customFloat(str1, str2);
        });
        $("#ListAmount").focusout(function () {
            //去除借款金额提示语
            $("#reg_error_box_" + $(this).attr('name')).remove();
        });
       
    });
    function rate_alt() {
        //年利率提示语
        var str1;
        if($("#Months option:selected").val() >= 4){
                str1 = "根据您的信用分您的可发标利率范围在" + 22 + "%-" + 24 + "%之间";
        }else if($("#Months option:selected").val() <= 3) {
                str1 = "根据您的信用分您的可发标利率范围在" + 22 + "%-" + 22.4 + "%之间";
        }
        var str2 = $("#Rate");
        customFloat(str1, str2);
    }
    function rate_alt_close() {
        //去除利率提示语
        $("#reg_error_box_" + $("#Rate").attr('name')).remove();
                interest();
    }

    function interest () {
        var months = parseFloat($("#Months").val());
        var rates = parseFloat($("#Rate").val())/12/100;
        var amounts = parseFloat(3000);
        var p = Math.pow(1 + rates, months);
        var payment =Math.round( (amounts * rates * p / (p - 1)*months-amounts)*100)/100;
        if(isNaN(payment)==false) $("#interestmsg").html(payment); 
    }

    interest();
</script>

<?php  
	include_once('firstfooter.php');
?>
    
    <script src="http://ac.guruquan.com/status" type="text/javascript"></script>
    <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PVQ5D8"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PVQ5D8');</script>
    <!-- End Google Tag Manager -->
    <script>
            $("#BDBridgeFixedWrap").css("z-index", 1);
    </script>
</body>
</html>
