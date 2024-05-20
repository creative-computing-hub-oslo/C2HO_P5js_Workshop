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

var myp5 = new p5(s1, 'p5jsw1segment3');

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
    sketch.frameRate(5);
  };

  sketch.draw = () => {
    const columns = 10;
    const rows = 10;
    const cellWidth = sketch.width / columns;
    const cellHeight = sketch.height / rows;
    
    const x = c * cellWidth + cellWidth / 2;
    const y = r * cellHeight + cellHeight / 2;
    sketch.translate(0,0);
    sketch.drawSmiley(sketch.min(cellWidth, cellHeight), x, y);

    if (c++ == columns) {
        c = 0;
        if (r++ == rows)
          r = 0;
    }
  };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.fill(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.stroke('black');
    
    // stroke width
    sketch.strokeWeight(3);
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };
};
var myp5 = new p5(s2, 'p5jsw1segment4');

var s3 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment5";

  let x = 0;
  let y = 0;

  let xSpeed = 5;
  let ySpeed = 10;

  let faceColor = 0;
  let eyeColor = 0;

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);
  };

  sketch.draw = () => {
    sketch.background(110, 200, 123);

    let diameter = 50;
    sketch.drawSmiley(diameter, x, y);
    x = x + xSpeed;
    y = y + ySpeed;
    
    
    // Reset
    if (x > sketch.width)
      x = 0;
    
    if (y > sketch.height)
      y = 0;
    
  };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.fill(faceColor++ % 255);
    sketch.stroke('black');
    
    // stroke width
    sketch.strokeWeight(3);
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill(eyeColor-- % 255);
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };
};
var myp5 = new p5(s3, 'p5jsw1segment5');

var s4 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment6";

  let x = 0;
  let y = 0;

  let xSpeed = 5;
  let ySpeed = 10;

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);

    xSpeed = sketch.random(50);
    ySpeed = sketch.random(50);

    sketch.background(110, 200, 123);
    sketch.frameRate(20);
  };

  sketch.draw = () => {
    let diameter = 50;
    sketch.drawSmiley(diameter, x, y);
    x = x + xSpeed;
    y = y + ySpeed;
    
    // Bounce
    if (x > sketch.width || x < 0)
      xSpeed = xSpeed * -1;
    if (y > sketch.height || y < 0)
      ySpeed = ySpeed * -1;
  };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.fill(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.stroke('black');
    
    // stroke width
    sketch.strokeWeight(3);
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };
};
var myp5 = new p5(s4, 'p5jsw1segment6');

var s5 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment7";

  let x = 0;
  let y = 0;

  let r = 0;
  let g = 0;
  let b = 0;

  let xSpeed = 5;
  let ySpeed = 10;

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);

    xSpeed = sketch.random(50);
    ySpeed = sketch.random(50);

    sketch.background(r, g, b);
  };

  sketch.draw = () => {
    sketch.background(r, g, b);
    let diameter = 50;
    if(sketch.mouseIsPressed)
      sketch.drawSmiley(diameter, sketch.mouseX, sketch.mouseY);
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
    sketch.fill('black');
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    
    //
    sketch.pop(); // Restore previous settings
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
  };

  sketch.mousePressed = () => {
    r = 255;
    g = 0;
    b = 0;
  }

  sketch.mouseReleased = () => {
    r = 0;
    g = 255;
    b = 0;
  }

  sketch.mouseDragged = () => {
    r = 0;
    g = 0;
    b = 255;
  }
};
var myp5 = new p5(s5, 'p5jsw1segment7');

var s6 = ( sketch ) => {
  let canvas;
  let wrapper;
  let wrapperClass = "vrtx-article-body";
  let parentID = "p5jsw1segment8";

  let x = 0;
  let y = 0;

  let xSpeed = 5;
  let ySpeed = 10;

  let diameter = 50;

  let message = '';

  sketch.setup = () => {
    wrapper = document.getElementsByClassName(wrapperClass)[0];
    parent = document.getElementById(parentID);
    canvasWidth = wrapper.offsetWidth;
    canvas = sketch.createCanvas(canvasWidth, 400);
    canvas.parent(parentID);

    xSpeed = sketch.random(50);
    ySpeed = sketch.random(50);
  };

  sketch.draw = () => {
    sketch.background(113, 100, 200);

    sketch.textSize(144);
    sketch.text(message, 0, sketch.height/2);
    sketch.drawSmiley(diameter, x, y);
    
    // Good version (can handle multiple keys)
    if (sketch.keyIsDown(sketch.UP_ARROW)) {
      y = y - 4;
    }
    if (sketch.keyIsDown(sketch.DOWN_ARROW)) {
      y = y + 4;
    }
    if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
      x = x - 4;
    }
    if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
      x = x + 4;
    }
  };

  sketch.drawSmiley = (diameter, xOffset, yOffset) => {
    sketch.translate(xOffset, yOffset);
    sketch.strokeWeight(3);

    sketch.push();
    sketch.fill('yellow');
    sketch.stroke('black');
    
    // Draw a circle in the middle of the canvas
    sketch.circle(0, 0, diameter);
    sketch.pop();
    
    // Draw the eyes
    sketch.push(); // Remove previous fill/stroke settings
    sketch.noStroke();
    sketch.fill('black');
    sketch.ellipse(-diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.ellipse(diameter/8, -diameter/8, diameter/10, diameter/3);
    sketch.pop(); // Restore previous settings

    sketch.push();
    sketch.noFill();
    sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
    sketch.pop();
  };

  
  sketch.keyTyped = () => {
    message += sketch.key;
  }

  sketch.keyPressed = () => {
    if (sketch.keyCode == sketch.BACKSPACE){
      message = message.slice(0, -1);
    }
  }
};
var myp5 = new p5(s6, 'p5jsw1segment8');