import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository", // nome do container
    UsersRepository // classe referenciada
);

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", // nome do container
    CategoriesRepository // classe referenciada
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", // nome do container
    SpecificationsRepository // classe referenciada
);