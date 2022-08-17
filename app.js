let state=0

let timer=0
let clock=30

let myXPos = 100;
let myYPos = 900;
let myLeft, myRight, myTop, myBottom;


//e=enemy,X or Y or side coord, last letter designates copy
let biglock=0
let lock=0
let jumptimer=0

let friendxpos=1100
let friendypos=900
let fLeft, fBottom,fRight,fTop;
let flock=0
let ftimer=0



function setup() {
   createCanvas(1000, 1000);
   noStroke();
 
   rectMode(CENTER);

}
 function mouseClicked(mouseX,mouseY){
    if ( mouseX> 250 || mouseX < 750 || mouseY > 500 || myBottom < 700 && state==0) {
 }
else{state=1}

 }
function draw() {
    if(state==0){
background(255,250,70)
fill(255,255,255)

rect(500,600,500,200)
fill(20,150,100)
rect(100,180,1200,200)
fill(0)

text('Journey',300,200)
textSize(100)
fill(0)


text('Start',400,600)}

if(state>0){
    timer+=1
    
    background(100,100,255);
    fill(120,20,20)
    rect(500,1000,1000,200)
    rect(900,800,200,600)
    textSize(20)
    if(timer>30 && timer<300){
        text('Sometimes the hardest part is getting started.',500,200)}
   else if(timer>300 && timer<650){text('Analyze. Take it one step at a time.',100,200)}
   else if(timer>650){text('Impossible you may say. Maybe ask a friend for help.',100,200)
state=2}
   fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);

 if(biglock==0){
if(lock==1 ){
    jumptimer+=1
    
}
else{jumptimer=0}
if(lock==1){
if(jumptimer<60 ){
        
    myYPos -= 3}
if(jumptimer>60){myYPos+=3}
if(jumptimer==120){lock=0}

}
 }
if (state==2){
    fill(0,255,0)
    rect(friendxpos,friendypos,50,50)
    if(friendxpos>900){friendxpos-=3}
}
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;

   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;

   }
 
   if (keyIsDown(UP_ARROW)) {
    if(jumptimer==0){lock=1}
      

   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;

   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   fLeft = friendxpos - 25;
   fRight = friendxpos + 25;
   fTop = friendypos - 25;
   fBottom = friendypos + 25;

   if(flock==1){
    ftimer+=1
    if(ftimer<120)
    {friendypos-=3; myYPos-=3
    }
    if(ftimer>120){friendypos+=3}
    if(ftimer==240){flock=0}
}
   else{ftimer=0}
   
   if (myLeft > fRight || myRight < fLeft || myTop > fBottom || myBottom < fTop) {
 
}

else{flock=1}
if(myYPos<490){myYPos=500;biglock=1}
if(myYPos==500 && myXPos>1000){state=3}

}
if(state==3){
    fill(30,200,30)
    rect(500,500,1000,1000)
textSize(20)
text('Complete!',270,200)
text('Excellent!',270,500)}
}