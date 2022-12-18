import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Log {
  @ObjectIdColumn()
  public id: number;
 
  @Column({nullable:true})
  public context: string;
 
  @Column()
  public message: string;
 
  @Column()
  public level: string;
 
  @CreateDateColumn()
  creationDate: Date;
}
 
export default Log;