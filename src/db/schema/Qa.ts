import { StoreSchema } from '../core/types';

export const QaSchema: StoreSchema = {
  name: 'q-and-a',
  indexes: [
    {
      name: 'question',
    },
    {
      name: 'limit',
    },
    {
      name: 'answer',
    },
    {
      name: 'num',
    },
  ],
};
