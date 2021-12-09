jQuery(document).ready(function(){
   $('html').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/60+'px '+rXP/480+'px rgba(227,6,19,.8), '+rYP/48+'px '+rXP/360+'px rgba(255,237,0,1), '+rXP/420+'px '+rYP/36+'px rgba(0,159,227,.7)');
   });
});
$('.colormode').click(function(){
  var linktag = $($('link')[0]);
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
var lazer= true;
function between(x, min, max) {
  return x >= min && x <= max;
}
function lineDistance(x, y, x0, y0){
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

function drawLine(a, b, line) {
  var pointA = $(a).offset();
  var pointB = $(b).offset();
  var pointAcenterX = $(a).width() / 2;
  var pointAcenterY = $(a).height() / 2;
  var pointBcenterX = $(b).width() / 2;
  var pointBcenterY = $(b).height() / 2;
  var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
  var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);
  $(line).css('transform', 'rotate(' + angle + 'deg)');
  $(line).css('width', distance + 'px');
  $(line).css('position', 'fixed');
  if(pointB.left < pointA.left) {
    $(line).offset({top: pointA.top + pointAcenterY, left: pointB.left + pointBcenterX});
  } else {
    $(line).offset({top: pointA.top + pointAcenterY, left: pointA.left + pointAcenterX});
  }
}
jQuery(document).ready(function(){
   $('html').mousemove(function(e){
     if (!lazer){
       $(".line,.line2").hide()
     }else{
       $(".line,.line2").show()
     }
     var X = (e.pageX);
     var Y = (e.pageY);
     $(".b").css({'margin-top':Y,'margin-left':X})
     drawLine('.b', '.a', '.line');
     drawLine('.b', '.c', '.line2');
   });
});
