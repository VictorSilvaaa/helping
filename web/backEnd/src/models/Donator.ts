import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Bloods from './Bloods';

@Entity()
export default class Donator {
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
  @JoinColumn({name: "blood_code", referencedColumnName: 'id'})
  blood: Bloods;
}