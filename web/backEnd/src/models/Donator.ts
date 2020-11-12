import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {Bloods} from './Bloods';

@Entity()
export class Donator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  phone_number: string;

  @Column()
  description: string;

  @Column()
  blood_code: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @ManyToOne(() => Bloods, blood => blood.id)
  blood: Bloods;

}