import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";

interface ICreateCarsImageDTO {
  car_id: string;
  image_name: string;
}

interface ICarsImagesRepository {
  create(data: ICreateCarsImageDTO): Promise<CarImage>;
}
export { ICarsImagesRepository };
