import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { };

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            // lê o arquivo
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            // lê linha por linha do arquivo
            const parseFile = csvParse();

            // paga os pedaços lidos do arquivo
            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, description] = line;

                categories.push({
                    name,
                    description
                });
            })
            .on("end", () => {
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        console.log(categories);

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory =  await this.categoriesRepository.findByName(name);

            if(!existCategory) {
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        })
    }
}

export { ImportCategoryUseCase };