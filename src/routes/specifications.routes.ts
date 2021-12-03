import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

// specificationsRoutes.get("/", (request: Request, response: Response) => {
//     const all = specificationsRepository.list();
//     return response.json(all);
// });

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };