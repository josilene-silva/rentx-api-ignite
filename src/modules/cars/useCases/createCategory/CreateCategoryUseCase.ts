import { ICategoriesRepoistory } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    /**
     * @param categoriesRepository repositório de cetegorias
     */
    constructor(private categoriesRepository: ICategoriesRepoistory) { };

    async execute({ description, name }: IRequest): Promise<void> {

        const categoryArlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryArlreadyExists) {
            throw new Error("Category Already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };