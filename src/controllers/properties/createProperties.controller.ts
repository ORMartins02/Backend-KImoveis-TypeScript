import { Request, Response } from "express";
import { createPropertiesService } from "../../services/properties/createProperties.services";
import { Properties } from "../../entities/propeties.entities";

export const createPropertiesController = async (
  req: Request,
  res: Response
) => {
  const property = req.body;

  const newProperty = await createPropertiesService(property);

  if (newProperty instanceof Properties) {
    return res.status(201).json(newProperty);
  }

  return res.status(newProperty[1] as number).json(newProperty[0]);
};
