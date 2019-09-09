//Arrays
let bulletArray = []; //Every bullets gets stored in here
let patternArrays = 2; //Total bullet arrays
let bulletsPerArrays = 10; //Bullets per Array

//Angle Variables
let spreadBetweenArray = 180; //spread between arrays
let spreadWithinArray = 90; //spread between the last and the first bullet of an array
let startAngle = 0; //Start angle
let defaultAngle = 0;

//Spinning Variables
let beginSpinSpeed = 1;
let spinRate = 0; // The rate at which the pattern is spinning
let spinModificator = 0 // The modificator of the spin rate
let invertSpin = 1; // (1 = spinRate gets inversed once SpinRate >= maxSpinRate  || 0 = Spin doesn't invert at all)
let maxSpinRate = 10; //The max spin rate ->if SpinRate >= maxSpinRate --> inverts spin

//Fire Rate Variables
let fireRate = 5;
let shoot = 0;

//Offsets 
let objectWidth = 0 //Width of the bullet firing object
let objectHeight = 0 //Height of the bullet firing object
let xOffset = 0 //Shift spawn point of the bullets along the X-Axis
let yOffset = 0 //Shift spawn point of the bulltes along the Y-Axis

//Bullet Variables
let bulletSpeed = 1;
let bulletAcceleration = 0;
let bulletCurve = 0;
let bulletTTL = 3000;

//DOM ELements
let patternArraysInput;
let bulletsPerArraysInput;
let spreadBetweenArrayInput;
let spreadWithinArrayInput;
let startAngleInput;
let defaultAngleInput;
let spinRateInput;
let spinModificatorInput;
let invertSpinInput;
let maxSpinRateInput;
let fireRateInput;
let objectWidthInput;
let objectHeightInput;
let xOffsetInput;
let yOffsetInput;
let bulletSpeedInput;
let bulletAccelerationInput;
let bulletCurveInput;
let bulletTTLInput;

let patternArraysDiv;
let bulletsPerArraysDiv;
let spreadBetweenArrayDiv;
let spreadWithinArrayDiv;
let startAngleDiv;
let defaultAngleDiv;
let spinRateDiv;
let spinModificatorDiv;
let invertSpinDiv;
let maxSpinRateDiv;
let fireRateDiv;
let objectWidthDiv;
let objectHeightDiv;
let xOffsetDiv;
let yOffsetDiv;
let bulletSpeedDiv;
let bulletAccelerationDiv;
let bulletCurveDiv;
let bulletTTLDiv;

let formContainer;

function setup() {
  createCanvas(1280, 720);

  formContainer = createElement("form");
  formContainer.addClass('form-grid');

  patternArraysDiv = createDiv().parent(formContainer);
  createP("Total Bullet Arrays:").parent(patternArraysDiv);
  patternArraysInput = createInput(1, "number");
  patternArraysInput.parent(patternArraysDiv);

  bulletAccelerationDiv = createDiv().parent(formContainer);
  createP("Bullets Per Array:").parent(bulletAccelerationDiv);
  bulletsPerArraysInput = createInput(1, "number");
  bulletsPerArraysInput.parent(bulletAccelerationDiv);

  spreadBetweenArrayDiv = createDiv().parent(formContainer);
  createP("Spread Between Bullet Arrays:").parent(spreadBetweenArrayDiv);
  spreadBetweenArrayInput = createInput(1, "number");
  spreadBetweenArrayInput.parent(spreadBetweenArrayDiv);

  spreadWithinArrayDiv = createDiv().parent(formContainer);
  createP("Spread Within Bullet Arrays:").parent(spreadWithinArrayDiv);
  spreadWithinArrayInput = createInput(1, "number");
  spreadWithinArrayInput.parent(spreadWithinArrayDiv);

  startAngleDiv = createDiv().parent(formContainer);
  createP("Starting Angle:").parent(startAngleDiv);
  startAngleInput = createInput(1, "number");
  startAngleInput.parent(startAngleDiv);

  spinRateDiv = createDiv().parent(formContainer);
  createP("Spin Rate:").parent(spinRateDiv);
  spinRateInput = createInput(1, "number");
  spinRateInput.addClass('bulletInput');
  spinRateInput.parent(spinRateDiv);

  spinModificatorDiv = createDiv().parent(formContainer);
  createP("Spin Modificator:").parent(spinModificatorDiv);
  spinModificatorInput = createInput(0, "number");
  spinModificatorInput.addClass('bulletInput');
  spinModificatorInput.parent(spinModificatorDiv);

  invertSpinDiv = createDiv().parent(formContainer);
  createP("Invert Spin:").parent(invertSpinDiv);
  invertSpinInput = createRadio();
  invertSpinInput.option("1");
  invertSpinInput.option("0");
  invertSpinInput.parent(invertSpinDiv);

  maxSpinRateDiv = createDiv().parent(formContainer);
  createP("Max Spin Rate:").parent(maxSpinRateDiv);
  maxSpinRateInput = createInput(1, "number");
  maxSpinRateInput.parent(maxSpinRateDiv);

  fireRateDiv = createDiv().parent(formContainer);
  createP("Fire Rate:").parent(fireRateDiv);
  fireRateInput = createInput(1, "number");
  fireRateInput.parent(fireRateDiv);

  objectWidthDiv = createDiv().parent(formContainer);
  createP("Object Width:").parent(objectWidthDiv);
  objectWidthInput = createInput(1, "number");
  objectWidthInput.addClass('bulletInput');
  objectWidthInput.parent(objectWidthDiv);

  objectHeightDiv = createDiv().parent(formContainer);
  createP("Object Height:").parent(objectHeightDiv);
  objectHeightInput = createInput(1, "number");
  objectHeightInput.addClass('bulletInput');
  objectHeightInput.parent(objectHeightDiv);

  xOffsetDiv = createDiv().parent(formContainer);
  createP("X Offset:").parent(xOffsetDiv);
  xOffsetInput = createInput(1, "number");
  xOffsetInput.parent(xOffsetDiv);

  yOffsetDiv = createDiv().parent(formContainer);
  createP("Y Offset:").parent(yOffsetDiv);
  yOffsetInput = createInput(1, "number");
  yOffsetInput.parent(yOffsetDiv);

  bulletSpeedDiv = createDiv().parent(formContainer);
  createP("Bullet Speed:").parent(bulletSpeedDiv);
  bulletSpeedInput = createInput(3, "number");
  bulletSpeedInput.addClass('bulletInput');
  bulletSpeedInput.parent(bulletSpeedDiv);

  bulletAccelerationDiv = createDiv().parent(formContainer);
  createP("Bullet Acceleration:").parent(bulletAccelerationDiv);
  bulletAccelerationInput = createInput(0, "number");
  bulletAccelerationInput.addClass('bulletInput');
  bulletAccelerationInput.parent(bulletAccelerationDiv);

  bulletCurveDiv = createDiv().parent(formContainer);
  createP("Bullet Curve:").parent(bulletCurveDiv);
  bulletCurveInput = createInput(0, "number");
  bulletCurveInput.addClass('bulletInput');
  bulletCurveInput.parent(bulletCurveDiv);

  bulletTTLDiv = createDiv().parent(formContainer);
  createP("Bullet TTL:").parent(bulletTTLDiv);
  bulletTTLInput = createInput(3000, "number");
  bulletTTLInput.parent(bulletTTLDiv);



  let inputs = document.getElementsByClassName('bulletInput');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].step = 0.1;
  }

  
  


}

