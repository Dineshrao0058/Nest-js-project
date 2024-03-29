import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { adminSchema } from './schema/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'admin', schema: adminSchema }]),
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
