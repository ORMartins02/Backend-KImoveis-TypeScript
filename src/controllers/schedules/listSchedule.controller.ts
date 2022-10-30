import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listScheduleServices } from "../../services/schedules/listSchedule.services";

export const listScheduleController = async (req: Request, res: Response) => {
  const schedules = await listScheduleServices();

  return res.status(200).json({ schedules: schedules });
};
