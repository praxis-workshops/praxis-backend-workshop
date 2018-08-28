import { Controller, Get } from '@nestjs/common';

@Controller('health-status')
export class HealthStatusController {

  @Get('/')
  healthStatus(): any {
    return {
      message: "I'm ok",
    };
  }
}
