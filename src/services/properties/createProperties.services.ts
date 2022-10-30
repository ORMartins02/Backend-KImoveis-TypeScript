import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entities";
import { Properties } from "../../entities/propeties.entities";
import { AppError } from "../../errors/appError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import { createAdressesService } from "../addresses/createAddresses.services";

export const createPropertiesService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const addressId = await createAdressesService(address);

  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("This category dont exist", 404);
  }
  
  const newProperty = new Properties();
  newProperty.value = value
  newProperty.size = size
  newProperty.address = addressId
  newProperty.category = category!
  
  
  propertyRepository.create(newProperty);

  await propertyRepository.save(newProperty);

  return newProperty;
};
