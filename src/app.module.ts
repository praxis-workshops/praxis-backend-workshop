import { Module } from '@nestjs/common';
import { HealthStatusController } from './health-status/health-status.controller';

@Module({
  imports: [],
  controllers: [HealthStatusController],
  providers: [],
})
export class AppModule { }
