import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsControllers } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsControllers";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsControllers = new ListAvailableCarsControllers();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsControllers.handle);

export { carsRoutes };
