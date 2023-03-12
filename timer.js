var start= new Date().getTime();
document.getElementById("box").onclick=function() {
    document.getElementById("box").style.display="none";
     var end= new Date().getTime();
     var timeTaken=(end-start)/1000;
     alert(timeTaken);
     move();
 }
function move() {
        var lft;
        var tp;
        var wh;
        var rght;
        lft = Math.random()*300 + "px";
        rght = Math.random()*300 + "px";
        tp = Math.random()*200;
        wh = ((Math.random() * 400) +100);
            
            document.getElementById("box").style.left = lft;
            document.getElementById("box").style.right= rght;
            document.getElementById("box").style.top = tp + "px";
            document.getElementById("box").style.width= wh+ "px";
            document.getElementById("box").style.height= wh+ "px"; 
            document.getElementById("box").style.display= "block";
            document.getElementById("box").style.backgroundColor = getRandomColor();
            start= new Date().getTime();
            
    }
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        //move();
        