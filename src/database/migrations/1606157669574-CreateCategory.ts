import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1606157669574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'category',
                columns: [
                    {
                        name: 'category_name',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true,
                        isUnique: true
                    }

                ],
                
                
                
            }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
