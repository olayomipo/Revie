import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Remark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  review_id: number;

  @Column()
  helpful: boolean;
}
