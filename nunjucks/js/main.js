// main.js
var preventOrphans = function(element) {
	//Would suggest this is used for title text mainly
	$(element).each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});
}

$(function() {

$("#toggleMenu").change( function(e) {
      e.preventDefault();
      ($(".hamburger").hasClass("is-active") === true) ? $(".hamburger").removeClass("is-active") : $(".hamburger").addClass("is-active");
    });
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
