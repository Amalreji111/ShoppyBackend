import {Entity,Column,ObjectIdColumn,BeforeInsert, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import * as bcryptjs from 'bcryptjs';
export enum Role{
  Admin='Admin',
  User='User'
}
@Entity()
export class User{
  @ObjectIdColumn()
id:number;
@Column()
name:string;
@Column()
email:string;
@Column({ default: Role.User,type:"enum",enum:Role })
role:Role;
@Column({select:true})
password:string;
@BeforeInsert()
hashPass() {
  this.password = bcryptjs.hashSync(this.password, 10);
}
@CreateDateColumn()
createdAt:Date;
@UpdateDateColumn()
updatedAt:Date;
}