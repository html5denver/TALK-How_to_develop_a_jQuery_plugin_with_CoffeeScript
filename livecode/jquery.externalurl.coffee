(($) ->
  $.externalurl = (el, options) ->
    defaults =
      messageStay:    "Thanks for sticking with us!"
      messageConfirm: "Are you sure you want to leave us?"

    externalurl          = @
    externalurl.settings = {}

    init = ->
      externalurl.settings = $.extend({}, defaults, options)
      externalurl.el       = el
      externalurl.selector = "[data-external]"

      $(this).delegate externalurl.selector, "click", (e) ->
        e.preventDefault()

        url = $(this).data("url") or @href
        ask = $(this).data("confirm") or externalurl.settings.messageConfirm

        return false unless url

        if confirm(ask)
          window.location.href = url
        else
          alert externalurl.settings.messageStay

    init()
) jQuery
