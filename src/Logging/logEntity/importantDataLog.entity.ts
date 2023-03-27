import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class ImportantLog {
 @PrimaryGeneratedColumn()
  id: number;
  @Column()
  public owner: string;
  @Column()
  public exam_id:number;
  @Column()
  public action: string;
  @Column()
  public description: string;
  @CreateDateColumn()
  date: Date;
}
 
export default ImportantLog;