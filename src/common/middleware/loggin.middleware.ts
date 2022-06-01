import { Injectable, NestMiddleware } from '@nestjs/common';

// We can use middleware as a function or as a class.
@Injectable()
export class LogginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Request-response time');
    console.log('hello from middleware');

    res.on('finish', () => console.timeEnd('Request-response time'));
    next(); // always call at the end of the middleware
  }
}
