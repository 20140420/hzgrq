

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人资料信息</title>
    <meta name="description" content="理财网，中国首家，最大、最多人使用的互联网金融P2P(人人贷)网络借贷平台。提供小额贷款,短期贷款,个人贷款,抵押,无抵押贷款服务。利率自定,借期灵活。您还可以成为借出人理财借贷投资，获得高年收益率回报，超低门槛，超高收益。作为可信赖的投融资,理财,贷款,信贷平台,理财网助您财富实现增值" />
    <meta name="keywords" content="网络贷款,民间借贷,小额贷款,无抵押贷款,信用贷款,网络借贷,借贷平台,理财网,人人贷,投资理财,个人理财,p2p贷款,贷款,互联网金融,投融资" />
    <link href="http://www.ppdaicdn.com/css/min/bootstrap-min.css?v=2" rel="stylesheet" />
    <link href="http://www.ppdaicdn.com/css/min/validation-min.css" rel="stylesheet" />
    <link href="http://static.guruquan.com/skin/css/cssnext/imgareaselect-animated.css" rel="stylesheet">
    <link href="http://www.ppdaicdn.com/css/min/default-min.css?v=0428" rel="stylesheet" />
    <link rel="shortcut icon" href="http://www.ppdaicdn.com/favicon.ico" type="image/x-icon" />
    <style type="text/css">
        .w565 {
            width: 565px;
        }

        .my_family .selectaddr, .my_unit .selectaddr {
            width: 120px;
        }

        .my_family .addDetail, .my_unit .addDetail {
            margin-left: 65px;
        }

        .mlr10 {
            margin-left: 10px;
            margin-right: 10px;
        }

        .my_family .left_nav {
            padding-top: 85px;
        }
    </style>
    
<?php 
	include_once('firstheader.php');
?>

        <div id="content_nav" class="row show-grid center980">
            <div class="first_lend_left">
                <h1>申请贷款</h1>
                    <div class="useron">
                        1.个人信息
                    </div>
                    <div class="lendoff">
                        2.借款信息
                    </div>
                    <!--lendon-->
                    <div class="certoff">
                        3.资质审核
                    </div>
                <!--certon-->
                
            </div>
            <div class="span8" style="width: 770px">
                <form action="/firstuserdetail" id="firstuserdetail" method="POST">
                    <input type="hidden" value="0" name="UserType"/>
                    <div class="next_tab_content" style="width: 770px">
                        <div class="first_lendtit">
                            &gt;&gt;&nbsp;&nbsp;&nbsp;&nbsp;温馨提示：亲爱的客户，理财网会有严格的信息和安全加密机制，确保您的信息安全，不会向外界泄露。<br />
                            <span style="margin-left: 95px">请您认真填写。如有造假，您的贷款资格会被取消；并加入理财网黑名单系统将无法贷款。</span>
                            <div style="color: red" id="errorMessage">
                            </div>
                        </div>

                        <div class="essential_information first_userdetail">
                            <div class="left_nav float_l">
                                <div class="imgicon_nav">
                                </div>
                                <label>
                                    我的基本信息<br />
                                    (*必填)</label>
                            </div>
                            <div class="float_l" id="div_basic">
                                <ul>
                                    <li><span class="float_l">真实姓名：</span><input  name="RealName" class="float_l" id="RealName"  value=""  type="text" data-validation-engine="validate[required,custom[realname]],maxSize[30],minSize[2]"/><em>*</em></li>
                                    <li id="mobile_suc">
                                        <div class="float_l">
                                            <span class="float_l">手机号码：</span><input class="float_l" type="text" name="MobilePhone" id="MobilePhone" value="" data-validation-engine="validate[required,custom[mobile]]" />
                                        </div>
                                            <em style="width: 264px">请填写正确的手机号码，以便借款成功后联系您。</em>
                                    </li>
                                    <li><span class="float_l">Q Q号码：</span><input class="float_l"  type="text" name="QQ" id="QQ" value="" data-validation-engine="validate[required,custom[onlyNumberSp],,maxSize[11],minSize[4]]"/><em>*</em></li>
                                    <li><span class="float_l">教育程度：</span><select id="EducationId" name="EducationId"><option value="">请选择</option>
<option value="1">研究生及以上</option>
<option value="2">本科</option>
<option value="3">大专</option>
<option value="4">高中</option>
<option value="5">中专</option>
<option value="6">初中及以下</option>
</select><em>*</em></li>
                                    <li><span class="float_l">身份证号：</span><input type="text" class="float_l"  name="IdNumber" id="IdNumber" value="" data-validation-engine="validate[required,custom[card]]"/><em>*</em></li>
                                </ul>
                            </div>
                        </div>
                        <div class="my_family first_userdetail">
                            <div class="left_nav float_l">
                                <div class="imgicon_nav">
                                </div>
                                <label>
                                    我的家庭情况<br />
                                    (*必填)</label>
                            </div>
                            <div class="float_l w565">
                                <ul>
                                    <li><span class="float_l">婚姻状况：</span><select id="MarriageStatusId" name="MarriageStatusId"><option value="">请选择</option>
<option value="1">未婚</option>
<option value="2">已婚</option>
<option value="4">离婚</option>
<option value="5">丧偶</option>
<option value="3">其他</option>
</select><em>*</em>
                                    </li>
                                    <li><span class="float_l">住宅状况：</span><select id="ResidenceTypeId" name="ResidenceTypeId"><option value="">请选择</option>
<option value="1">自置无按揭</option>
<option value="2">自置有按揭</option>
<option value="3">商住两用</option>
<option value="4">租用</option>
<option value="5">与父母共住</option>
<option value="6">集体宿舍</option>
<option value="7">其他</option>
</select><em>*</em>
                                    </li>



                                    <li style="height: 60px; height: 80px;"><span class="float_l">住宅地址：</span>
                                        <select name="ProvinceId" data-type="2" class="selectaddr"  data-validation-engine=&#39;validate[required]&#39;>
                                            <option value="">请选择</option>
                                                <option value="1"  >北京</option>
                                                <option value="2"  >上海</option>
                                                <option value="3"  >天津</option>
                                                <option value="4"  >重庆</option>
                                                <option value="5"  >河北</option>
                                                <option value="6"  >山西</option>
                                                <option value="7"  >内蒙古自治区</option>
                                                <option value="8"  >辽宁</option>
                                                <option value="9"  >吉林</option>
                                                <option value="10"  >黑龙江</option>
                                                <option value="11"  >江苏</option>
                                                <option value="12"  >浙江</option>
                                                <option value="13"  >安徽</option>
                                                <option value="14"  >福建</option>
                                                <option value="15"  >江西</option>
                                                <option value="16"  >山东</option>
                                                <option value="17"  >河南</option>
                                                <option value="18"  >湖北</option>
                                                <option value="19"  >湖南</option>
                                                <option value="20"  >广东</option>
                                                <option value="21"  >广西壮族自治区</option>
                                                <option value="22"  >海南</option>
                                                <option value="23"  >四川</option>
                                                <option value="24"  >贵州</option>
                                                <option value="25"  >云南</option>
                                                <option value="26"  >西藏自治区</option>
                                                <option value="27"  >陕西</option>
                                                <option value="28"  >甘肃</option>
                                                <option value="29"  >青海</option>
                                                <option value="30"  >宁夏回族自治区</option>
                                                <option value="31"  >新疆维吾尔自治区</option>
                                                <option value="35"  >其他</option>
                                        </select>
                                        <select name="CityId" data-type="3" class="selectaddr mlr10" data-validation-engine=&#39;validate[required]&#39;>
                                            <option value="">请选择</option>
                                        </select>
                                        <select name="DistrictId" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                            <option value="">请选择</option>
                                        </select>
                                        <input class="float_l addDetail" type="text" name="ResidenceAddress" id="ResidenceAddress" value="" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/>
                                        <em>*</em></li>
                                    <li><span class="float_l">住宅电话：</span><input class="float_l" type="text"  name="ResidencePhone" id="ResidencePhone" value="" data-validation-engine="validate[required,custom[phone]]"/><em>*(例021-51870819、13813888888)</em></li>
                                    <li><span class="float_l">入住年数：</span><select id="ResidenceYears" name="ResidenceYears"><option value="">请选择</option>
