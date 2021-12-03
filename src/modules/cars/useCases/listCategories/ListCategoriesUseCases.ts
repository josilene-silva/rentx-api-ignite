import { Category } from "../../model/Category";
import { ICategoriesRepoistory } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCases {
    constructor(private categoriesRepository: ICategoriesRepoistory) { };

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCases };