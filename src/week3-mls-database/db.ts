// db.ts

import "dotenv/config";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST ?? "localhost",
  user: process.env.MYSQL_USER ?? "root",
  password: process.env.MYSQL_PASSWORD ?? "",
  database: process.env.MYSQL_DATABASE ?? "idx_exchange",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Execute a SQL query and return typed rows.
 */
export async function query<T extends RowDataPacket>(
  sql: string,
  params: any[] = []
): Promise<T[]> {
  const [rows] = await pool.execute<T[]>(sql, params);
  return rows;
}

/**
 * Test the database connection.
 */
export async function testConnection(): Promise<void> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT 1 AS connected"
  );

  console.log("Database connection:", rows[0]);
}