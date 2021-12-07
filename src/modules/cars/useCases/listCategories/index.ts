import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

export default(): ListCategoriesController => {
    const categoriesRepository = new CategoriesRepository();

    const listCategoriesUseCase = new ListCategoriesUseCases(categoriesRepository);

    const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

    return listCategoriesController;
}
