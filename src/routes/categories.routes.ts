import { Request, Response, Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
// import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
// const postgresCategoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    // O serviço pode receber qualquer um dos repositories
    // pois abos implementam a interface ICategoriesRepoistory
    // presente no tipo do argumento do contructor do Service
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    // const createCategoryService = new CreateCategoryService(postgresCategoriesRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});

export { categoriesRoutes };
