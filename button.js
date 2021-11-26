function customTag(tagName,fn){
document.createElement(tagName);
var tagInstances = document.getElementsByTagName(tagName);
for ( var i = 0; i < tagInstances.length; i++){fn(tagInstances[i]);}}
 
function button(element){
var x=element.attributes.x.value;
var y=element.attributes.y.value;
var val=element.innerHTML
console.log(x+y);
var url=element.attributes.url.value;
element.innerHTML = '<style>.shadow::after {content:"'+val+'";}</style><div class="button" style="--x: '+x+';--y: '+y+';"><div class="wrapper"><a class="shadow" href="'+url+'">'+val+'</a></div><div class="button__horizontal"></div><div class="button__vertical"></div></div>';
}
customTag("coolbutton",button);
