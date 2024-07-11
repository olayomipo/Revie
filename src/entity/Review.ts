import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column()
  apartment_id: number;

  @Column()
  rating: string;

  @Column()
  comment: string;

  @Column()
  media_uri: string;

}
