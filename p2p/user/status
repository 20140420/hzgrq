jQuery('.PPD_login_status').html('<div class="tool_nav_bar font_yahei"><div class="tool_nav"><a class="delogin" href="http://p2p.guruquan.com">登录</a><em>|</em><a class="delogin" href="http://p2p.guruquan.com">注册</a><em>|</em><a href="http://p2p.guruquan.com" target="_blank" name="tool_help"><i>帮助</i><em class="icon"></em></a><em>|</em><a href="http://p2p.guruquan.com" target="_blank">论坛</a></div></div>');
var ac_status = { acSiteUrl: 'http://ac.ppdai.com', acStatic_Url: 'http://acstatic.ppdaicdn.com', www_ppdaicdn_Url: 'http://www.ppdaicdn.com', StatusScript_Version: '201410301516', IsTroubleLogin: false, LastLoginInfo: {}, SyncLoginDiscuzFlag: false, IsInMobilePhoneUserList: false };
var ac_status_acSiteUrl = 'http://ac.ppdai.com';var ac_status_acStatic_Url = 'http://acstatic.ppdaicdn.com';var ac_status_www_ppdaicdn_Url = 'http://www.ppdaicdn.com';var ac_status_StatusScript_Version = '201410301516';var ac_status_IsTroubleLogin = false;var ac_status_LastLoginInfo = {};var ac_status_SyncLoginDiscuzFlag = false;var ac_status_IsInMobilePhoneUserList = false;
(function () {
  var ac_lsctl = {
    createTag: function(t, url) {
      var e0 = document.createElement(t); e0.src = url;
      switch (t) {
      case 'script':
        e0.type = 'text/javascript';
        break;
      default:
        break;
      }
      document.body.appendChild(e0);
    },
    safeFunc: function (func) {
      try { func(); } catch (err0) { }
    },
    init: function() {
      var that = this;
      if (self == top) {
        that.safeFunc(function(){
          var flag0 = ac_status.SyncLoginDiscuzFlag;
          if (flag0) {
            jQuery.getJSON(ac_status.acSiteUrl + '/Status/SyncLoginDiscuz?callback=?', {}, function(r0) {
              if (r0.Content && r0.Content.length > 0) {
                that.createTag('script', r0.Content);
              }
            });
          }
        });
      } else {
        that.safeFunc(function(){
          jQuery.getJSON(ac_status.acStatic_Url + '/Status/RecordDnsHijack?callback=?', {}, function (r1) {
            top.location = self.location;
          });
        });
      }
      that.createTag('script', ac_status.acStatic_Url + '/js/acstatus.min.js?v=' + ac_status.StatusScript_Version);
    }
  };
  ac_lsctl.init();
})();