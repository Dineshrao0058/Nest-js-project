import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDto } from './dto/admin.dto'; 
import { admin } from './schema/admin.schema'; 

@Injectable()
export class AdminService {
    constructor(@InjectModel('admin') private adminModel: Model<admin>) {}

  async findAll(): Promise<admin[]> {
    return this.adminModel.find().exec();
  }

  async findOne(id: string): Promise<admin> {
    return this.adminModel.findById(id).exec();
  }

  async create(AdminDto: AdminDto): Promise<admin> {
    const createdadmin = new this.adminModel(AdminDto);
    return createdadmin.save();
  }

  async update(id: string, AdminDto: AdminDto): Promise<admin> {
    return this.adminModel.findByIdAndUpdate(id, AdminDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.adminModel.findByIdAndDelete(id).exec();
  }
}
