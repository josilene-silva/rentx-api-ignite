import { getRepository, Repository } from "typeorm";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { CarImage } from "../entities/CarImage";

interface ICreateCarsImageDTO {
  car_id: string;
  image_name: string;
}

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create({ car_id, image_name }: ICreateCarsImageDTO): Promise<CarImage> {
    const carsImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carsImage);

    return carsImage;
  }
}

export { CarsImagesRepository };
