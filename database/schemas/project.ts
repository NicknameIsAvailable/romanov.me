import { Generated, ColumnType } from 'kysely';

interface ProjectTable {
  id: Generated<number>;
  title: string;
  description: string;
  url: string;
  github_url: string | null;
  date_from: Date;
  date_to: Date,
  modified_at: ColumnType<Date, string | undefined, never>;
}

export default ProjectTable;