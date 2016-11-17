function createCar(make,model,color) {
  var startingSpeed = 0;
  return {
    carMake: make,
    carModel: model,
    carColor: color,
    carInfo: function() {
      return this.carMake + " " + this.carModel + " " + this.carColor;
    },
    getSpeed: function() {
      return startingSpeed;
    },
    accelerate: function() {
      startingSpeed += 10;
      if (startingSpeed >= 85) {
        startingSpeed = 85;
      }
    },
    brake: function() {
      var decelerator = Math.floor((Math.random() * 100) + 1);
      console.log(decelerator);
      if (decelerator > startingSpeed/2) {
        startingSpeed -= startingSpeed/2;
      }
      else {
        startingSpeed  -= decelerator;
      }
    }
  }
};

var car1 = createCar("honda","civic","red");

function accelLoop(car) {
  while (car.getSpeed() < 70) {
    car.accelerate();
  }
};

function brakeLoop(car) {
  while (car.getSpeed() > 0) {
    car.brake();
  }
  if (car.getSpeed() < 0) {
    car.getSpeed() = 0;
  }
};
