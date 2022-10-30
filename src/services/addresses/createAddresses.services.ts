import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entities";
import { AppError } from "../../errors/appError";
import { IAddressRequest } from "../../interfaces/properties";

export const createAdressesService = async ({
  city,
  district,
  number,
  state,
  zipCode,
}: IAddressRequest): Promise<Addresses> => {
  const adressesRepository = AppDataSource.getRepository(Addresses);

  if (zipCode.length !== 8) {
    throw new AppError("The field 'zipCode' must contain 8 characters", 400);
  }

  if (state.length !== 2) {
    throw new AppError("The field 'state' must contain 2 characters", 400);
  }

  const zipCodeExist = await adressesRepository.findOneBy({ zipCode });

  if (zipCodeExist?.number === number) {
    throw new AppError("This property is already exist", 400);
  }

  const newAddress = new Addresses();
  newAddress.city = city;
  newAddress.district = district;
  newAddress.number = number!;
  newAddress.state = state;
  newAddress.zipCode = zipCode;

  adressesRepository.create(newAddress);

  await adressesRepository.save(newAddress);

  return newAddress;
};
