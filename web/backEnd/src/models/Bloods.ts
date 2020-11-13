import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import  Donator from './Donator';

@Entity()
export default class Bloods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type_blood: string;

  @OneToMany(() => Donator, donator => donator.blood_code)
  donator: Donator;
}