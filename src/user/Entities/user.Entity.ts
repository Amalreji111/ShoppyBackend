import {Entity,Column,ObjectIdColumn,BeforeInsert} from 'typeorm'
import * as bcryptjs from 'bcryptjs';

@Entity()
export class User{
  @ObjectIdColumn()
id:number;
@Column()
name:string;
@Column()
email:string;

@Column({select:true})
password:string;
@BeforeInsert()
hashPass() {
  this.password = bcryptjs.hashSync(this.password, 10);
}
}