import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Donator {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  sex:string;

  @Column()
  phone_number:string;

  @Column()
  description:string;

  @Column()
  blood_type:string;

  @Column()
  latitude: number;

  @Column()
  longitude:number;

}