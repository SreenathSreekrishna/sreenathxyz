$($('link')[0]).attr('href',localStorage.getItem('href'))
$(document).ready(function(){
   $('html').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/60+'px '+rXP/480+'px rgba(227,6,19,.8), '+rYP/48+'px '+rXP/360+'px rgba(255,237,0,1), '+rXP/420+'px '+rYP/36+'px rgba(0,159,227,.7)');
   });
});
$('.colormode').click(function(){
  var linktag = $($('link')[0]);
  localStorage.setItem('href',linktag.attr('href'))
  if (linktag.attr('href') === 'main.css'){
    linktag.attr('href','dark.css');
  }else if (linktag.attr('href') === 'dark.css'){
    linktag.attr('href','main.css');
  }
});
$("#btn").click(function(){
  $("#modal").css('display','block')
})
$(".close").click(function(){
  $("#modal").css('display','none')
})
$("#academics").click(function(){
  $(".accontent").show();
  $(".otcontent").hide();
})
$("#other").click(function(){
  $(".otcontent").show();
  $(".accontent").hide();
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
