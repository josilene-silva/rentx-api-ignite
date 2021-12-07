import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCases) { };

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listCategoriesUseCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };