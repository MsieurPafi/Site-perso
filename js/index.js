(function() {
  var show_text, split;

  split = function() {
    var i, text, words;
    words = $('h2').text().split('');
    for (i in words) {
      i = i;
      words[i] = '<span>' + words[i] + '</span>';
    }
    text = words.join('');
    $('h2').html(text);
  };

  show_text = function() {
    var count, end_time, in_speed, length;
    split();
    in_speed = 10;
    count = 0;
    length = $('.current_step p span').length;
    end_time = length * in_speed + 200;
    $('h2 span').each(function() {
      $(this).delay(1300 + in_speed * count).animate({
        opacity: '1'
      }, 200);
      count++;
    });
  };

  show_text();

}).call(this);