import { Category } from "../../entities/Category";
import { ICategoriesRepoistory } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCases {
    constructor(private categoriesRepository: ICategoriesRepoistory) { };

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCases };