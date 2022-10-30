import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listUserServices } from "../../services/user/listUser.services";

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserServices();

  return res.status(200).json(instanceToPlain(users));
};
