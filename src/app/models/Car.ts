export class Car {
  id: bigint;
  brand: string;
  car_picture: string;
  mileage: bigint;
  model: string;
  production_year: bigint;

  constructor(id: bigint, brand: string, mileage: bigint, model: string, production_year: bigint, car_picture: string) {
    this.id = id;
    this.brand = brand;
    this.mileage = mileage;
    this.model = model;
    this.production_year = production_year;
    this.car_picture = car_picture;
  }
}