<option value="1">半年以内</option>
<option value="2">1年以内</option>
<option value="3">2年以内</option>
<option value="4">3年以内</option>
<option value="5">3年以上</option>
</select><em>*</em>
                                    </li>
                                    <li><span class="float_l">是否购车：</span><input id="HasBuyCar" name="HasBuyCar" type="radio" value="1" />
                                        <i>是</i><input checked="checked" id="HasBuyCar" name="HasBuyCar" type="radio" value="2" /><i>否</i></li>
                                </ul>
                            </div>
                        </div>
                            <div class="my_unit first_userdetail" style="height: auto;" id="my_js">
                                <div class="left_nav float_l" id="lefticon" style="padding-top: 110px;">
                                    <div class="imgicon_nav">
                                    </div>
                                    <label>
                                        我的单位情况<br />
                                        (*必填)</label>
                                </div>
                                <div class="float_l w565">
                                    <ul>

                                            <li groups="select"><span class="float_l">就业状态：</span>
                                                <input type="radio" checked="checked" value="1" groupfor="dw" name="BorrowRole" /><i>工薪族</i>
                                                <input type="radio" value="2" groupfor="gs" name="BorrowRole" /><i>私营业主</i>
                                                <input type="radio" value="3" groupfor="wd" name="BorrowRole" /><i>网店卖家</i>
                                                <input type="radio" value="4" groupfor="xs" name="BorrowRole" /><i>学生</i>
                                                <input type="radio" value="6" groupfor="qt" name="BorrowRole" /><i>其他</i>
                                                <em style="width: 90px;" class="float_r"></em>
                                            </li>
                                                                                    <li groups='xs' group="" style="display: none"><span class="float_l">学校名称：</span><input class="float_l"  type="text"  name="SchoolName" id="SchoolName" data-validation-engine="validate[required,minSize[2],maxSize[40]]"/><em>*</em></li>
                                            <li groups='xs'  group="" style="display: none"><span class="float_l">宿舍电话：</span><input class="float_l"  type="text"name="DormitoryPhone" id="DormitoryPhone" data-validation-engine="validate[required,custom[phone]]"/><em>*(例021-51870819、13813888888)</em></li>
                                            <li groups='xs'  group="" style="display: none"><span class="float_l">还款来源：</span><input class="float_l"  type="text"  name="IncomeFromForStudent" id="IncomeFrom" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/><em>*</em></li>

                                            <li  groups='gs'  group="" style="display: none"><span class="float_l">公司名称：</span><input type="text" class="float_l"  name="CompanyNameForCompanyOwner" id="CompanyName" data-validation-engine="validate[required,minSize[2],maxSize[20]]"/><em>*</em></li>
                                            <li  groups='gs'  group="" style="display: none"><span class="float_l">公司人数：</span><select id="CompanySizeId" name="CompanySizeId"><option value="">请选择</option>
<option value="1">1-10人</option>
<option value="2">11-50人</option>
<option value="3">51-130人</option>
<option value="4">130人以上</option>
</select><em>*</em></li>
                                            <li  groups='gs'  group="" style=" display: none ;height:60px; height:80px;"><span class="float_l">经营地址：</span>
                                                <select name="ProvinceIdForCompanyOwner" data-type="2" class="selectaddr" data-validation-engine=&#39;validate[required]&#39; >
                                                    <option value="">请选择</option>
                                                        <option value="1" >北京</option>
                                                        <option value="2" >上海</option>
                                                        <option value="3" >天津</option>
                                                        <option value="4" >重庆</option>
                                                        <option value="5" >河北</option>
                                                        <option value="6" >山西</option>
                                                        <option value="7" >内蒙古自治区</option>
                                                        <option value="8" >辽宁</option>
                                                        <option value="9" >吉林</option>
                                                        <option value="10" >黑龙江</option>
                                                        <option value="11" >江苏</option>
                                                        <option value="12" >浙江</option>
                                                        <option value="13" >安徽</option>
                                                        <option value="14" >福建</option>
                                                        <option value="15" >江西</option>
                                                        <option value="16" >山东</option>
                                                        <option value="17" >河南</option>
                                                        <option value="18" >湖北</option>
                                                        <option value="19" >湖南</option>
                                                        <option value="20" >广东</option>
                                                        <option value="21" >广西壮族自治区</option>
                                                        <option value="22" >海南</option>
                                                        <option value="23" >四川</option>
                                                        <option value="24" >贵州</option>
                                                        <option value="25" >云南</option>
                                                        <option value="26" >西藏自治区</option>
                                                        <option value="27" >陕西</option>
                                                        <option value="28" >甘肃</option>
                                                        <option value="29" >青海</option>
                                                        <option value="30" >宁夏回族自治区</option>
                                                        <option value="31" >新疆维吾尔自治区</option>
                                                        <option value="35" >其他</option>
                                                </select>
                                                <select name="CityIdForCompanyOwner" data-type="3" class="selectaddr mlr10" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <select name="DistrictIdForCompanyOwner" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <input type="text" class="float_l addDetail"  name="BussinessAddressForCompanyOwner" id="BussinessAddress" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/><em>*</em></li>
                                            <li  groups='gs'  group="" style="display: none"><span class="float_l">公司电话：</span><input type="text" class="float_l"  name="CompanyPhoneForCompanyOwner" id="CompanyPhone" data-validation-engine="validate[required,custom[phone]]"/><em>*(例021-51870819、13813888888)</em></li>
                                            <li  groups='gs'  group="" style="display: none"><span class="float_l">营业执照：</span>
                                                <input id="HasBusinessLicense" name="HasBusinessLicense" type="radio" value="True" />
                                                <i>有</i>
                                                <input checked="checked" id="HasBusinessLicense" name="HasBusinessLicense" type="radio" value="False" />
                                                <i>无</i></li>


                                            <li  groups='dw'  group="" style="display: block"><span class="float_l">收入发放方式：</span><input checked="checked" id="IsCash" name="IsCash" type="radio" value="False" /><i>银行卡发放</i><input id="IsCash" name="IsCash" type="radio" value="True" /><i>现金发放</i></li>
                                            <li groups='dw'  group="" style="display: block" ><span class="float_l">是否缴纳社保/公积金：</span><input id="HasSbOrGjj" name="HasSbOrGjj" type="radio" value="True" /><i>是</i><input checked="checked" id="HasSbOrGjj" name="HasSbOrGjj" type="radio" value="False" /><i>否</i></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">单位性质：</span><select id="CompanyTypeId" name="CompanyTypeId"><option value="">请选择</option>
