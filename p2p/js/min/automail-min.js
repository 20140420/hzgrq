/*
邮箱提示，bybeihua
*/
(function ($) {
    $.fn.autoMail = function (options) {
        var opts = $.extend({}, $.fn.autoMail.defaults, options);
        return this.each(function () {
            var $this = $(this);
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            var top;
            var left;
            top = $this.offset().top + $this.height() + 25;
            left = $this.offset().left - 1;
            if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                top = $this.offset().top + $this.height() + 25;
                left = $this.offset().left - 1;
            }
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.appVersion.match(/7./i) == "7.") {
                    top = $this.offset().top + $this.height() + 25;
                    left = $this.offset().left - 1;
                }
                if (navigator.appVersion.match(/8./i) == "8.") {
                    top = $this.offset().top + $this.height() + 25;
                    left = $this.offset().left - 9;
                }
            }
            if ($("#content_nav").length < 1) {
                top = $this.offset().top + 40;
            } else {
                top = $this.offset().top + 55;
            }
            if ($(this).parent().parent('ul').attr('firstusermail') == 'true') {
                top = $this.position().top + $this.height() + 284;
            }

            var $mailBox = $('<div id="mailBox" style="top:' + top + 'px;left:' + left + 'px;width:' + $this.width() + 'px"></div>');
            $('body').append($mailBox);

            //设置高亮li
            function setEmailLi(index) {
                $("#mailBox li").removeClass("cmail").eq(index).addClass("cmail")
            }
            //初始化邮箱列表
            var emails = o.emails;
            var init = function (input) {
                //取消浏览器自动提示
                input.attr('autocomplete', 'off');
                //添加提示邮箱列表
                if (input.val() != "") {
                    var emailList = '<p>请选择邮箱类型</p><ul>';
                    for (var i = 0; i < emails.length; i++) {
                        emailList += '<li>' + input.val() + '@' + emails[i] + '</li>';
                    }
                    emailList += '</ul>';
                    $mailBox.html(emailList).show(0);
                } else {
                    $mailBox.hide(0);
                }
                //添加鼠标事件
                $('#mailBox li').hover(function () {
                    $('#mailBox li').removeClass('cmail');
                    $(this).addClass('cmail');
                }, function () {
                    $(this).removeClass('cmail');
                }).click(function () {
                    input.val($(this).html());
                    $mailBox.hide(0);
                    input.focus();
                    input.attr('data-validation-engine', 'validate[required ,custom[email],ajax[ajaxEmailCall]]');
                });
            }
            //当前高亮下标
            var eindex = -1;
            //监听事件
            $this.focus(function () {
                if ($this.val().indexOf("@") == -1) {
                    init($this)
                } else {
                    $mailBox.hide(0)
                }
            }).blur(function () {
                setTimeout(function () {
                    $mailBox.hide(0);
                    $("#email").attr("data-validation-engine", "validate[required ,custom[email],ajax[ajaxEmailCall]]")
                },
                1000)
            }).keyup(function (event) {
                if ($this.val().indexOf("@") == -1) {
                    //上键
                    if (event.keyCode == 40) {
                        eindex++;
                        if (eindex >= $("#mailBox li").length) {
                            eindex = 0
                        }
                        setEmailLi(eindex)
                    } else {
                        if (event.keyCode == 38) {
                            eindex--;
                            if (eindex < 0) {
                                eindex = $("#mailBox li").length - 1
                            }
                            setEmailLi(eindex)
                        } else {
                            if (event.keyCode == 13) {
                                if (eindex >= 0) {
                                    $this.val($("#mailBox li").eq(eindex).html());
                                    $mailBox.hide(0);
                                    $("#email").focus();
                                    $("#email").attr("data-validation-engine", "validate[required ,custom[email],ajax[ajaxEmailCall]]")
                                }
                            } else {
                                eindex = -1;
                                init($this)
                            }
                        }
                    }
                } else {
                    $mailBox.hide(0)
                }
                //如果在表单中，防止回车提交
            }).keydown(function (event) {
                if (event.keyCode == 13) {
                    return false;
                }
            });
        });
    }
    $.fn.autoMail.defaults = {
        emails: []
    }
})(jQuery);

(function($) {
    $.fn.autoMailii = function(options) {
        var opts = $.extend({},
        $.fn.autoMailii.defaults, options);
        return this.each(function() {
            var $this = $(this);
            var o = $.meta ? $.extend({},
            opts, $this.data()) : opts;
            var top;
            var left;
            top = $this.offset().top + $this.height() + 25;
            left = $this.offset().left - 1;
            if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                top = $this.offset().top + $this.height() + 25;
                left = $this.offset().left - 1
            }
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.appVersion.match(/7./i) == "7.") {
                    top = $this.offset().top + $this.height() + 25;
                    left = $this.offset().left - 1
                }
                if (navigator.appVersion.match(/8./i) == "8.") {
                    top = $this.offset().top + $this.height() + 25;
                    left = $this.offset().left - 9
                }
            }
            if ($("#content_nav").length < 1) {
                top = $this.offset().top + 40;
            }else {
                top = $this.offset().top+55;
            }
            if ($(this).parent().parent('ul').attr('firstusermail') == 'true') {
                top = $this.position().top + $this.height() + 284;
            }
            var $mailBox = $('<div id="mailBox" style="top:' + top + "px;left:" + left + "px;width:" + $this.width() + 'px"></div>');
            $("body").append($mailBox);
            function setEmailLi(index) {
                $("#mailBox li").removeClass("cmail").eq(index).addClass("cmail")
            }
            var emails = o.emails;
            var init = function(input) {
                input.attr("autocomplete", "off");
                if (input.val() != "") {
                    var emailList = "<p>请选择邮箱类型</p><ul>";
                    for (var i = 0; i < emails.length; i++) {
                        emailList += "<li>" + input.val() + "@" + emails[i] + "</li>"
                    }
                    emailList += "</ul>";
                    $mailBox.html(emailList).show(0)
                } else {
                    $mailBox.hide(0)
                }
                $("#mailBox li").hover(function() {
                    $("#mailBox li").removeClass("cmail");
                    $(this).addClass("cmail")
                },
                function() {
                    $(this).removeClass("cmail")
                }).click(function() {
                    input.val($(this).html());
                    $mailBox.hide(0);
					input.focus();
                })
            };
            var eindex = -1;
            $this.focus(function() {
                if ($this.val().indexOf("@") == -1) {
                    init($this)
                } else {
                    $mailBox.hide(0)
                }
            }).blur(function() {
                setTimeout(function() {
                    $mailBox.hide(0);
                },
                1000)
            }).keyup(function(event) {
                if ($this.val().indexOf("@") == -1) {
                    if (event.keyCode == 40) {
                        eindex++;
                        if (eindex >= $("#mailBox li").length) {
                            eindex = 0
                        }
                        setEmailLi(eindex)
                    } else {
                        if (event.keyCode == 38) {
                            eindex--;
                            if (eindex < 0) {
                                eindex = $("#mailBox li").length - 1
                            }
                            setEmailLi(eindex)
                        } else {
                            if (event.keyCode == 13) {
                                if (eindex >= 0) {
                                    $this.val($("#mailBox li").eq(eindex).html());
                                    $mailBox.hide(0);
                                    $("#email").focus();
                                }
                            } else {
                                eindex = -1;
                                init($this)
                            }
                        }
                    }
                } else {
                    $mailBox.hide(0)
                }
            }).keydown(function(event) {
                if (event.keyCode == 13) {
                    return false
                }
            })
        })
    };
    $.fn.autoMailii.defaults = {
        emails: []
    }
})(jQuery);