import { Express, Request, Response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get("/", (request: Request, response: Response) => {
    const all = specificationsRepository.list();
    return response.json(all);
});

specificationsRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateCategoryService(specificationsRepository);

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };