import { DB, config } from "./deps.ts";

const db = new DB(config().DB_SOURCE || "db.sqlite");
db.execute(`
  CREATE TABLE IF NOT EXISTS tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title string(255), 
    type string(50), 
    text text
  )
`);

export default db;
