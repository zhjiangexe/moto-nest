import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common'
import { User } from 'src/user/user.entity'
import { Moto } from './moto.entity'
import { MotoService } from './moto.service'
import CreateMoto from './createMoto'
import UpdateMoto from './updateMoto'

@Controller('moto')
export class MotoController {
  constructor(private readonly motoService: MotoService) {}

  @Post()
  async createMoto(@Body() createMoto: CreateMoto, @Req() req): Promise<Moto> {
    const user: User = req.user
    return await this.motoService.createMoto(createMoto, user.userId)
  }

  @Put(':id')
  async updateMiles(
    @Param('id') id: number,
    @Body() updateMoto: UpdateMoto,
    @Req() req,
  ): Promise<Moto> {
    const user: User = req.user
    updateMoto.id = id
    return this.motoService.updateMiles(updateMoto, user.userId)
  }

  @Get(':id')
  async findOne(id: number): Promise<Moto> {
    const one = await this.motoService.getOne(id)
    console.log(one)
    return one
  }
}
