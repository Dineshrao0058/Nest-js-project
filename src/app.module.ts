import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AdminModule,
  MongooseModule.forRoot("mongodb://localhost:27017/demo-project")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
