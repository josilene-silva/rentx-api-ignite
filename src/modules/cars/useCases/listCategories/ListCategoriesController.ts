import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCases);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
