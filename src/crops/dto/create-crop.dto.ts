import { IsInt, IsString } from "class-validator";

export class CreateCropDto {
    @IsString()
    name: string;
    @IsInt()
    watering_frecuence: number;
    @IsInt()
    watering_time: number;
    @IsString()
    type: string;
    @IsString()
    photo_url: string;
    @IsInt()
    usersId: number;
}