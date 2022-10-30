import { Router } from "express";
import { createCategoriesController } from "../controllers/categories/createCategories.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";
import { listCategoriesPropertiesController } from "../controllers/categories/listCategoriesProperties.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware";

export const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoriesController
);

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listCategoriesPropertiesController);
