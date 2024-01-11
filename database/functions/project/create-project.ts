import db, { Database } from "@/database";
import ProjectTable from "@/database/schemas/project";
import { InsertQueryBuilder, InsertResult } from "kysely";

interface Data extends Pick<ProjectTable, "title" | "description" | "url" | "github_url" | "date_from" | "date_to"> {}

const createProject = async (data: Data)=> {
    try {
        const res = await db
            .insertInto("project")
            .values(data)
            .execute()
        return res
    } catch (err) {
        console.log(err)
    }
}

export default createProject;