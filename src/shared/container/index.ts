import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { container } from "tsyringe";

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

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
