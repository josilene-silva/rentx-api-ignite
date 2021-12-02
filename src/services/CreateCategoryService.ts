import { ICategoriesRepoistory } from "../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    /**
     * Recerbe uma interface de contrato
     * @param categoriesRepository
     */
    constructor(private categoriesRepository: ICategoriesRepoistory) { };

    execute({ description, name }: IRequest): void {

        const categoryArlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryArlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };