import { IsNotEmpty } from 'class-validator'

export default class CreateMoto {
  @IsNotEmpty()
  license?: string

  @IsNotEmpty()
  miles?: number

  @IsNotEmpty()
  status?: number
}
