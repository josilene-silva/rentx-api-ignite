import { Category } from "../model/Category";
import { ICategoriesRepoistory, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepoistory {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): void {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRepository };