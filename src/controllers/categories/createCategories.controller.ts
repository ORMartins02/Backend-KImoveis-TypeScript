import { Request, Response } from "express";
import { Categories } from "../../entities/categories.entities";
import { createCategoriesService } from "../../services/categories/createCategories.services";

export const createCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categorie = req.body;

  const newCategorie = await createCategoriesService(categorie);

  if (newCategorie instanceof Categories) {
    return res.status(201).json(newCategorie);
  }

  return res.status(newCategorie[1] as number).json(newCategorie[0]);
};
