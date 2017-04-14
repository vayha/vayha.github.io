$(function () {

            'use strict'
          
            $("button").click(function () {
                $(this).fadeOut();
/*= PRZYPADEK==*/
                
                var textpar = $('').text();

/*shotgun*/
                $( "#box" ).click(function() {
                var audio = new Audio("/img/shotgun.mp3"); audio.play();   
});
                          
                
                
                
                
/*KACZKA CLICK*/
                $('#kwadrat').on({
                    'click': function () {
                  
                        var score = parseInt(document.getElementById("score").innerHTML); score++;
                        document.getElementById("score").innerHTML = score;
                        
                        var audio2 = new Audio("/img/hug.mp3"); audio2.play();
/* jesli 5 pkt to...*/                        
                        if (score >= 5) {
                        
                            $('.napis').text(textpar + ' WYGRANA! WESOŁYCH ŚWIĄT ').fadeOut(15000);
                        
                            var audio3 = new Audio("/img/victory.mp3"); audio3.play();
                            
                            };


                    },
                    
/*KACZKA UCIEKAJ*/                    
                    'mouseover': function () {
                        var rand = Math.floor((Math.random() * 100));
                        var rand2 = Math.floor((Math.random() * 100));
                        $(this).hide(200).show(200).animate({
                            'left': rand + '%',
                            'top': rand2 + '%',
                            'background-color': 'green',
                            duration: 30});
                        
                        if (rand <=50){
                            $("#kwadrat").css("background-image", "url(/img/d-jpg/2.png)");
                        }else{
                            $("#kwadrat").css("background-image", "url(/img/d-jpg/1.png)");
                        }
                        }
                    });

                });
            
  });

/*document.getElementById('kwadrat').onclick=function(){
    
}*/
    


/*    if (score <= 4) {
        function () {
                        $('.napis').text(textpar + ' WESOŁYCH ŚWIĄT ').fadeOut(15000);
            
    }else{ $funcion()};

  */  
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
