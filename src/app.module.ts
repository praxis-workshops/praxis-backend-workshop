import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { HealthStatusController } from './health-status/health-status.controller';

import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), UsersModule, NotesModule],
  controllers: [HealthStatusController],
  providers: [],
})
export class AppModule { }
