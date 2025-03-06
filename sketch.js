function setup() {
    createCanvas(400, 800); // Tall canvas for stacking gears
  }
  
  function draw() {
    background(220); // Light gray background
    drawGear(200, 400, 100, 16, 20, 0); // One static gear
  }
  
  function drawGear(x, y, radius, numTeeth, toothHeight, angle) {
    push();
    translate(x, y);
    rotate(angle);
    
    // Gear body
    fill(150); // Gray
    ellipse(0, 0, radius * 2);
    
    // Teeth
    fill(100); // Darker gray
    for (let i = 0; i < numTeeth; i++) {
      let toothAngle = TWO_PI / numTeeth * i;
      push();
      rotate(toothAngle);
      rect(radius - toothHeight / 2, -toothHeight / 2, toothHeight, toothHeight);
      pop();
    }
    pop();
  }