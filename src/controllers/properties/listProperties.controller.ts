import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listPropertiesServices } from "../../services/properties/listProperties.services";

export const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesServices();

  return res.status(200).json(instanceToPlain(properties));
};
