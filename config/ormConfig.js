"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresSqlDataSource = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.PostgresSqlDataSource = {
    type: process.env.DB_TYPE,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    schema: process.env.DB_SCHEMA,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
};
