import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './Entities/user.Entity';
import { UserRepository } from './Repository/user.repository';

@Injectable()
export class UserService {
  // constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
constructor(
  private readonly usersRepository: UserRepository,

){

}
 async create(createUserDto: CreateUserDto) {
  try {
    
    await this.usersRepository.create(
      {
          name:'Amal',
          password:'123456789',
          email:'amalreji111@gmail.com'
         }
    )
  } catch (error) {
    console.log(error)
  }
    return 'This action adds a new user';
  }

  async findAll() {
    // let users=await this.userModel.find()
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
