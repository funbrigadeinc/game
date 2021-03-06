
function startGame() {
    myGameArea.start();
    myGamePiece = new component(100, 100, "images/jerry.JPG", 10, 120, "image");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.cursor="none";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[20]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousemove',function(e){
          myGameArea.x = e.pageX;
          myGameArea.y = e.pageY;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
}

function component(width, height, color, x, y, type) {
  this.type=type;
  if (type == "image"){
    this.image= new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    if(type == "image"){
      ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
    } else{
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();

  if(myGameArea.x && myGameArea.y){
    myGamePiece.x = myGameArea.x;
    myGamePiece.y = myGameArea.y;
  }
  myGamePiece.update();
}

function moveup(){
  myGamePiece.speedY -=1;
}

function movedown(){
  myGamePiece.speedY +=1;
}

function moveleft(){
  myGamePiece.speedX -=1;
}

function moveright(){
  myGamePiece.speedX +=1;
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
