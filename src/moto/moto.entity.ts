import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Moto {
  @PrimaryKey()
  id!: number

  @Property({ unique: true })
  license!: string

  @Property()
  miles!: number

  @Property()
  status!: number

  @Property({ version: true })
  version!: number

  @Property({ onCreate: () => new Date() })
  createdAt!: Date

  @Property()
  creator!: number

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date

  @Property({ nullable: true })
  updator?: number
}
