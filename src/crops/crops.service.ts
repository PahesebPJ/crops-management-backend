import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crops } from './crops.entity';
import { Repository } from 'typeorm';
import { CreateCropDto } from './dto/create-crop.dto';
import { Users } from 'src/users/user.entity';

@Injectable()
export class CropsService {
    constructor(
        @InjectRepository(Crops)
        private readonly cropsRepository: Repository<Crops>,
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users> 
    ){}
    
    async findAll(): Promise<Crops[]> {
        return this.cropsRepository.find();
    }

    async findOne(id:number): Promise<Crops> {
        return this.cropsRepository.findOneBy({id});
    }

    async getByUserId(usersId: number) {
        return this.cropsRepository.find({
            where: {users: {id: usersId}},
        })
    }

    async create(createCropDto: CreateCropDto) {
        //Extracting object and property usersId
        const { usersId, ...cropData } = createCropDto;

        //Checking if user exist
        const user = await this.usersRepository.findOne({
            where: { id: usersId }
        });

        if(!user) {
            throw new Error('User with ID not found');
        }

        //Creating object
        const newCrop = this.cropsRepository.create({
            ...cropData,
            users: user,
        });
        
        return await this.cropsRepository.save(newCrop);
    }
}
