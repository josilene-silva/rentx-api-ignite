import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

// specificationsRoutes.get("/", (request: Request, response: Response) => {
//     const all = specificationsRepository.list();
//     return response.json(all);
// });

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
