import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entities";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategoriesService = async ({
  name,
}: ICategoryRequest): Promise<Categories> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const emailExist = await categoriesRepository.findOneBy({ name });

  if (emailExist) {
    throw new AppError("This categorie is already exist", 400);
  }

  const category = new Categories();
  category.name = name;

  categoriesRepository.create(category);

  await categoriesRepository.save(category);

  return category;
};
