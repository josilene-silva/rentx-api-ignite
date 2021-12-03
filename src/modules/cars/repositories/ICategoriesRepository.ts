import { Category } from "../model/Category";

/**
 * Esses são os contratos
 */

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepoistory {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICategoriesRepoistory };