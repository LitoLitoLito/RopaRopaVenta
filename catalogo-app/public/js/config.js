export const DB_PORT = process.env.DB_PORT || 3306;

import { config } from 'dotenv';
config();

function getEnvVariable(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not set`);
    }
    return value;
}

export const PORT = process.env.PORT || 3000;
export const DB_HOST = getEnvVariable('DB_HOST');
export const DB_USER = getEnvVariable('DB_USER');
export const DB_PASSWORD = getEnvVariable('DB_PASSWORD');
export const DB_NAME = getEnvVariable('DB_NAME');