function draw() {

  strokeWeight(3);
  stroke(255, 255, 255);
  noFill();
  background(3);
  translate(640, 360);


  patternArrays = Number(patternArraysInput.value());
  bulletsPerArrays = Number(bulletsPerArraysInput.value());
  spreadBetweenArray = Number(spreadBetweenArrayInput.value());
  spreadWithinArray = Number(spreadWithinArrayInput.value());
  startAngle = Number(startAngleInput.value());
  spinModificatorInput.mouseClicked(() => spinModificator = Number(spinModificatorInput.value()));
  spinRateInput.mouseClicked(() => spinRate = Number(spinRateInput.value()));
  invertSpin = Number(invertSpinInput.value());
  maxSpinRate = Number(maxSpinRateInput.value());
  fireRate = Number(fireRateInput.value());
  objectWidth = Number(objectWidthInput.value());
  objectHeight = Number(objectHeightInput.value());
  xOffset = Number(xOffsetInput.value());
  yOffset = Number(yOffsetInput.value());
  bulletSpeed = Number(bulletSpeedInput.value());
  bulletAcceleration = Number(bulletAccelerationInput.value());
  bulletCurve = Number(bulletCurveInput.value());
  bulletTTL = Number(bulletTTLInput.value());

 

  textSize(32);
  text('Spin Rate: ' + spinRate, 350, 300);



  let bulletLength = bulletsPerArrays - 1;

  if (bulletLength == 0) {
    bulletLength = 1;
  }

  let arrrayLength = patternArrays - 1 * patternArrays;

  if (arrrayLength == 0) {
    arrrayLength = 1;
  }

  let arrayAngle = (spreadWithinArray / bulletLength); //Calculates the spread between each array
  let bulletAngle = (spreadBetweenArray / arrrayLength); //Calcualtes the spread within the bullets in the arrays


  if (shoot == 0) { // FireRate

    for (let i = 0; i < patternArrays; i++) { //For each bullet array in pattern
      for (let j = 0; j < bulletsPerArrays; j++) { //For each bullet in bullet array
        calculation(i, j, arrayAngle, bulletAngle);
      }
    }

    //If Default Angle > 360 , set it to 0
    if (defaultAngle > 360) {
      defaultAngle = 0;
    }
    defaultAngle += spinRate; //Make the pattern spin
    spinRate += spinModificator; //Apply the spin modifier

    //Invert the spin if set to 1
    if (invertSpin == 1) {
      if (spinRate < -maxSpinRate || spinRate > maxSpinRate) {

        spinModificator = -spinModificator;
      }
    }

  }

  //Update each bullet of the bullet array
  bulletArray.forEach(bullet => {
    bullet.update();
  });


  shoot += 1; //fire rate control
  if (shoot >= fireRate) { //once shoot reaches  fire rate
    shoot = 0; //set it to 0 to shoot again
  }

}

//Calculate directions of spawning points
function calculation(i, j, arrayAngle, bulletAngle) {
  //Calcuate the X and Y vales of the spawning points of each bullet
  let x1 = xOffset + lengthdir_x(objectWidth, defaultAngle + (bulletAngle * i) + (arrayAngle * j) + startAngle);
  let y1 = yOffset + lengthdir_y(objectHeight, defaultAngle + (bulletAngle * i) + (arrayAngle * j) + startAngle);

  //Calculate the direction for each bullets which it will move along
  let direction = defaultAngle + (bulletAngle * i) + (arrayAngle * j) + startAngle;


  //Create a new bullet
  let Bullet = new bullet(x1, y1, direction, bulletSpeed, bulletAcceleration, bulletCurve, bulletTTL);

  //Spawn the newly created bullet
  Bullet.spawn();

  //Push each bullet into the bullet array
  bulletArray.push(Bullet);


}

// Trigonometry functions

function lengthdir_x(dist, angle) {
  return dist * cos((angle * PI) / 180);
}


function lengthdir_y(dist, angle) {
  return dist * -sin((angle * PI) / 180);
}