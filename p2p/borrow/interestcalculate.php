

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>利息计算器_借款设置_理财网</title>
    <meta name="description" content="使用利息计算器，帮您计算一下借款的总成本，理财网采用的是通用的等额本息还款法，即借款人每月以相等的金额偿还贷款本息。" />
    <meta name="keywords" content="利息计算器,借款设置" />
    <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/2014/css/basic.css?091901" />
    <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/2014/css/layout.css?091901" />
    <link href="http://www.ppdaicdn.com/css/min/validation-min.css" rel="stylesheet" />
    <link rel="shortcut icon" href="http://www.ppdaicdn.com/favicon.ico" type="image/x-icon" />
    <script type="text/javascript">
        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Faab1030ecb68cd7b5c613bd7a5127a40' type='text/javascript'%3E%3C/script%3E"));
    </script>
    
        <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/2014/css/basic.css"/>
        <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/2014/css/layout.css"/>
        <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/2014/css/staticPage.css"/>
        <link rel="stylesheet" type="text/css" href="http://www.ppdaicdn.com/css/min/validation-min.css" />


<?php 
	include_once('../header.php');
?>
    

        <style>
        .center1000 {width: 1000px;margin: 0 auto;border:1px solid #EDEDED}
        .interest_count_div table div.txt {height: 23px;display: inline-block;background: url(http://www.ppdaicdn.com/2014/img/txt_bg.gif) no-repeat;padding: 1px 25px 3px 3px;}
        .interest_count_div table div.txt input {margin: 0;border: none;height: 22px;padding: 0;line-height: 22px;box-shadow: inset 0 0px 0px;border-radius: 0px;}
        .interest_count_div table div.yuan_txt {width: 110px;background-position: left 0; }
        .interest_count_div table div.per_txt {width: 40px;background-position: left -62px;}
        .interest_count_div table div.month_txt {width: 40px;background-position: left 100%;}
        .interest_count .count_btn {height: 30px;background: #39a1ea;font-size: 15px;font-family: 'Microsoft Yahei';color: #fff;margin-left: 410px;border: 0;}
        #selectCal {width: 220px;height: 28px;line-height: 28px;}
        </style>

    <div class="clear">
    </div>
    <div id="content_nav" class="main">
            <div>
        <ul class="breadcrumb" style="border: none !important;">
                        <li><a href="/">首页</a> <span class="divider">></span></li>
                        <li><a href="/borrow">我要借入</a> <span class="divider">></span></li>
                            <li class="active">利息计算器</li>

        </ul>
    </div>

        <div class="center1000">
            <div class="interest_count">
                <div class="info_tit">
                    <div>
                    </div>
                    <h1 class="float_l">利息计算器</h1></div>
                <div class="interest_count_content">
                    使用利息计算器，帮您计算一下借款的总成本，包括每月需要偿还的金额及月利率等；同时，一份完整的还款计划时间表让您更好地了解还款的情况。理财网采用的是通用的"等额本息还款法"，即借款人每月以相等的金额偿还贷款本息。也是银行房贷等采用的方法。
                </div>
            </div>
            <div class="interest_count">
                <div class="info_tit">
                    <div>
                    </div>
                    <h2 class="float_l">借款设置</h2></div>
                <form action="/borrow/interestcalculate" id="from_interest" method="POST">
                <div class="interest_count_content">
                    <div class="interest_count_div">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="230">
                                    借款金额：<div class="yuan_txt txt"><input type="text" name="LoanAmount" maxlength="9" data-validation-engine="validate[required,custom[only2float]]"  style="width: 110px !important;"/></div>

                                </td>
                                <td width="180">
                                    年利率：<div class="per_txt txt"><input type="text" data-validation-engine="validate[required,custom[number],min[1]]" name="YearInterestRate"/></div>
                                </td>
                                <td width="180">
                                    借款期限：<div class="month_txt txt"><input type="text" data-validation-engine="validate[required,minSize[1],maxSize[2],custom[integer],max[36],min[1]]" name="Deadline" /></div>
                                </td>
                                <td>
                                    <span>还款方式：</span><select name="RepaymentType"><option value="1" selected="selected">
                                        每月还款</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <ul>
                        <li>
                            <input type="submit" value="开始计算" class="btn btn-primary count_btn" /></li>
                    </ul>
                </div>
                </form>
            </div>


        </div>
    </div>


　
<script src="http://www.ppdaicdn.com/2014/js/jquery-1.11.0.js" type="text/javascript" charset="utf-8"></script>
<script src="http://www.ppdaicdn.com/2014/js/init.js" type="text/javascript" charset="utf-8"></script>
<script src="http://www.ppdaicdn.com/js/validation.js"> </script>
<script src="http://www.ppdaicdn.com/js/validation-zh.js"> </script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#10002").addClass("tabon");
        $("#from_interest").validationEngine();

    });
</script>

<?php  
	include_once('../footer.php');
?>
    

    <!-- Google Tag Manager -->
    <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-PVQ5D8"
            height="0" width="0" style="display: none; visibility: hidden"></iframe>
    </noscript>
    <script>(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PVQ5D8');</script>
    <!-- End Google Tag Manager -->
</body>
</html>
