import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { MotoController } from './moto.controller'
import { MotoService } from './moto.service'
import { Moto } from './moto.entity'

@Module({
  controllers: [MotoController],
  providers: [MotoService],
})
export class MotoModule {}
