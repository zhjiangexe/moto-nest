import { IsNotEmpty } from 'class-validator'
export default class UpdateMoto {
  id: number

  license?: string

  miles?: number

  status?: number

  @IsNotEmpty()
  version!: number
}
