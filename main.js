
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    width=screen.width;
    newwidth=screen.width-70;
    newheight=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {

        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
lastx=e.touches[0].clientX-canvas.offsetLeft;
lasty=e.touches[0].clientY-canvas.offsetTop;
        
    }

    

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         currentx =e.touches[0].clientX-canvas.offsetLeft;
         currenty =e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastx + "y = " + lasty);
        ctx.moveTo(lastx, lasty);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentx + "y = " + currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
        

        lastx = currentx; 
        lasty = currenty;
    }

