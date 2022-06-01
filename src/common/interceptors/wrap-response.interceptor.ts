import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // return next.handle();
    // return next.handle().pipe(tap((data) => console.log('after-> ', data)));
    return next.handle().pipe(
      map((data) => ({
        data,
      })),
    );
  }
}
