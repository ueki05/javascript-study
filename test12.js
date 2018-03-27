document.write("Hello world!!");

// clickイベントにイベントリスナを登録する
$('.foo').bind('click', function () {
  $(this).text('Hello!');
});

// 複数のイベントリスナを一括で登録する
$('.bar').bind({
  'mouseover': function () {
    $(this).text('Hi!');
  },
  'mouseout': function () {
    $(this).text('Bye!');
  }
});

// bazがクリックされたとき、barのmouseoutイベントのイベントリスナを削除する
$('.baz').bind('click', function () {
  $('.bar').unbind('mouseout');
});
