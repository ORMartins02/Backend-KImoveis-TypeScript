import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propeties.entities";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import { normalizeScheduleService } from "./normalizaSchedule.services";

export const createScheduleService = async (
  { date, hour, propertyId }: IScheduleRequest,
  id: string
) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );

  const userRepository = AppDataSource.getRepository(User);

  const propertiesRepositories = AppDataSource.getRepository(Properties);

  const user = await userRepository.findOneBy({ id });

  const property = await propertiesRepositories.findOneBy({ id: propertyId });

  const data = await normalizeScheduleService(date, hour);

  if (!user) {
    throw new AppError("This user or property dont exist", 404);
  }

  if (!property) {
    throw new AppError("This user or property dont exist", 404);
  }

  if (data.hours < 8 || data.hours > 18) {
    throw new AppError("This time is outside our working hours", 400);
  }

  const schedule = await scheduleRepository.find();
  const scheduleExist = schedule.find((schedules) => {
    return schedules;
  });

  if (scheduleExist) {
    throw new AppError("This date cannot be scheduled", 400);
  }

  if (data.dayWeek < 1 || data.dayWeek > 5) {
    throw new AppError("This day is outside our working days", 400);
  }

  const normalizeSchedule = new SchedulesUserProperties();
  normalizeSchedule.date = data.fullDate;
  normalizeSchedule.hour = data.fullDate;
  normalizeSchedule.property = property!;
  normalizeSchedule.user = user!;

  const newSchedule = scheduleRepository.create(normalizeSchedule);

  await scheduleRepository.save(newSchedule);

  return newSchedule;
};
