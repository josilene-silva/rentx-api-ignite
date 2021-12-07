import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    /**
     * @param categoriesRepository repositório de categorias
     */
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { };

    async execute({ description, name }: IRequest): Promise<void> {

        const categoryArlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryArlreadyExists) {
            throw new Error("Category Already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };