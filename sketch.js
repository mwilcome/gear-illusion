let masterAngle = 0;
let direction = 1;
let numGears = 8;
let radius = 40;
let numTeeth = 12;
let toothHeight = 10;
let yPositions = [];
let initialOffsets = [];
let spacing = 90; // Adjusted spacing for proper interlocking

function setup() {
  createCanvas(400, 800);
  for (let i = 0; i < numGears; i++) {
    yPositions[i] = spacing + i * spacing; // Positions: 90, 180, 270, ..., 720
    initialOffsets[i] = (i % 2 === 1) ? (TWO_PI / numTeeth) / 2 : 0; // Offset odd gears by 15 degrees
  }
}

function draw() {
  background(255);
  for (let i = 0; i < numGears; i++) {
    let angle;
    if (i < numGears - 1) {
      angle = direction * (i % 2 === 0 ? 1 : -1) * masterAngle + initialOffsets[i];
    } else {
      angle = direction * 1 * masterAngle + initialOffsets[0]; // Last gear matches first
    }
    drawGear(200, yPositions[i], radius, numTeeth, toothHeight, angle);
  }
  masterAngle += 0.02;
}

function drawGear(x, y, radius, numTeeth, toothHeight, angle) {
  push();
  translate(x, y);
  rotate(angle);
  
  // Gear body
  fill(200);
  ellipse(0, 0, radius * 2);
  
  // Teeth
  fill(50);
  for (let i = 0; i < numTeeth; i++) {
    let toothAngle = TWO_PI / numTeeth * i;
    push();
    rotate(toothAngle);
    rect(radius, -toothHeight / 2, toothHeight, toothHeight);
    pop();
  }
  
  // Rotation marker
  stroke(255, 0, 0);
  line(0, 0, radius, 0);
  noStroke();
  pop();
}

function mousePressed() {
  direction *= -1;
}

// function keyPressed() {
//     if (key == 's') {
//       saveGif('myAnimation', 5); // Saves 5 seconds of animation, in case you want to capture it yourself~
//     }
//   }