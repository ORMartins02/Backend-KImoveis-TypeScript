import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listCategoriesServices } from "../../services/categories/listCategories.services";

export const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesServices();

  return res.status(200).json(instanceToPlain(categories));
};
