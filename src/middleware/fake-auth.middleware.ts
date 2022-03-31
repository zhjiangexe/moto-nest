import { CallHandler, ExecutionContext } from '@nestjs/common'
import { Observable, tap } from 'rxjs'

export class FakeAuthInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // mock user
    const req = context.switchToHttp().getRequest()
    req.user = {
      userId: 9000,
      username: 'user9000',
      email: 'user9000@email.com',
    }
    return next.handle().pipe()
  }
}
