import { MotoModule } from './moto/moto.module'
import { Module } from '@nestjs/common'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { AppService } from './app.service'
import { AppController } from './app.controller'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'postgresql',
      dbName: 'postgres',
      user: 'postgres',
      host: 'localhost',
      password: '1234',
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      autoLoadEntities: true,
      schemaGenerator: {
        disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
        createForeignKeyConstraints: true, // whether to generate FK constraints
      },
    }),
    MotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
