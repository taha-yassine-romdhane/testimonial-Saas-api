import { IsString, IsNumber, IsBoolean, IsEmail } from 'class-validator';

export class UserDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  profileImage: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  isGuest: boolean;

  @IsString()
  job: string;

  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;
}
