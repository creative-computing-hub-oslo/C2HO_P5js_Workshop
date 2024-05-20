var s1 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment3";

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);

    sketch.background(110, 200, 123);
  };

  sketch.draw = () => {
    sketch.translate(sketch.width/2, sketch.height/2);
    
    let diameter = sketch.random(10, 250);
    let xOffset = sketch.random(-sketch.width/2, sketch.width/2);  
    let yOffset = sketch.random(-sketch.height/2, sketch.height/2);
    sketch.drawSmiley(diameter, xOffset, yOffset);
  };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.fill('yellow');
    sketch.stroke('black');
    
    // stroke width
    sketch.strokeWeight(3);
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill('green');
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };
};

var s2 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment4";

  let c = 0;
  let r  = 0;

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);

    sketch.background(110, 200, 123);
    frameRate(5);

  sketch.draw = () => {
    const columns = 10;
    const rows = 10;
    const cellWidth = sketch.width / columns;
    const cellHeight = sketch.height / rows;
    
    const x = c * cellWidth + cellWidth / 2;
    const y = r * cellHeight + cellHeight / 2;
    sketch.translate(0,0);
      sketch.drawSmiley(diameter, xOffset, yOffset);
    };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.fill('yellow');
    sketch.stroke('black');
    
    // stroke width
    sketch.strokeWeight(3);
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill('green');
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };
};
var myp5 = new p5(s2, 'p5jsw1segment4');