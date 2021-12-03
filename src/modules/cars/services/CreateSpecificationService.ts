import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    /**
     * Inicializa no construtor o repositório de especificações
     * @param specificationRepository repositório de especificação
     */
    constructor(private specificationRepository: ISpecificationsRepository) { };

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        this.specificationRepository.create({name, description});
    }

}

export { CreateCategoryService };