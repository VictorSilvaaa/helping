import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Donator1605147469740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table (
            {
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
                        name: 'blood_code',
                        type: 'integer'
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
                ],
                foreignKeys: [
                    {
                        name: 'blood_code',
                        columnNames: ['blood_code'],
                        referencedTableName: 'bloods',
                        referencedColumnNames: ['id'],
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Donator');
    }

}
