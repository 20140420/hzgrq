//新注册验证
function RegAuth(str) {
    if (str == 'UserName') {
        return T_user()
    } else if (str == 'Email' && $("#txtEmail").length > 0) {
        return T_email()
    } else if (str == 'Password') {
        return T_pwd()
    } else if (str == 'all') {
        T_user();
        T_email();
        T_pwd();
        T_agree();
        if ($("#txtEmail").length > 0) {
            if (T_user() == true && T_email() == true && T_pwd() == true && T_agree() == true && $("#txtUserName").attr('isreged') != 'true' && $("#txtEmail").attr('isreged') != 'true') {
                return true;
            } else {
                return false;
            }
        } else {
            if (T_user() == true && T_pwd() == true && T_agree() == true && $("#txtUserName").attr('isreged') != 'true') {
                return true;
            } else {
                return false;
            }
        }
    }
}
function T_user() {
    var userreg = /^\w*[a-zA-Z]+\w*$/;
    if ($("#txtUserName").val() == "") {
        $("#txtUserName").parent('td').next().find('span').html('请输入用户名').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else if ($("#txtUserName").val().length < 3 || $("#txtUserName").val().length > 15) {
        $("#txtUserName").parent('td').next().find('span').html('用户名长度必须在3至15个字符之间').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else if (!userreg.test($("#txtUserName").val())) {
        $("#txtUserName").parent('td').next().find('span').html('用户名可由字母，数字和下划线组成，且必须包含字母').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else {
        if ($("#txtUserName").attr('isreged') != 'false') {
            $.getJSON("http://ac.ppdai.com/registercheck?callback=?", { name: "userName", value: $("#txtUserName").val(), _: Math.random() }, function (data) {
                if (data.Code != 1) {
                    if ($("#txtUserName").attr('third') != 'false') {
                        $("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');
                    } else {
                        $("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="javascript:void(0)" id="gogl">去关联</a>').addClass('reg_type_e').removeClass('reg_type_s');
                        $("#gogl").live('click', function () {
                            newregBD1($(".register_headerlink_nav"));
                        })
                    }
                    $("#txtUserName").attr('isreged', 'true');

                } else {
                    $("#txtUserName").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
                    $("#txtUserName").attr('isreged', 'false');
                }


            });


            //$.get("/check", { fieldId: 'userName', fieldValue: $("#txtUserName").val(), _: Math.random() }, function (data) {
            //    if (data == '["userName",false]') {
            //        if ($("#txtUserName").attr('third') != 'false') {
            //            $("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');
            //        } else {
            //            $("#txtUserName").parent('td').next().find('span').html('用户名已存在,<a href="javascript:void(0)" id="gogl">去关联</a>').addClass('reg_type_e').removeClass('reg_type_s');
            //            $("#gogl").live('click', function () {
            //                newregBD1($(".register_headerlink_nav"));
            //            })
            //        }
            //        $("#txtUserName").attr('isreged', 'true')
            //    } else {
            //        $("#txtUserName").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
            //        $("#txtUserName").attr('isreged', 'false')
            //    }
            //});
        }
        return true;
    }
}
function T_pwd() {
    var pwdreg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
    if ($("#txtPassword").val() == "") {
        $("#txtPassword").parent('td').next().find('span').html('请输入密码').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else if ($("#txtPassword").val().length < 8 || $("#txtPassword").val().length > 16) {
        $("#txtPassword").parent('td').next().find('span').html('密码长度必须在8至16个字符之间').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else if (!pwdreg.test($("#txtPassword").val())) {
        $("#txtPassword").parent('td').next().find('span').html('密码可由字母，数字和特殊字符组成，且必须包含字母和数字').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else {
        $("#txtPassword").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
        return true;
    }
}
function T_email() {
    var rex = /^[\w-\.]+@(?:[A-Za-z0-9-]+\.)+[a-z]+$/;
    if ($("#txtEmail").val() == "") {
        $("#txtEmail").parent('td').next().find('span').html('请输入邮箱地址').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else if (!rex.test($("#txtEmail").val())) {
        $("#txtEmail").parent('td').next().find('span').html('请输入正确的邮箱地址').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else {
        if ($("#txtEmail").attr('isreged') != 'false') {

            $.getJSON("http://ac.ppdai.com/registercheck?callback=?", { name: "email", value: $("#txtEmail").val(), _: Math.random() }, function (data) {
                if (data.Code != 1) {
                    $("#txtEmail").parent('td').next().find('span').html('邮箱已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');
                    $("#txtEmail").attr('isreged', 'true')

                } else {
                    $("#txtEmail").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
                    $("#txtEmail").attr('isreged', 'false');
                }

            });

            //$.get("/check", { fieldId: 'email', fieldValue: $("#txtEmail").val(), _: Math.random() }, function (data) {
            //    if (data == '["email",false]') {
            //        $("#txtEmail").parent('td').next().find('span').html('邮箱已存在,<a href="/login">去登录</a>').addClass('reg_type_e').removeClass('reg_type_s');
            //        $("#txtEmail").attr('isreged', 'true')
            //    } else {
            //        $("#txtEmail").parent('td').next().find('span').html('').addClass('reg_type_s').removeClass('reg_type_e');
            //        $("#txtEmail").attr('isreged', 'false');
            //    }
            //});
        }
        return true;
    }
}
function T_agree() {
    if ($("#agree").attr('checked') != 'checked') {
        $("#agree").parent('td').next().find('span').html('请同意服务条款').addClass('reg_type_e').removeClass('reg_type_s');
        return false;
    } else {
        $("#agree").parent('td').next().find('span').html('').removeClass('reg_type_e');
        return true;
    }
}
function RegAuth2(str) {
    var alt = '';
    var type = 's';
    var type2 = 'e';
    var a1 = true;
    var a2 = true;
    if (str == null) {
        if ($("#txtUserName").val() == "") {
            alt = '请输入用户名';
            type = 'e';
            type2 = 's';
            a1 = false;
            $("#txtUserName").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
        } else {
            alt = '';
            type = 's';
            type2 = 'e';
            a1 = true;
            $("#txtUserName").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2)
        }

        if ($("#txtPassword").val() == "") {
            alt = '请输入密码';
            type = 'e';
            type2 = 's';
            a2 = false;
            $("#txtPassword").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
        } else {
            alt = '';
            type = 's';
            type2 = 'e';
            a2 = true;
            $("#txtPassword").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
        }

    } else {
        if (str == 'UserName') {
            if ($("#txtUserName").val() == "") {
                alt = '请输入用户名';
                type = 'e';
                type2 = 's';
                a1 = false;
                $("#txtUserName").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
            } else {
                alt = '';
                type = 's';
                type2 = 'e';
                a1 = true;
                $("#txtUserName").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
            }
        }
        if (str == 'Password') {
            if ($("#txtPassword").val() == "") {
                alt = '请输入密码';
                type = 'e';
                type2 = 's';
                a2 = false;
                $("#txtPassword").parent('td').next().find('span').html(alt).addClass('reg_type_' + type).removeClass('reg_type_' + type2);
            } else {
                alt = '';
                type = 's';
                type2 = 'e';
                a2 = true;
                $("#txtPassword").parent('td').next().find('span').html(alt).removeClass('reg_type_' + type2);
            }
        }
    }
    if (a1 == true && a2 == true) { return true } else { return false }
}


function newregBD1(str) {
    str.html('<a href="javascript:void(0);" class="newregister_h_user" id="btnBind">没有拍拍贷账号</a>');
    $("#auth ,#juese").hide();
    $('.tit').find('td').html('用户名和密码，可直接登录！');
    $("#txtType").val('2');
    $("#btnSubmit").val('绑定');
    $("#txtUserName,#txtPassword").attr('isreg', 'true');
    $("#txtUserName,#txtPassword,#agree").parent('td').next().find('span').text('').removeClass();
}
function newregBD2(str) {
    str.html('<a class="newregister_h_user">已有拍拍贷账号</a>');
    $("#auth ,#juese").show();
    $('.tit').find('td').html('完善以下信息，用户名和密码可直接登录！');
    $("#txtType").val('1');
    $("#btnSubmit").val('注册');
    $("#txtUserName,#txtPassword").removeAttr('isreg');
    $("#txtUserName,#txtPassword,#agree").parent('td').next().find('span').text('').removeClass();
}