import { Pool } from 'pg'

const pool = new Pool({
    user: "postgres",
    password: "abc",
    host: "localhost",
    port: 5432,
    database: "todo_app"
})

export default pool;