function doit(){
  if (localStorage.getItem('href')){$($('link')[0]).attr('href',localStorage.getItem('href'))}
  $(document).ready(function(){
    $('html').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/60+'px '+rXP/480+'px rgba(227,6,19,.8), '+rYP/48+'px '+rXP/360+'px rgba(255,237,0,1), '+rXP/420+'px '+rYP/36+'px rgba(0,159,227,.7)');
    });
  });
  $('.colormode').click(function(){
    var linktag = $($('link')[0])
    if (linktag.attr('href') === 'main.css'){
      linktag.attr('href','dark.css');
    }else if (linktag.attr('href') === 'dark.css'){
      linktag.attr('href','main.css');
    }
    localStorage.setItem('href',linktag.attr('href'))
  });
  $('#btn').click(function(){
      start();
      $.get('/achievements', function(data){
          document.documentElement.innerHTML = data;
          addStyle();
          window.history.pushState("", "Achievements", "/achievements");
      })
  })
  var lazer= false;
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  $('html').mousemove(function (e){
    if (lazer){
      $('line').attr({
        x2:e.pageX.toString(),
        y2:e.pageY.toString()
      });
      $('.introimg img').attr('src','images/anger.JPG');
    }
    else{
      $('.introimg svg').hide()
      $('.introimg img').attr('src','images/IMG_4317.JPG');
    }
  })

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copy(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function() {
        console.log("Async: Copying to clipboard was successful!");
      },
      function(err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }
}