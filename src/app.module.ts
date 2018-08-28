import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HealthStatusController } from './health-status/health-status.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL)],
  controllers: [HealthStatusController],
  providers: [],
})
export class AppModule { }
