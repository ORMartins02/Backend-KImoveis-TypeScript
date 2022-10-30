import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propeties.entities";

export const listPropertiesServices = async (): Promise<Properties[]> => {
  const propertiessRespository = AppDataSource.getRepository(Properties);

  const properties: Array<Properties> = await propertiessRespository.find({
    relations: {
      category: true,
    },
  });

  return properties;
};
