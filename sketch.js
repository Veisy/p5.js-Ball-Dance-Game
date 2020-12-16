var el = {
  
  cap: 20,
  colR: 150,
  colG: 150,
  colB: 150
}
var x = 100;
var y = 200;

var xDeg = 3;
var yDeg = 3;



function setup() {
  createCanvas(900, 600);

}

function draw() {

  background(0);
  ballDisplay();
  
  // ortadaki duvarlar;
  cobble(width/4,height/3,width*7/16,height*2/3,width/16,height/12);
  cobble(width*9/16,height/3,width*3/4,height*2/3,width/16,height/12);
  
  //köşeler;
  //üst
  cobble(0,0,width,height/12,width/16,height/12);
  //sol
  cobble(0,height/12,width/16,height,width/16,height/12);
  //alt
  cobble(0,height*11/12,width,height,width/16,height/12);
  //sağ
  cobble(width*15/16,height/12,width,height*11/12,width/16,height/12);
  move();

}


//Taşları diz;

function cobble(a,b,aF,bF,m,n){
  
  for ( var i = a ; i < aF ; i += m){
    for(var j = b ; j < bF ; j +=n ){
      cobblestone(i,j,m,n);
    }
  }
  
  
  //Topun çarpması;
  
  if ((x > a- el.cap && x < aF + el.cap) && (y > b - el.cap && y < bF + el.cap)) {
    if (x < a || x > aF) {
      xDeg = xDeg * (-1);
    }
    if (y < b || y >= bF) {
      yDeg = yDeg * (-1);
    }
    whenHit()
  }
}


//Taşın özellikleri;

function cobblestone(k,l,m,n) {

  fill(50);
  strokeWeight(5);
  stroke(150);
  rectMode(CORNER);
  
  rect(k, l, m, n);
  
} 


//Mouse tıklandığında ne olacak;

function mouseClicked() {
  
  xDeg = (x - mouseX) / 80;
  yDeg = (y - mouseY) / 80;
  
  
  el.colR = 0;
  el.colG = 100;
  el.colB = 100;

}


//Çarpışmadaki renk değişimi;

function whenHit() {

  el.colR = 250;
  el.colG = 0;
  el.colB = 0;

}


//Topun özellikleri;

function ballDisplay() {

  stroke(0);
  strokeWeight(2);

  fill(el.colR, el.colG, el.colB);
  if (el.colR>150){
    el.colR -=10;
  }else if (el.colR<150){
    el.colR +=10;
  }
  if(el.colG<150){
    el.colG +=10;
  }
  if(el.colB<150){
    el.colB +=10;
  }
  ellipse(x, y, 2 * el.cap, 2 * el.cap);

  rectMode(CENTER);
  rect(x, y, el.cap, el.cap);
  line(x + 1 / 2 * el.cap, y + 1 / 2 * el.cap, x - 1 / 2 * el.cap, y - 1 / 2 * el.cap);
  line(x + 1 / 2 * el.cap, y - 1 / 2 * el.cap, x - 1 / 2 * el.cap, y + 1 / 2 * el.cap);
  line(x + el.cap, y, x - el.cap, y);
  line(x, y + el.cap, x, y - el.cap);
  line(x, y - el.cap, x - el.cap, y);
  line(x - el.cap, y, x, y + el.cap);
  line(x, y + el.cap, x + el.cap, y);
  line(x + el.cap, y, x, y - el.cap);

}


//Hareket;

function move() {

  x += xDeg;
  y += yDeg;
}