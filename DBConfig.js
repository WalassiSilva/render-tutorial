import pg from "pg";


const { Pool } = pg;

export const itemsPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});