// JavaScript Document
$(function() {
    

(function ($) {
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* 信息不能为空",
                    "alertTextCheckboxMultiple": "* 请选择一个项目",
                    "alertTextCheckboxe": "* 您必须选择此项",
                    "alertTextDateRange": "* 日期不能为空"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* 無效的 ",
                    "alertText2": " 日期範圍"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* 無效的 ",
                    "alertText2": " 時間範圍"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* 内容需大于 ",
                    "alertText2": "个字"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* 内容需小于 ",
                    "alertText2": "个字"
                },
				
				"phoneMinlength": {
                    "regex": "none",
                    "alertText": "* 手机号需为11位数字 "
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* 你必需選填其中一個欄位"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* 最小值為 "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* 最大值為 "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* 日期必需早於 "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* 日期必需晚於 "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* 最多選取 ",
                    "alertText2": " 個項目"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* 請選取 ",
                    "alertText2": " 個項目"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* 欄位內容不相符"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 无效的信用卡号码"
                },
                "phone": {
                       // credit: jquery.h5validate.js / orefalo
                   // "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "regex1": /^1[0-9]{13,13}$/,
                    "regex2": /^(13[0-9]|14[57]|15[0-35-9]|17[0678]|18[0-9])[0-9]{8}$/,
        			"regex3":/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(1)\d{10}$)/,
        			"alertText": "* 请输入正确电话号码。固话格式：021-51870819；手机格式：13813888888"
                },
				"mobile": {
                    // credit: jquery.h5validate.js / orefalo
				    "regex": /^(13[0-9]|14[57]|15[0-35-9]|17[0678]|18[0-9])[0-9]{8}$/,
                    "alertText": "* 请输入正确的手机号码"
                },
				
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* 请输入正确的邮箱地址"
                },
				
				 "yahooemail": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^([a-zA-Z0-9_\.\-])*\.\@yahoo.com ?$/,
                    "alertText": "* 请输入可用的雅虎邮箱"
                },
				
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* 请输入整数数字"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* 请输入整数数字"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* 無效的日期，格式必需為 YYYY-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* 無效的 IP 位址"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* 请输入正确的链接地址"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* 请输入整数数字"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* 只接受英文字母大小寫"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z@._.-]+$/,
                    "alertText": "* 包含非法字符，请去除"
                },
				"checkstring":{
					"regex":/^[a-z0-9\\u4E00-\\u9FFF]+(\s+[a-z0-9\\u4E00-\\u9FFF]+)+$/,
					"alertText":"* 请去除特殊字符"
					},
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "http://ac.ppdai.com/registercheck/",
                    // you may want to pass extra data on the ajax call
                    "dataType": "jsonp",
                    "jsonp": 'callback',
                    "extraData": "",
                    "alertText": "* 用户名已存在",
                    "alertTextLoad": "* 请稍等。"
                },
				"ajaxEmailCall": {
				    "url": "http://ac.ppdai.com/registercheck/",
				    "dataType": "jsonp",
				    "jsonp": 'callback',
                    // you may want to pass extra data on the ajax call
                    "extraData": "",
                    "alertText": "* 该邮箱已被注册",
                    "alertTextLoad": "* 请稍等。"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此帳號名稱可以使用",
                    "alertText": "* 此帳號名稱已經被其他人使用",
                    "alertTextLoad": "* 正在確認帳號名稱是否有其他人使用，請稍等。"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "",
                    // error
                    "alertText": "* 此名稱可以使用",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此名稱已經被其他人使用",
                    // speaks by itself
                    "alertTextLoad": "* 正在確認名稱是否有其他人使用，請稍等。"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
				     "url": "http://ac.ppdai.com/registercheck/",
	                    // error
	                    "alertText": "* 用户名已存在",
	                    // speaks by itself
	                    "alertTextLoad": "* 请稍等..."
	                },
                "validate2fields": {
                    "alertText": "* 請輸入 HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* 無效的日期格式"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* 無效的日期或時間格式",
                    "alertText2": "可接受的格式： ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM 或 ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            },
				"username":{
					"regex":/^\w*[a-zA-Z]+\w*$/,
					"alertText":"* 用户名可由字母，数字和下划线组成，且必须包含字母"
				},
				"password":{
					"regex":/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
					"alertText":"* 密码可由字母，数字和特殊字符组成，且必须包含字母和数字"
				},
				"realname":{
					"regex":/^[\u4E00-\u9FA5]+·[\u4E00-\u9FA5]+$|^[\u4E00-\u9FA5]+$/,
					"alertText":"* 必须为中文"
				},
				"card":{
					"cardfunc":function(field){},
					"alertText":"* 请输入正确的身份证号码"
				},
				"month_money":{
					"regex":/^(([0-9]+\.[0-9]{2})|([0-9]+\.[0-9]{1})|([0-9]*[1-9][0-9]*))$/,
					"alertText":"* 请输入正确的月营业额"
					},
				"money":{
					"regex":/^([0-9]{1,8}\.[0-9]{1,2}|[0-9]{1,8})$/,
					"alertText":"* 请输入正确的金额"
					},
				"only2float":{
					"regex":/^(([0-9]+\.[0-9]{2})|([0-9]+\.[0-9]{1})|([0-9]*[1-9][0-9]*))$/,
					"alertText":"请输入正确的格式，如：1 、 1.1 、 1.11"
					},
				"lendmoney":{
					"regex": "none",
                    "alertText": "* 借款金额应在 ",
                    "alertText2": "元到",
					"alertText3": "元之间"
					},
				"Rate":{
					"regex": "none",
                    "alertText": "* 可发标年利率范围在",
                    "alertText2": "%-",
					"alertText3": "%之间"
					},
				"guahua":{
					"regex":/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,
					"alertText":"* 请输入正确的固定电话号码"
					}
				
            };
            
        },
        setcookie: function (name, value, exp)//两个参数，一个是cookie的名子，
        {
            if (exp != undefined) {
                document.cookie = name + "=" + value + ";domain=.ppdai.com" + ";expires=" + exp.toGMTString() + ";path=/";
            } else {
                document.cookie = name + "=" + value + ";domain=.ppdai.com" + ";path=/";
            }
            
        },
        getcookie:function (name)//取cookies函数        
        {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) {
                var cookieValue=unescape(arr[2]);
                if(cookieValue!=undefined&& cookieValue.length>0)
                {
                    return unescape(arr[2]); 
                } 
                return null;

            }
            return null;

        },
        encookie:function() {
            var utmzValue = this.getcookie("__utmz");
            if (/[\u4e00-\u9fa5]/.test(utmzValue)) {
                utmzValue = encodeURI(utmzValue).replace(/%7C/g, "|");
                this.setcookie("__utmz", utmzValue);
            }
        }
        
    };
    $.validationEngineLanguage.encookie();
    $.validationEngineLanguage.newLang();
})(jQuery);
});