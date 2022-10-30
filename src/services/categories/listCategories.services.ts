import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entities";

export const listCategoriesServices = async (): Promise<Categories[]> => {
  const categoriesRespository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRespository.find();

  return categories;
};
