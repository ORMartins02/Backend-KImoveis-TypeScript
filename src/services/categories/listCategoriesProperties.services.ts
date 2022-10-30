import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entities";
import { AppError } from "../../errors/appError";

export const listCategoriesPropertiesServices = async (id: string) => {
  const categoriesPropertiesRespository =
    AppDataSource.getRepository(Categories);

  const propertiesByCategorie = await categoriesPropertiesRespository.findOne({
    where: {
      id: id,
    },
    relations: {
      properties: true,
    },
  });

  if (!propertiesByCategorie) {
    throw new AppError("Category dont found", 404);
  }

  return propertiesByCategorie;
};
