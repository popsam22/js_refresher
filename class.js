class Phone {
  constructor(memory) {
    this.size = memory;
    this.brand = "iPhone";
    this.model = "14 Pro";
  }
  takePicture() {
    console.log(`Shot taken on ${this.brand} ${this.model} ${this.size}`);
  }
}

const naomi = new Phone("512GB");
naomi.takePicture();
