import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

// specificationsRoutes.get("/", (request: Request, response: Response) => {
//     const all = specificationsRepository.list();
//     return response.json(all);
// });

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
