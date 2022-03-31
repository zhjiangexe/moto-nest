import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class User {
  @PrimaryKey()
  userId!: number
  @Property()
  username!: string
  @Property()
  email: string
}
