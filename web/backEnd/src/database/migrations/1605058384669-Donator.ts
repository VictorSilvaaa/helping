import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Donator1605058384669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
					name: 'Donator',
					columns: [
						{
							name: 'id',
							type: 'integer',
							unsigned: true,
							isPrimary: true,
							isGenerated: true,
							generationStrategy: 'increment'
						},
						{
							name: 'name',
							type: 'varchar'
						},
						{
							name: 'sex',
							type: 'varchar'
						},
						{
							name: 'phone_number',
							type: 'varchar'
						},
						{
							name: 'description',
							type: 'text'
						}, 
						{
							name: 'blood_type',
							type: 'varchar'
						},
						{
							name: 'latitude',
							type: 'decimal',
							scale: 10,
							precision: 2
						},
						{
							name: 'longitude',
							type: 'decimal',
							scale: 10,
							precision: 2
						}
					]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('Donator');
    }

}
