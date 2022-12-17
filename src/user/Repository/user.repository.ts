import { User } from "../Entities/user.Entity";
import { EntityRepository, Repository, In, AbstractRepository, Like,DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserPartial } from "../Entities/PartialTYpe";
@Injectable()
export class UserRepository {
    private repository:Repository<User>
  constructor(private dataSource: DataSource) { 
   this.repository= this.dataSource.getRepository(User)
  }
async create(data:UserPartial):Promise<User>{
    try {
        let user=await this.repository.create(data)
        await this.repository.save(user)
      return  user
    } catch (error) {
        console.log(error)
    }
return 
}
async find():Promise<User[]>{
    return await this.repository.find()
}
async delete(){
    // this.dataSource.getMongoRepository(User)
    this.repository.delete({
    name:'Amal'
    })
}
}