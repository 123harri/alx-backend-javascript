import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create a new instance of Car with cloned attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
