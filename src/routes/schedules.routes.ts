import { Router } from "express";
import { createScheduleController } from "../controllers/schedules/createSchedule.controller";
import { listScheduleController } from "../controllers/schedules/listSchedule.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIdVerifyMiddleware } from "../middlewares/ensureIdVerify.middleware";
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware";

export const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);

schedulesRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listScheduleController
);

schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureIdVerifyMiddleware,
  listScheduleController
);
