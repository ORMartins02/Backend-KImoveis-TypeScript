import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propeties.entities";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties.entities";
import { User } from "../../entities/user.entities";

export const listScheduleServices = async (): Promise<
  SchedulesUserProperties[]
> => {
  const scheduleRespository = AppDataSource.getRepository(
    SchedulesUserProperties
  );

  const schedules = await scheduleRespository.find({
    relations: { user: true, property: true },
  });

  return schedules;
};
