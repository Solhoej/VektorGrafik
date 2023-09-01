x1 = 10;
y1 = 10;

x2 = -10;
y2 = 10;

x3 = -10;
y3 = -10;

x4 = 10;
y4 = -10;

xflyt = 200;
yflyt = 200;

skalar = 1;

state = true;

function setup() {
  createCanvas(400, 400);
  skalarModifier = createSlider(0,20,1);
  skalarModifier.position(117.5,20);

  xModifier = createSlider(0,400,200);
  xModifier.position(117.5,40);

  yModifier = createSlider(0,400,200);
  yModifier.position(117.5,60);
}

function draw() {
  background(220);

  skalar = skalarModifier.value();

  if(state)
  {
    text("Slider",25,25);
    xflyt = xModifier.value();
    yflyt = yModifier.value();
  }
  else
  {
    text("Mus",25,25);
  }

  px1 = skalar*x1+xflyt;
  px2 = skalar*x2+xflyt;
  px3 = skalar*x3+xflyt;
  px4 = skalar*x4+xflyt;

  py1 = skalar*y1+yflyt;
  py2 = skalar*y2+yflyt;
  py3 = skalar*y3+yflyt;
  py4 = skalar*y4+yflyt;
  
  push();
  strokeWeight(5);

  point(px1,py1);
  point(px2,py2);
  point(px3,py3);
  point(px4,py4);

  pop();

  line(px1,py1,px2,py2);
  line(px2,py2,px3,py3);
  line(px3,py3,px4,py4);
  line(px4,py4,px1,py1);
}

dragged = false;

function mouseDragged()
{
  if(state == false)
  {
      if (mouseX >= px2 && mouseX <= px1 && mouseY <= py2 && mouseY >= py3)
      {
        console.log(mouseX);
        dragged = true;
      }
      if(dragged)
      {
        xflyt = mouseX;
        yflyt = mouseY;
      }
  }

}

function mouseReleased()
{
  dragged = false;
}

function keyPressed()
{
  if(key == 'k')
  {
    state = !state;
  }
}