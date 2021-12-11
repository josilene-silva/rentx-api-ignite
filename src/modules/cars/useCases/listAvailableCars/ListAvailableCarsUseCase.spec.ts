import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("shold be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ASA-21",
      fine_amount: 60,
      brand: "Brand",
      category_id: "123",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("shold be able to list available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ASA-21",
      fine_amount: 60,
      brand: "car_brad_test",
      category_id: "123",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brad_test",
    });

    expect(cars).toEqual([car]);
  });

  it("shold be able to list available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ARA-21",
      fine_amount: 60,
      brand: "car_brad_test",
      category_id: "123",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car3" });

    expect(cars).toEqual([car]);
  });

  it("shold be able to list available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ARA-21",
      fine_amount: 60,
      brand: "car_brad_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id",
    });

    expect(cars).toEqual([car]);
  });
});
