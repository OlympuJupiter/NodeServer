require('dotenv').config();

export const serverPort = process.env.SERVER_PORT || 5000;

export const dbConnection = process.env.DB_CONNECTION || 'mysql';
export const dbHost = process.env.DB_HOST || '127.0.0.1';
export const dbPort = process.env.DB_PORT || '3306';
export const dbDatabase = process.env.DB_DATABASE || '';
export const dbUsername = process.env.DB_USERNAME || '';
export const dbPassword = process.env.DB_PASSWORD || '';