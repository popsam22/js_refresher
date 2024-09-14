const vehicle = {
  wheels: 6,
  engine: function () {
    return "The engine hits hard!!!";
  },
};

//Inherits properties from vehicle
const truck = Object.create(vehicle);
truck.door = 4;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

//inherits properties from vehicle
const car = Object.create(vehicle);
car.door = 2;
car.model = "Lexus";
car.engine = "V6";
console.log(car);

const building = {
  roof: true,
  foundation: "Pile",
  build: function () {
    return "The house is being built";
  },
};

//Inherits properties from building
const one_storey = Object.create(building);
one_storey.floor = 1;
one_storey.rooms = "2Bedroom Flat";
console.log(one_storey);
console.log(one_storey.roof);
