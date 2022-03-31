import { FakeAuthInterceptor } from '../src/middleware/fake-auth.middleware'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { AppModule } from '../src/app.module'

describe('MotoController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalInterceptors(new FakeAuthInterceptor())
    await app.init()
  })

  it('create moto success', async () => {
    const fakeLicense = new Date().getTime()

    const result = await createMoto(fakeLicense)

    expect(result.statusCode).toEqual(201)
    expect(result.body).toHaveProperty('id')
  })

  it('update moto miles success', async () => {
    const fakeLicense = new Date().getTime()
    const { body } = await createMoto(fakeLicense)
    const miles = 100

    const result = await request(app.getHttpServer())
      .put(`/moto/${body.id}`)
      .send({
        miles: miles,
        version: body.version,
      })

    expect(result.statusCode).toEqual(200)
    expect(result.body.miles).toEqual(miles)
    expect(result.body.id).toEqual(body.id)
    expect(result.body.version).toEqual(body.version + 1)
    expect(result.body.updator).not.toBeUndefined()
  })

  it('find one exist success', async () => {
    const fakeLicense = new Date().getTime()
    const { body } = await createMoto(fakeLicense)

    const result = await request(app.getHttpServer()).get(`/moto/${body.id}`)

    expect(result.statusCode).toEqual(200)
  })

  const createMoto = (fakeLicense: number) => {
    return request(app.getHttpServer())
      .post('/moto')
      .send({
        license: 'XXX-' + fakeLicense,
        miles: 0,
        status: 0,
      })
  }
})
