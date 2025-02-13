import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CropsService } from './crops.service';
import { Crops } from './crops.entity';
import { CreateCropDto } from './dto/create-crop.dto';

@Controller('crops')
export class CropsController {
    constructor(private readonly cropsService:CropsService){}

    @Get()
    findAll(): Promise<Crops[]>{
        return this.cropsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Crops> {
        return this.cropsService.findOne(+id);
    }

    @Post()
    async create(
        @Body() 
        createCropDto: CreateCropDto
    ) {
        return this.cropsService.create(createCropDto);
    }

    @Get("users/:userId")
    async getByUserId(@Param("userId") userId: number) {
        return this.cropsService.getByUserId(userId);
    }
}
