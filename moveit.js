var first=true;
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function sample() {
   first=false;
   $(document).ready(function(){
    $("p").remove();
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+getRandomArbitrary(1,30)+"&callback=", function(a) {
         $("body").append("<p id=\"para\">" + a[0].content +"</p>"+ "<p >&mdash;" + a[0].title +  "</p>")
         });
      });
}
function change_bg() {
   if(first)
      sample();
  var bg1 = ["https://i.stack.imgur.com/yEQ6k.jpg", "https://previews.123rf.com/images/frankrohde/frankrohde1105/frankrohde110500208/9443736-Abstract-grunge-background-pattern-for-your-text-Stock-Photo-texture.jpg", "https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg"];
  var string = bg1[getRandomArbitrary(0, bg1.length)];
  document.body.style.background = "url('" + string + "') no-repeat fixed";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center center";
}
function anim() {
      $("body").animate({opacity: 0.0});
      sample();
      sleep(500);
      $("body").animate({opacity: 1.0});
}
