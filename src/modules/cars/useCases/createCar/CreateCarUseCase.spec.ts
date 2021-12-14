import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ASA-21",
      fine_amount: 60,
      brand: "Brand",
      category_id: "123",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      name: "Car 1",
      description: "Description car 1",
      daily_rate: 100,
      license_plate: "ASA-21",
      fine_amount: 60,
      brand: "Brand",
      category_id: "123",
    });

    await expect(
      createCarUseCase.execute({
        name: "Car 2",
        description: "Description car 2",
        daily_rate: 100,
        license_plate: "ASA-21",
        fine_amount: 60,
        brand: "Brand",
        category_id: "123",
      })
    ).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car",
      description: "Description 1",
      daily_rate: 100,
      license_plate: "ASA-221",
      fine_amount: 60,
      brand: "Brand",
      category_id: "123",
    });

    expect(car.available).toBe(true);
  });
});