<option value="1">机关事业单位</option>
<option value="2">社会团体</option>
<option value="3">国有企业</option>
<option value="4">三资企业</option>
<option value="5">上市公司</option>
<option value="6">民营</option>
<option value="7">私营</option>
<option value="8">个体</option>
<option value="9">其他</option>
</select><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">工作年限：</span><select id="WorkYears" name="WorkYears"><option value="">请选择</option>
<option value="1">半年以内</option>
<option value="2">1年以内</option>
<option value="3">2年以内</option>
<option value="4">3年以内</option>
<option value="5">3年以上</option>
</select><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">单位名称：</span><input type="text" class="float_l"  name="CompanyNameForWageEarner"id="companyName"  data-validation-engine="validate[required,minSize[2],maxSize[20]]"/><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">任职部门：</span><input type="text" class="float_l"  name="Department" id="department" data-validation-engine="validate[required,minSize[2],maxSize[20]]"/><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">任职职位：</span><input type="text" class="float_l"  name="Position" id="position" data-validation-engine="validate[required,minSize[2],maxSize[20]]"/><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block ; height:60px; height:80px;"><span class="float_l">单位地址：</span>
                                                <select name="ProvinceIdForWageEarner" data-type="2" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                        <option value="1" >北京</option>
                                                        <option value="2" >上海</option>
                                                        <option value="3" >天津</option>
                                                        <option value="4" >重庆</option>
                                                        <option value="5" >河北</option>
                                                        <option value="6" >山西</option>
                                                        <option value="7" >内蒙古自治区</option>
                                                        <option value="8" >辽宁</option>
                                                        <option value="9" >吉林</option>
                                                        <option value="10" >黑龙江</option>
                                                        <option value="11" >江苏</option>
                                                        <option value="12" >浙江</option>
                                                        <option value="13" >安徽</option>
                                                        <option value="14" >福建</option>
                                                        <option value="15" >江西</option>
                                                        <option value="16" >山东</option>
                                                        <option value="17" >河南</option>
                                                        <option value="18" >湖北</option>
                                                        <option value="19" >湖南</option>
                                                        <option value="20" >广东</option>
                                                        <option value="21" >广西壮族自治区</option>
                                                        <option value="22" >海南</option>
                                                        <option value="23" >四川</option>
                                                        <option value="24" >贵州</option>
                                                        <option value="25" >云南</option>
                                                        <option value="26" >西藏自治区</option>
                                                        <option value="27" >陕西</option>
                                                        <option value="28" >甘肃</option>
                                                        <option value="29" >青海</option>
                                                        <option value="30" >宁夏回族自治区</option>
                                                        <option value="31" >新疆维吾尔自治区</option>
                                                        <option value="35" >其他</option>
                                                </select>
                                                <select name="CityIdForWageEarner" data-type="3" class="selectaddr mlr10" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <select name="DistrictIdForWageEarner" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <input type="text" class="float_l addDetail"  name="CompanyAddress" id="companyAddress" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/><em>*</em></li>
                                            <li groups='dw'  group="" style="display: block"><span class="float_l">单位电话：</span><input type="text" class="float_l"  name="CompanyPhoneForWageEarner" id="companyPhone" data-validation-engine="validate[required,custom[phone]]"/><em>*(例021-51870819、13813888888)</em></li>

                                            <li groups='wd'  group="" style="display: none"><span class="float_l">经营网站：</span><select id="WebShopTypeId" name="WebShopTypeId"><option value="">请选择</option>
