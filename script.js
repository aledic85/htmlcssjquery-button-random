var button = $('.btn-rnd');
var div = $('.num-cont');
var clicks = 0;

button.on({mouseenter: function() {
  div.css({"height": "700px", "width": "800px"})
}, mouseleave: function(){
  div.css({"height": "auto", "width": "300px"})
}, click: function() {
  clicks +=1;
  var rnd = Math.floor(Math.random() * 100) + 1;
  div.html(div.html() + " " + rnd);
  if (rnd % 2 == 0) {
    div.css({"color": "red", "background": "black" });
  } else if (rnd % 2 != 0) {
    div.css({"color": "black", "background": "red" });
  }
  button.html("Genera numero" + " " + clicks);
}})
