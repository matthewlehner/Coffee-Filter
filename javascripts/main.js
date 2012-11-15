// Generated by CoffeeScript 1.4.0
(function() {
  var autoexpand_notifer, set_ajax_button, set_autoexpand, set_autolink, set_center_image, set_kb, set_kb_status, set_square_image, set_tabindex;

  $(window).load(function() {
    $.SyntaxHighlighter.init({
      wrapLines: false,
      lineNumbers: false,
      theme: 'sunburst',
      themes: ['sunburst'],
      baseUrl: "" + window.location.origin + (window.location.origin.match('github') ? '/Coffee-Filter' : '')
    });
    hover_tags();
    set_placeholder_text();
    set_autoexpand();
    set_square_image();
    set_center_image();
    set_ajax_button();
    set_autolink();
    set_tabindex();
    return set_kb();
  });

  set_autoexpand = function() {
    return $('#autoexpand textarea').autoexpand(autoexpand_notifer);
  };

  autoexpand_notifer = function() {
    var note;
    note = $('#autoexpand_notifier');
    note.html('<span style="color: red">autoexpand just ran!</span>');
    return setTimeout(function() {
      return note.text('this text will change when autoexpand runs');
    }, 1000);
  };

  set_square_image = function() {
    return $('#square_image_wrapper').square_image();
  };

  set_center_image = function() {
    return $('#center_image_wrapper').center_image();
  };

  set_ajax_button = function() {
    return $('.fancy_button').on('click', function(e) {
      var _this = this;
      e.preventDefault();
      $(this).save_state();
      return setTimeout(function() {
        return $(_this).unsave_state();
      }, 1500);
    });
  };

  set_autolink = function() {
    return $('#to_autolink').link_urls(30);
  };

  set_tabindex = function() {
    return window.set_tabindex([$('.tabindex1'), $('.tabindex2'), $('.tabindex3'), $('.tabindex4')]);
  };

  set_kb = function() {
    var inputs;
    inputs = $('#keyboard_shortcuts input, #keyboard_shortcuts textarea, #keyboard_shortcuts select');
    inputs.on('focus', function() {
      return set_kb_status(window.should_allow_keyboard_shortcuts());
    });
    return inputs.on('blur', function() {
      return set_kb_status(window.should_allow_keyboard_shortcuts());
    });
  };

  set_kb_status = function(status) {
    var s;
    s = $('#kb_status');
    s.removeClass('go').removeClass('no');
    if (status) {
      return s.addClass('go').text('go');
    } else {
      return s.addClass('no').text('no go');
    }
  };

}).call(this);
