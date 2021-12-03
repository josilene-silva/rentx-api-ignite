import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

const categoriesRepository = new CategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCases(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };