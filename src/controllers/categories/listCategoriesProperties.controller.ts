import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listCategoriesServices } from "../../services/categories/listCategories.services";
import { listCategoriesPropertiesServices } from "../../services/categories/listCategoriesProperties.services";

export const listCategoriesPropertiesController = async (
  req: Request,
  res: Response
) => {

  const id = req.params.id

  const categoriesProperties = await listCategoriesPropertiesServices(id);

  return res.status(200).json(instanceToPlain(categoriesProperties));
};