<option value="1">淘宝网</option>
<option value="2">拍拍网</option>
<option value="3">阿里巴巴</option>
<option value="4">京东</option>
<option value="5">一号店</option>
<option value="6">当当网</option>
<option value="8">敦煌</option>
<option value="7">其他</option>
</select><em>*</em></li>
                                            <li groups='wd'  group="" style="display: none"><span class="float_l">卖家昵称：</span><input type="text" class="float_l" name="NickName" id="nickName" data-validation-engine="validate[required]"/><em>*</em></li>
                                            <li groups='wd'  group="" style="display: none"><span class="float_l">店铺地址：</span><input type="text" class="float_l" name="WebShopUrl" id="webShopUrl"  value="http://" data-validation-engine="validate[required,custom[url]]"/><em>*</em></li>
                                            <li groups='wd'  group="" style="display: none"><span class="float_l">月营业额：</span><input type="text" class="float_l" name="turnover" id="turnover" value=""  data-validation-engine="validate[required,custom[month_money],max[999999]]"/><em>*万元</em></li>
                                            <li groups='wd'  group="" style="display: none ; height:60px; height:80px;"><span class="float_l">经营地址：</span>
                                                <select name="ProvinceIdForWebShop" data-type="2" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                        <option value="1" >北京</option>
                                                        <option value="2" >上海</option>
                                                        <option value="3" >天津</option>
                                                        <option value="4" >重庆</option>
                                                        <option value="5" >河北</option>
                                                        <option value="6" >山西</option>
                                                        <option value="7" >内蒙古自治区</option>
                                                        <option value="8" >辽宁</option>
                                                        <option value="9" >吉林</option>
                                                        <option value="10" >黑龙江</option>
                                                        <option value="11" >江苏</option>
                                                        <option value="12" >浙江</option>
                                                        <option value="13" >安徽</option>
                                                        <option value="14" >福建</option>
                                                        <option value="15" >江西</option>
                                                        <option value="16" >山东</option>
                                                        <option value="17" >河南</option>
                                                        <option value="18" >湖北</option>
                                                        <option value="19" >湖南</option>
                                                        <option value="20" >广东</option>
                                                        <option value="21" >广西壮族自治区</option>
                                                        <option value="22" >海南</option>
                                                        <option value="23" >四川</option>
                                                        <option value="24" >贵州</option>
                                                        <option value="25" >云南</option>
                                                        <option value="26" >西藏自治区</option>
                                                        <option value="27" >陕西</option>
                                                        <option value="28" >甘肃</option>
                                                        <option value="29" >青海</option>
                                                        <option value="30" >宁夏回族自治区</option>
                                                        <option value="31" >新疆维吾尔自治区</option>
                                                        <option value="35" >其他</option>
                                                </select>
                                                <select name="CityIdForWebShop" data-type="3" class="selectaddr mlr10" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <select name="DistrictIdForWebShop" class="selectaddr" data-validation-engine=&#39;validate[required]&#39;>
                                                    <option value="">请选择</option>
                                                </select>
                                                <input type="text" class="float_l addDetail"  name="BussinessAddressForWebShop" id="bussinessAddress" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/><em>*</em></li>

                                            <li groups='qt'  group="" style="display: none"><span class="float_l">还款来源：</span><input type="text" class="float_l"  name="IncomeFromForOther" id="incomeFrom" data-validation-engine="validate[required,minSize[5],maxSize[40]]"/><em>*</em></li>

                                    </ul>
                                </div>
                            </div> 
                        <div class="first_lend_nextbtn_nav">
                            <input type="button" class="btn btn-primary first_lend_nextbtn" id="btnSubmit" value="我已认真填写，下一步" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <iframe src="/cookie" style="height: 1px; width: 1px; position: absolute; left: 0pt; top: 0pt; margin-left: -100px;"></iframe>

