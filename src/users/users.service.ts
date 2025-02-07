import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ) {}

    async findAll(): Promise<Users[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<Users> {
        return this.userRepository.findOneBy({id})
    }
/*Login */
    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    findOneByEmail(email: string) {
        return this.userRepository.findOneBy({email});
    }
/*Login */
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
