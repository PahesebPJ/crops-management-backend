import { Module } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CropsController } from './crops.controller';
import { Users } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crops } from './crops.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crops,Users])],
  providers: [CropsService],
  controllers: [CropsController]
})
export class CropsModule {}
