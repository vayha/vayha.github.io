$(function () {

            'use strict'

            $("button").click(function () {
                $(this).fadeOut();

                var textpar = $('#napis').text();


                $('#kwadrat').on({
                    'click': function () {
                        $('.napis').text(textpar + ' WESOŁYCH ŚWIĄT ').fadeOut(15000);

                    },
                    'mouseover': function () {
                        var rand = Math.floor((Math.random() * 100));
                        var rand2 = Math.floor((Math.random() * 100));
                        $(this).hide(200).show(200).animate({
                            'left': rand + '%',
                            'top': rand2 + '%',
                            'background-color': 'green',
                            duration: 30});
                        
        /* PONIŻEJ TĄ FUNKCJĘ NAPISAŁEM SAM!!! JESTEM MEGA DUMNY */
                        if (rand <=50){
                            $("#kwadrat").css("background-image", "url(/img/d-jpg/2.png)");
                        }else{
                            $("#kwadrat").css("background-image", "url(/img/d-jpg/1.png)");
                        }
                        }
                    });

                });
            });
  


/*setInterval (function() {
    var ptak = ["img/d-jpg/1.jpg", "img/d-jpg/2.jpg"];
     document.getElementById("#kwadrat").style.backgroundImage ="url(" + tla[Math.floor(Math.random() * 2)] + ")";
}, 1000);*/

    
/*$(document).ready(function(){ 

	var n = $("#kwadrat").length;

	if (n < 2) {
		$("body").css("background", "green");
	} 
	else {
		$("body").css("background", "orange");
	}

});*/
