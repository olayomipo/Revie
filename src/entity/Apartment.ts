import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  landlord_id: number;

  @Column()
  amenities: string;


}
