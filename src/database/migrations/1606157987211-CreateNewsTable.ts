import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNewsTable1606157987211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'news',
                columns: [
                    {
                        name: 'new_id',
                        isGenerated: true,
                        type: 'int',
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'new_name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'new_content',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'new_category',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'category_name',
                        type: 'varchar'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'CategoryNameForeign',
                        columnNames: ['category_name'],
                        referencedTableName: 'category',
                        referencedColumnNames: ['category_name']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
