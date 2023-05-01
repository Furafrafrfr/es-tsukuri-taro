import { StoreSchema } from "../core/types";

export const CompanySchema: StoreSchema  = {
  name: 'company',
  options: {
    keyPath: 'id',
    autoIncrement: true,
  },
  indexes: [
    {
      name: 'name',
    },
    {
      name: 'deadline',
    },
    {
      name: 'note',
    }
  ]
}