<?php  
	include_once('firstfooter.php');
?>

    
    <script src="http://www.ppdaicdn.com/js/jquery.js" type="text/javascript"></script>
    <script src="http://www.ppdaicdn.com/js/min/ppd-min.js?v=2" type="text/javascript"></script>
    <script src="http://www.ppdaicdn.com/js/min/servicestack-min.js"></script>
    <script src="http://www.ppdaicdn.com/js/bootstrap.min.js"></script>
    <script src="http://www.ppdaicdn.com/js/newRefer.js?v=0807"></script>
    <script src="http://www.ppdaicdn.com/js/validation.js"></script>
    <script src="http://www.ppdaicdn.com/js/validation-zh.js"></script>
    <script src="http://www.ppdaicdn.com/js/customize.js"></script>
    <script src="http://www.ppdaicdn.com/js/jquery.remaintime.js" type="text/javascript"></script>
    <script src="http://ac.guruquan.com/status" type="text/javascript"></script>
    <script>
        $("#BDBridgeFixedWrap").css("z-index", 1);
    </script>
    <script type="text/javascript">
        var sub = false;
        var gateway = new servicestack.ClientGateway('http://' + window.location.host);
        $(document).ready(function () {
            window.onbeforeunload = function (e) {
                if (!sub) {
                    var ss = "关闭后将无法保存已填写内容。确认不保存已填写的内容，放弃本次借款吗？\n";
                    return ss;
                }
            };

            $(document).PPDqustion({ BtnId: 'submitbtn', TextId: 'Description', tit: '亲爱的拍友们，为了给您提供最好的服务，请留下您宝贵的意见和建议，以便我们改正。' });

            $("#submitbtn").click(function () {
                var description = $("#Description").val() + "〖 手机号码：" + $.trim($("#MobilePhone").val()) + ",QQ号码:" + $.trim($("#QQ").val()) + " 〗";
                var data = { Description: description, CategoryId: "1" };
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
            $("#10003").addClass("tabon");

            $("#iscontacked").click(function () {
                if ($(this).prop("checked")) {

                    $(this).val(1);
                } else {
                    $(this).val(0);
                }
            });

            $("select").each(function () {
                if ($(this).attr("data-validation-engine") == undefined) {
                    $(this).attr('data-validation-engine', 'validate[required]');
                }


            });
            $("#firstuserdetail").validationEngine();
            $("#btnSubmit").click(function () {
                sub = true;
                if (!$("#firstuserdetail").validationEngine('validate')) {
                    var errorhtml = "";
                    $(".formErrorContent").each(function () {
                        var spntxt = $.trim($(this).parent().parent().children(":eq(0)").text());
                        var cuhtml = $.trim($(this).html());

                        //console.log("填写内容:" + $(this).parent().next().val());
                        var filltxt = "填写内容:";
                        if ($(this).parent().next()[0].nodeName == "SELECT") {
                            filltxt += $.trim($(this).parent().next().find("option:selected").text());
                        } else {
                            filltxt += $.trim($(this).parent().next().val());
                        }
                        errorhtml += spntxt + filltxt + "##" + cuhtml + "  |  ";

                    });
                    errorhtml = errorhtml.substring(0, errorhtml.length - 3).replace(/<br>/g, "").replace(/<BR>/g, "");
                    //console.log(errorhtml);
                    $.post("/actionlog", { useraction: 'firstuser', functionname: "填写资料验证未通过", remark: errorhtml });
                    sub = false;
                }

                $("#firstuserdetail").submit();
            });

            if ($("#j_ed").length > 0) {
                var usertype = $("#j_ed").attr('usertype');
                var thison;
                if (usertype == '1') {
                    thison = 'dw';
                } else if (usertype == '2') {
                    thison = 'gs';
                } else if (usertype == '3') {
                    thison = 'wd';
                } else if (usertype == '4') {
                    thison = 'xs';
                } else if (usertype == '6') {
                    thison = 'qt';
                }
            }
            nav_height(thison);

            /*****************获取区域信息**********************/
            $("[name='ProvinceId'],[name='CityId'],[name='ProvinceIdForCompanyOwner'],[name='CityIdForCompanyOwner'],[name='ProvinceIdForWageEarner'],[name='CityIdForWageEarner'],[name='ProvinceIdForWebShop'],[name='CityIdForWebShop']").change(function () {
                if ($(this).find("option:selected").val() == "") {
                    $(this).nextAll("select").find("option").not(":first-child").remove();
                    $(this).nextAll("select").find("option:first-child").attr("selected", true);
                    $(this).nextAll("select").change();
                } else {
                    getAreaList($(this));
                }
            });
        });

        ///获取区域信息方法
        function getAreaList(obj) {
            var type = obj.attr("data-type");
            var data = { AreaType: type, Id: obj.find("option:selected").val(), format: "json" };
            gateway.postToService(
                { AreaRequest: data },
                function (e) {
                    var ilist = "";
                    var econtent = e.Content;
                    var nextobj = obj.nextAll("select")[0];
                    if (type == "2") {
                        for (var i = 0; i < econtent.length; i++) {
                            ilist += "<option value=" + econtent[i].Id + ">" + econtent[i].CityName + "</option>";
                        }
                        //nextobj.next().hide();
                        $(obj.nextAll("select")[1]).find("option").not(":first-child").remove();
                    } else {
                        for (var j = 0; j < econtent.length; j++) {
                            ilist += "<option value=" + econtent[j].Id + ">" + econtent[j].DistrictName + "</option>";
                        }
                        //nextobj.show();
                    }
                    $(nextobj).find("option").not(":first-child").remove();
                    $(nextobj).append(ilist);

                }, function (e) {
                    alert(e.message);
                }
            );
        }

        /*****************获取区域信息**********************/
        $("input[name='BorrowRole']").click(function () {
            var thison = $(this).attr('groupfor');
            $("#my_js").find('li').each(function () {
                if ($(this).attr('groups') == thison || $(this).attr('groups') == 'select') {
                    $(this).show();
                } else { $(this).hide(); };
                nav_height(thison);
            });
        });

        function nav_height(thison) {
            var thisheight;
            var lefticon;
            if (thison == 'wd') {
                thisheight = '340px';
                lefticon = '95px';
                $("#lefticon").find('label').html('我的网店情况<br />(*必填)');
            } else if (thison == 'qt') {
                thisheight = '150px';
                lefticon = '10px';
                $("#lefticon").find('label').html('我的就业状态<br />(*必填)');
            } else if (thison == 'dw') {
                thisheight = 'auto';
                lefticon = '110px';
                $("#lefticon").find('label').html('我的单位情况<br />(*必填)');
            } else if (thison == 'gs') {

                thisheight = '315px';
                lefticon = '90px';

                $("#lefticon").find('label').html(' 我的公司情况<br />(*必填)');
            } else if (thison == 'xs') {
                thisheight = '220px';
                lefticon = '40px';
                $("#lefticon").find('label').html('我的学生情况<br />(*必填)');
            }
            $("#my_js").css('height', thisheight);
            $("#lefticon").css('padding-top', lefticon);
        }

        $("#btnValidateCode").click(function () {

            $('#btnValidateCode').attr("disabled", true);
            var data = { BindType: "Add", ValidateType: "Mobile", Step: "Third", Mobile: $("#MobilePhone").val(), Source: 1 };
            gateway.putToService(
                {
                    MobileRequestNew: data
                }, function (e) {
                    if (e.ResponseStatus.Message.indexOf("影响") > 0) {
                        $('#errorMessage').html("&nbsp;&nbsp;&nbsp;&nbsp;" + e.ResponseStatus.Message);
                    } else {
                        alert(e.ResponseStatus.Message);
                    }
                    remainTime('#btnValidateCode');
                }, function (e) {
                    alert(e.message);
                    $('#btnValidateCode').attr("disabled", false);
                }
            );
        });

        $("#btnSubmitValidateCode").click(function () {

            $('#btnSubmitValidateCode').attr("disabled", true);
            var data = { BindType: "Add", ValidateType: "Mobile", Step: "Fourth", Mobile: $("#MobilePhone").val(), ValidateCode: $("#txtValidateCode").val() };
            gateway.postToService(
                {
                    MobileRequestNew: data
                }, function (e) {
                    alert(e.ResponseStatus.Message);
                    $('#btnSubmitValidateCode').attr("disabled", false);
                    BindSucc();
                }, function (e) {
                    if (e.errorCode == "511") {
                        if (e.message.indexOf("成功") > 0) {
                            BindSucc();
                        }

                        alert(e.message);
                    } else {
                        alert(e.message);
                    }
                    $('#btnSubmitValidateCode').attr("disabled", false);
                }
            );
        });

        function BindSucc() {
            $('#liValidateCode').remove();
            $('#btnValidateCode').remove();
            $("#spanvalidatecode").remove();
            $('#divValidateMessage').html("绑定成功");
            $("#MobilePhone").attr('disabled', 'true');
            $("#mobile_suc").append('<em>如果您更换了手机号码，请点击<a href="/cert/mobile">此处修改</a></em>');
        }
    </script>
    <div style="display: none">
             /*无双*/
     
            <!-- Google Code for register Conversion Page -->
            <script type="text/javascript">
                /* <![CDATA[ */
                var google_conversion_id = 980717048;
                var google_conversion_language = "en";
                var google_conversion_format = "3";
                var google_conversion_color = "ffffff";
                var google_conversion_label = "c0ZuCKjQ0gcQ-JvS0wM";
                var google_conversion_value = 0;
                var google_remarketing_only = false;
            /* ]]> */
            </script>
            <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
                </script>
            <noscript>
                <div style="display: inline;">
                    <img height="1" width="1" style="border-style: none;" alt="" src="//www.googleadservices.com/pagead/conversion/980717048/?value=0&amp;label=c0ZuCKjQ0gcQ-JvS0wM&amp;guid=ON&amp;script=0" />
                </div>
            </noscript>
                
        
        
        //全角转半角
        <script>
            $(function() {
                $('#QQ,#IdNumber,#ResidencePhone,#companyPhone,#MobilePhone').bind('keyup', function () {
                    CtoH(this);
                });
            });
            function CtoH(obj) {
                var str = obj.value;
                var result = "";
                for (var i = 0; i < str.length; i++) {
                    if (str.charCodeAt(i) == 12288) {
                        result += String.fromCharCode(str.charCodeAt(i) - 12256);
                        continue;
                    }
                    if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) result += String.fromCharCode(str.charCodeAt(i) - 65248);
                    else result += String.fromCharCode(str.charCodeAt(i));
                }
                obj.value = result;
            }
        </script>
       

        <script type="text/javascript">
            var _mvq = _mvq || [];
            _mvq.push(['$setAccount', 'm-24792-0']);
            _mvq.push(['$setGeneral', 'registered', '', 'qq595121869', '9631229']);
            _mvq.push(['$logConversion']);
        </script>
    </div>
    <!-- Google Code for &#27880;&#20876;725 Conversion Page Begin-->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 968292381;
        var google_conversion_language = "en";
        var google_conversion_format = "3";
        var google_conversion_color = "ffffff";
        var google_conversion_label = "LCv7CKu4jxMQnfDbzQM";
        var google_remarketing_only = false;
    /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
        </script>
    <noscript>
        <div style="display: inline;">
            <img height="1" width="1" style="border-style: none;" alt="" src="//www.googleadservices.com/pagead/conversion/968292381/?label=LCv7CKu4jxMQnfDbzQM&amp;guid=ON&amp;script=0" />
        </div>
    </noscript>
    <!-- Google Code for &#27880;&#20876;725 Conversion Page End-->

    <!-- Google Tag Manager -->
    <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-WSCJD4"
            height="0" width="0" style="display: none; visibility: hidden"></iframe>
    </noscript>
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WSCJD4');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Code for &#27880;&#20876; Conversion Page -->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 977881590;
        var google_conversion_language = "en";
        var google_conversion_format = "2";
        var google_conversion_color = "ffffff";
        var google_conversion_label = "n5mACLqdxQcQ9pOl0gM";
        var google_conversion_value = 1.00;
        var google_conversion_currency = "CNY";
        var google_remarketing_only = false;
    /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"> 
        </script>
    <noscript>
        <div style="display: inline;">
            <img height="1" width="1" style="border-style: none;" alt="" src="//www.googleadservices.com/pagead/conversion/977881590/?value=1.00&amp;currency_code=CNY&amp;label=n5mACLqdxQcQ9pOl0gM&amp;guid=ON&amp;script=0" />
        </div>
    </noscript>
    
    <script type='text/javascript' src='http://static.abtester.cn/boot/29.js' ></script>
</body>
</html>



