import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let createCarUseCase: CreateCarUseCase;

describe("Create car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to add a new specification to a now-existent car", async () => {
    const car_id = "123";
    const specifications_id = ["54789"];
    await expect(
      createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      })
    ).rejects.toEqual(new AppError("Cars does not exists!"));
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ASA-21",
      fine_amount: 60,
      brand: "Brand",
      category_id: "123",
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: "Especificação",
      description: "ESP",
    });

    const specifications_id = [specification.id];
    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
