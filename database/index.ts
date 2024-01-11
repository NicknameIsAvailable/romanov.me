import { createKysely } from "@vercel/postgres-kysely";
import ProjectTable from "./schemas/project";
import OrderTable from "./schemas/order";

const POSTGRES_URL = process.env.POSTGRES_URL

export interface Database {
    project: ProjectTable;
    order: OrderTable;
}

const db = createKysely<Database>({ 
    connectionString: POSTGRES_URL
});

export default db;
