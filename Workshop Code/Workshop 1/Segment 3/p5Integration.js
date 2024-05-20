var mySketch = (sketch) = {
	let canvas;
	let wrapper;
	let wrapperClass = "vrtx-article-body";
	let parentID = "p5IntegrationTest";

	sketch.setup = () => {
	  wrapper = document.getElementsByClassName(wrapperClass)[0];
	  parent = document.getElementsByID(parentID);
	  canvasWidth = wrapper.offsetWidth;
	  sketch.createCanvas(canvasWidth, 300);
	  sketch.background(110, 200, 123);
	  sketch.frameRate(40);
	};

	sketch.draw = () => {
	  // Set the center
	  sketch.translate(sketch.width/2, sketch.height/2);
	  
	  let diameter = sketch.random(10, 250);
	  let xOffset = sketch.random(-sketch.width/2, sketch.width/2);  
	  let yOffset = sketch.random(-sketch.height/2, sketch.height/2);
	  sketch.drawSmiley(diameter, xOffset, yOffset);
	}
	    
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
	  
	  sketch.pop(); // Restore previous settings
	  sketch.noFill();
	  sketch.arc(0, diameter/5, diameter/3, diameter/3, 0, sketch.PI);
	}
}

var myp5 = new p5(mySketch, "p5IntegrationTest");