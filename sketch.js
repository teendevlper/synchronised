var ball,database,pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
   
    var ballposref = database.ref('ball/position'); 
    ballposref.on("value",readposition,showerror);


}

function draw(){
   
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readposition(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}

function showerror(){
    console.log("ERROR 404!");
}

function writePosition(x,y){
    var ballposref = database.ref('ball/position');
    ballposref.set({
             'x' : pos.x + x,
             'y' : pos.y + y
    });
}