
$(document).ready(function(){/* activate sidebar */
$('#sidebar').affix({
  offset: {
    top: 235
  }
});

/* activate scrollspy menu */
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});
});

    function validatepesel() {
		var pesel = document.myForm.Pesel.value;
        var reg = /^[0-9]{11}$/;
        if(reg.test(pesel) == false) {
		alert( "Not a PESEL number!" );
        return false;}
		
        else
        {
            var dig = (""+pesel).split("");
            var kontrola = (1*parseInt(dig[0]) + 3*parseInt(dig[1]) + 7*parseInt(dig[2]) + 9*parseInt(dig[3]) + 1*parseInt(dig[4]) + 3*parseInt(dig[5]) + 7*parseInt(dig[6]) + 9*parseInt(dig[7]) + 1*parseInt(dig[8]) + 3*parseInt(dig[9]))%10;
            if(kontrola==0) kontrola = 10;
            kontrola = 10 - kontrola;
            if(parseInt(dig[10])==kontrola)
            return true;
            else
			{
			alert( "Invalid PESEL number!" );
            return false;
			}
        }
     
    }