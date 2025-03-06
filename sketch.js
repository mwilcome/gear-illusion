let masterAngle = 0;
let direction = 1;
let numGears = 8;
let radius = 40;
let numTeeth = 12;
let toothHeight = 10;
let yPositions = [];
let initialOffsets = [];

function setup() {
  createCanvas(400, 800);
  for (let i = 0; i < numGears; i++) {
    yPositions[i] = 80 + i * 80; // Space gears 80px apart vertically
    initialOffsets[i] = (i % 2 === 1) ? (TWO_PI / numTeeth) / 2 : 0; // Offset odd gears for meshing
  }
}

function draw() {
  background(255); // White background for contrast
  for (let i = 0; i < numGears; i++) {
    let angle;
    if (i < numGears - 1) {
      angle = direction * (i % 2 === 0 ? 1 : -1) * masterAngle + initialOffsets[i];
    } else {
      angle = direction * 1 * masterAngle + initialOffsets[0]; // Last gear matches first gear's direction
    }
    drawGear(200, yPositions[i], radius, numTeeth, toothHeight, angle);
  }
  masterAngle += 0.02; // Increment master angle for smooth rotation
}

function drawGear(x, y, radius, numTeeth, toothHeight, angle) {
  push();
  translate(x, y);
  rotate(angle);
  
  // Draw gear body
  fill(200); // Light gray
  ellipse(0, 0, radius * 2);
  
  // Draw teeth
  fill(50); // Dark gray for contrast
  for (let i = 0; i < numTeeth; i++) {
    let toothAngle = TWO_PI / numTeeth * i;
    push();
    rotate(toothAngle);
    rect(radius, -toothHeight / 2, toothHeight, toothHeight); // Teeth protrude outward
    pop();
  }
  
  // Draw rotation marker
  stroke(255, 0, 0); // Red line
  line(0, 0, radius, 0);
  noStroke();
  pop();
}

function mousePressed() {
  direction *= -1; // Reverse rotation direction of all gears
}