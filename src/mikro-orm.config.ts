import { Options } from '@mikro-orm/core'

const orm: Options = {
  type: 'postgresql',
  dbName: 'postgres',
  user: 'postgres',
  host: 'localhost',
  password: '1234',
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  schemaGenerator: {
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    createForeignKeyConstraints: true, // whether to generate FK constraints
  },
}

export default orm
