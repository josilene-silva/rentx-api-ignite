import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) { };

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        // O serviço pode receber qualquer um dos repositories
        // pois abos implementam a interface ICategoriesRepoistory
        // presente no tipo do argumento do contructor do Service
        // const createCategoryService = new CreateCategoryService(categoriesRepository);

        await this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };