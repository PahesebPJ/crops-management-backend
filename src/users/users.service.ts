import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

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

    create(user: Users): Promise<Users> {
        return this.userRepository.save(user)
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
