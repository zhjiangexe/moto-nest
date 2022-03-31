import { MikroORM } from '@mikro-orm/core'
import { SchemaGenerator } from '@mikro-orm/postgresql'
;(async () => {
  const orm = await MikroORM.init({
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
  })
  const generator = new SchemaGenerator(orm.em)
  const dump = generator.generate()
  console.log(dump)
  await orm.close(true)
})()
