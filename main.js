var canvas=new fabric.Canvas("myCanvas");
blockImgWidth=30;
blockImgHeight=30;
playerX=10;
playerY=10;
var playerObject="";
var blockImgObject="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}
function newImg(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        blockImgObject=Img;
        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeight);
        blockImgObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImgObject);
    });
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=="80"){
        console.log("p&shiftKeypressedTogether");
        blockImgWidth=blockImgWidth+10;
        blockImgHeight=blockImgHeight+10;
        document.getElementById("current_width").innerHTML=blockImgWidth;
        document.getElementById("current_height").innerHTML=blockImgHeight;
    }
    if (e.shiftKey==true && keyPressed=="77"){
        console.log("m&shiftKeypressedTogether");
        blockImgWidth=blockImgWidth-10;
        blockImgHeight=blockImgHeight-10;
        document.getElementById("current_width").innerHTML=blockImgWidth;
        document.getElementById("current_height").innerHTML=blockImgHeight;
    }
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
    if (keyPressed=="39"){
        right();
        console.log("right");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
    if (keyPressed=="87"){
        newImg('wall.jpg');
        console.log("w");
    }
    if (keyPressed=="71"){
        newImg('ground.png');
        console.log("g");
    }
    if (keyPressed=="76"){
        newImg('light_green.png');
        console.log("l");
    }
    if (keyPressed=="84"){
        newImg('trunk.jpg');
        console.log("t");
    }
    if (keyPressed=="82"){
        newImg('roof.jpg');
        console.log("r");
    }
    if (keyPressed=="89"){
        newImg('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed=="68"){
        newImg('dark_green.png');
        console.log("d");
    }
    if (keyPressed=="85"){
        newImg('unique.png');
        console.log("u");
    }
    if (keyPressed=="67"){
        newImg('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if (playerY>=0){
        playerY=playerY-blockImgHeight;
        console.log("blockImgHeight="+blockImgHeight);
        console.log("whenu up arrow is pressed, x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if (playerY<=500){
        playerY=playerY+blockImgHeight;
        console.log("blockImgHeight="+blockImgHeight);
        console.log("whenu down arrow is pressed, x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if (playerX>=0){
        playerX=playerX-blockImgWidth;
        console.log("blockImgWidth="+blockImgWidth);
        console.log("whenu left arrow is pressed, x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if (playerX<=850){
        playerX=playerX+blockImgWidth;
        console.log("blockImgWidth="+blockImgWidth);
        console.log("whenu right arrow is pressed, x="+playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}