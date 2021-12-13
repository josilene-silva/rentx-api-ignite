import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpcificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const car = await createCarSpcificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.status(201).json(car);
  }
}
export { CreateCarSpecificationController };
