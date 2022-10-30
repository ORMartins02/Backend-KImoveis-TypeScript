import { Router } from "express";
import { createPropertiesController } from "../controllers/properties/createProperties.controller";
import { listPropertiesController } from "../controllers/properties/listProperties.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware";

export const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createPropertiesController
);

propertiesRoutes.get("", listPropertiesController);
