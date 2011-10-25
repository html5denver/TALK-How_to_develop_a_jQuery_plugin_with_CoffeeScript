(function() {
  (function($) {
    return $.externalurl = function(el, options) {
      var defaults, externalurl, init;
      defaults = {
        messageStay: "Thanks for sticking with us!",
        messageConfirm: "Are you sure you want to leave us?"
      };
      externalurl = this;
      externalurl.settings = {};
      init = function() {
        externalurl.settings = $.extend({}, defaults, options);
        externalurl.el = el;
        externalurl.selector = "[data-external]";
        return $(this).delegate(externalurl.selector, "click", function(e) {
          var ask, url;
          e.preventDefault();
          url = $(this).data("url") || this.href;
          ask = $(this).data("confirm") || externalurl.settings.messageConfirm;
          if (!url) {
            return false;
          }
          if (confirm(ask)) {
            return window.location.href = url;
          } else {
            return alert(externalurl.settings.messageStay);
          }
        });
      };
      return init();
    };
  })(jQuery);
}).call(this);
