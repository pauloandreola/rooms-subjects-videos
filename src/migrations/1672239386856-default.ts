import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672239386856 implements MigrationInterface {
    name = 'default1672239386856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}
