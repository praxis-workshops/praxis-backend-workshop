import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
@ApiUseTags('status')
export class HealthStatusController {

  @Get('/')
  healthStatus(): any {
    return {
      message: "I'm ok",
    };
  }
}
