import { Injectable } from '@nestjs/common'
import { EntityManager, LockMode } from '@mikro-orm/core'
import { Moto } from './moto.entity'
import CreateMoto from './createMoto'
import UpdateMoto from './updateMoto'

@Injectable()
export class MotoService {
  constructor(private readonly em: EntityManager) {}

  async createMoto(createMoto: CreateMoto, userId: number): Promise<Moto> {
    const moto = new Moto()
    moto.license = createMoto.license
    moto.miles = createMoto.miles
    moto.status = createMoto.status
    moto.creator = userId
    await this.em.persistAndFlush(moto)
    return moto
  }

  async updateMiles(updateMoto: UpdateMoto, userId: number): Promise<Moto> {
    const moto = await this.em.findOne(Moto, updateMoto.id, {
      lockMode: LockMode.OPTIMISTIC,
      lockVersion: updateMoto.version,
    })
    moto.miles = updateMoto.miles
    moto.updator = userId
    await this.em.persistAndFlush(moto)
    return moto
  }

  async getOne(id: number): Promise<Moto> {
    return await this.em.getRepository(Moto).findOne({ id })
  }
}
