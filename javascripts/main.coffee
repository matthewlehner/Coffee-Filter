# functions that should run on load
$(window).load(->
  hover_tags()
  set_placeholder_text()
  set_autoexpand()
  set_square_image()
  set_center_image()
  set_autolink()
  set_tabindex()
  set_kb()
)

set_autoexpand = ->
  $('#autoexpand textarea').autoexpand(autoexpand_notifer)

autoexpand_notifer = ->
  note = $('#autoexpand_notifier')
  note.html('<br>autoexpand just ran!')

  setTimeout(->
    note.text ''
  , 1000)

set_square_image = ->
  $('#square_image_wrapper').square_image()

set_center_image = ->
  $('#center_image_wrapper').center_image()

set_autolink = ->
  $('#to_autolink').link_urls()

set_tabindex = ->
  window.set_tabindex([
    $('.tabindex1'),
    $('.tabindex2'),
    $('.tabindex3'),
    $('.tabindex4')
  ])

set_kb = ->
  inputs = $('#keyboard_shortcuts input, #keyboard_shortcuts textarea')

  inputs.on 'focus', ->
    set_kb_status window.should_allow_keyboard_shortcuts()

  inputs.on 'blur', ->
    set_kb_status window.should_allow_keyboard_shortcuts()

set_kb_status = (status)->
  s = $('#kb_status')
  s.removeClass('go').removeClass('no')

  if status
    s.addClass('go').text('go')
  else
    s.addClass('no').text('no go')
