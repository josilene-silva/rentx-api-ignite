import { Category } from "../entities/Category";

/**
 * Esses são os contratos
 */

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepoistory {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: ICreateCategoryDTO): Promise<void>;
}

export { ICreateCategoryDTO, ICategoriesRepoistory };