    
    var firstName;
    var score = 0;
    var seconds = 30;
    var clock;
    var t;
    var  xPos;
    var  yPos;
      $(document).ready(function(){

          firstName =  prompt("Enter your Name?", "");
          $("#welcome").text("Are you ready to get started, "+firstName+"?");
         $('#start_button').css({
             'background-color' : '#708090',
             'font-color':'black',
             'font-size': 18,
             'width' : 75,
             'height' : 75   
         });
     
        
             
         $('#start_button').click(function(){
            start();
                   });  
       
          $("#gamespace").on('click',"#basketball", function(){
       	increment();

       	// I used jQueryUI here
         $(this).toggle("fold");
       });          
    });


     
     function  getNumX(){
       return Math.floor(Math.random() * 280);
     };

     function getNumY(){
        return   Math.floor(Math.random() * 500);  
     };
     
     function increment() {
         score++;
        $("#score").html(score + ' points');  
     };

     function start() {
         var image = 'img/floor2.jpg';
        $('#gamespace').css('background-image', 'url(' +
    image + ')'); 
        $('#content').css('background-color', '#FFF5EE');
        $('body').css('background-color', '#708090');
        $('#welcome').hide();
       timer();
       addMole(); 
     };

     function timer() {
     	
     
       if (seconds < 0)
        {
            clearTimeout(clock);
            gameOver();
            
        }else {
        	$('#timer').show();
            $('#timer').html(seconds + ' seconds left');
            clock =  setTimeout("timer()", 1000);
            seconds -=1;  
        }
     }

     function addMole() {
     	if(seconds < 0) {
        clearTimeout(t);
         }
        else {
     	 xPos = getNumX();
         yPos = getNumY();
        $("#gamespace").append('<img id="basketball" src="img/basketball.png" style= "top:'+xPos+'px; left:'+yPos+'px;"/>');
        var rand = Math.floor(Math.random()*2000);                    
        t = setTimeout("addMole()", rand);

     }
}

function gameOver(){
        alert ("game over,try again");
    }
     

    


