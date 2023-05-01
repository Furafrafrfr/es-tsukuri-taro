import { Core, Schema, env } from '../../db';

const db = await Core.Db.connect(env.DB_NAME, env.DB_VERSION, [
  Schema.CompanySchema,
  Schema.QaSchema,
]);