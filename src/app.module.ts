import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthStatusController } from './health-status/health-status.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), UsersModule],
  controllers: [HealthStatusController],
  providers: [],
})
export class AppModule { }
