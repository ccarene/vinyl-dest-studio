// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, VinylRecord } = initSchema(schema);

export {
  Customer,
  VinylRecord
};