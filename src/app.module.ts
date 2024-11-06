import { Module } from '@nestjs/common';
import { UserModule } from './entities/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresSqlDataSource } from '../config/ormConfig';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from "./entities/admin/admin.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot(PostgresSqlDataSource),
    UserModule,
    AdminModule,
  ],
  exports: [ConfigModule],
})
export class AppModule {}
