let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 5
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES) //設定三角函數的角度用0~360度
  background("#CAD2C5")
//===================================================
  points = font.textToPoints("ちいかわ", -300, 80, 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小。值越小代表點數越小
}

function draw() {
  background("#CAD2C5");
  noFill() //物件不充滿顏色
  stroke("#402259")//線條顏色
  strokeWeight(2)  //線條粗細
  let rectWidth = 30 + mouseX / 20; 
  let circleSize = 25 + mouseY / 20;
  for(let i=0;i<windowWidth;i=i+1) { 
    for(let j=0;j<windowHeight;j=j+1) {
  ellipse(25+(i*50),25+(j*50),circleSize) //在座標(x:25,y:25)畫直徑25的圓
  ellipse(25+(i*50),25+(j*50),circleSize,50) //在座標(x:25,y:25)畫長軸50,短軸25的橢圓
  rect(0+(i*50),10+(j*50),50,rectWidth) //在座標(x:0,y:10)畫長50,寬30的長方形
}
}
  translate(width/2,height/2) //把原本原點(0,0)在左上角，改到畫布中心點
  rotate(frameCount%360) // 360旋轉
    
  for (let i=0; i<points.length-1; i++) { 
    fill("#59C3C3")
    strokeWeight(1)
    stroke("#52489C")
    strokeWeight(3)
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) //畫線，兩個點，第一個點(points[i].x,points[i].y)，第二個點(points[i+1].x,points[i+1].y)
 } 

    angle = angle+10
}