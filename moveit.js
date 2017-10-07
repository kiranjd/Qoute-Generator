function image
{
  return url(https://tpc.googlesyndication.com/simgad/7074644680100628249);
}
document.addEventListener("DOMContentLoaded", function(event) {

    var bgSrc1 = "http://urlpic1.jpg";
    var bgSrc2 = "http://urlpic2.jpg";
    var bgElem = document.getElementById('showcase-row');
    var num = getRandomArbitrary(0,1);

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    if(num >= 0.5){
        bgElem.style.backgroundImage = "url('" + bgSrc1 + "')";
        bgElem.style.backgroundPosition = "0 -80px";
    }else{
        bgElem.style.backgroundImage = "url('" + bgSrc2 + "')";
    }
});
