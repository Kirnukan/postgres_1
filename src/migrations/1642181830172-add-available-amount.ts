import {MigrationInterface, QueryRunner} from "typeorm";

export class addAvailableAmount1642181830172 implements MigrationInterface {
    name = 'addAvailableAmount1642181830172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "products"
            ADD "available_amount" integer NOT NULL DEFAULT '0'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "products" DROP COLUMN "available_amount"
        `);
    }

}
