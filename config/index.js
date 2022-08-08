require('dotenv').config();

export const serverHost = process.env.SERVER_HOST || '127.0.0.1';
export const serverPort = process.env.SERVER_PORT || 5000;