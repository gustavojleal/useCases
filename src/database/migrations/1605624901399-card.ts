import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class card1605624901399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cards',
                columns: [
                   {
                       name: 'id',
                       type: 'uuid',
                       isPrimary: true,
                       generationStrategy: 'uuid',
                       default: 'uuid_generate_v4()',
                    },
                   {
                       name: 'description',
                       type: 'varchar',
                       isNullable: false,
                       isUnique: true 
                   },
                   {
                       name: 'createdBy',
                       type: 'varchar',
                       isNullable: false,
                   },
                   {
                       name: 'responsable',
                       type: 'varchar',
                   },
                   {
                       name: 'blocked',
                       type: 'boolean',
                   },
                   {
                        name: 'blockMotivation',
                        type: 'varchar',
                    },
                    {
                        name: 'requiredDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'deliveryDate',
                        type: 'timestamp',
                    },
                    { 
                       name: 'created_at',
                       type: 'timestamp',
                       default: 'now()'
                    },
                    { 
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            }),
        );  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
