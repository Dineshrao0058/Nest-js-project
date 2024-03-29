import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';
import { admin} from './schema/admin.schema';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    async findAll(): Promise<admin[]> {
      return this.adminService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<admin> {
      return this.adminService.findOne(id);
    }
  
    @Post()
    async create(@Body() AdminDto: AdminDto): Promise<admin> {
      return this.adminService.create(AdminDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() AdminDto: AdminDto): Promise<admin> {
      return this.adminService.update(id, AdminDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.adminService.remove(id);
    }
}
