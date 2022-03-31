import { FakeAuthGuard } from './middleware/fake-auth.guard'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FakeAuthInterceptor } from './middleware/fake-auth.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new FakeAuthInterceptor())

  await app.listen(3000)
}
bootstrap()
