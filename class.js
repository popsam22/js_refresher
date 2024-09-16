class Phone {
  constructor(model) {
    this.brand = "iPhone";
    this.model = model;
  }
  get phoneBrand() {
    return this.phone;
  }
  set phoneModel(model) {
    this.model = model;
  }
}

class mini extends Phone {
  constructor(model) {
    super(model);
    this.camera = "12MP";
  }
  takePicture() {
    return `This shot was taken on ${this.camera} ${this.model}`;
  }
}

const myPhone = new mini("12 mini");
console.log(myPhone.takePicture());
