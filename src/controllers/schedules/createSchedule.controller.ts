import { Request, Response } from "express";
import { createScheduleService } from "../../services/schedules/createSchedule.services";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties.entities";

export const createScheduleController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const schedule = req.body;

  const newSchedule = await createScheduleService(schedule, id);

  if (newSchedule instanceof SchedulesUserProperties) {
    return res.status(201).json({ message: newSchedule });
  }

  return res.status(newSchedule[1] as number).json(newSchedule[0]);
};
