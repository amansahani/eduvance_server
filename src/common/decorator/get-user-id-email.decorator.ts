import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

interface CustomUser {
  userId: string;
  sessionId: string;
}

interface CustomRequest extends Request {
  user?: CustomUser;
}

export const GetCurrentUserIdSession = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<CustomRequest>();

    return {
      userId: request?.user?.userId,
      sessionId: request?.user?.sessionId,
    };
  },
);
