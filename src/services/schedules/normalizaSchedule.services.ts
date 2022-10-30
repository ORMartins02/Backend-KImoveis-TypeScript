export const normalizeScheduleService = async (date: string, hour: string) => {
  const newDate = date.split("/");

  const newHour = hour.split(":");

  const normalDate = newDate[0] + "/" + newDate[1] + "/" + newDate[2];

  const nomalDateWithHour =
    newDate[0] +
    "/" +
    newDate[1] +
    "/" +
    newDate[2] +
    " " +
    newHour[0] +
    ":" +
    newHour[1];

  const fullDate = new Date(nomalDateWithHour);

  const scheduleDate = new Date(normalDate);

  const dayWeek = new Date(scheduleDate).getDay();

  const hours = new Date(fullDate).getHours();

  const data = {
    hours,
    dayWeek,
    fullDate,
  };

  return data;
};
