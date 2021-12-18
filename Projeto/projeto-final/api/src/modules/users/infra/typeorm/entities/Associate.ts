import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('associate')
export class Associate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  date_of_birth: string;

  @Column()
  phone_number: number;

  @Column()
  celphone_number: number;

  @Column()
  email: string;

  @Column()
  chassi: string;

  @Column()
  renavam: string;

  @Column()
  license_plate: string;

  @Column()
  model: string;

  @Column()
  fuel: string;

  @Column()
  year_of_fabrication: number;

  @Column()
  cep: string;

  @Column()
  adress: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
