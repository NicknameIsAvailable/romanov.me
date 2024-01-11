import { Generated, ColumnType } from 'kysely';

interface OrderTable {
  id: Generated<number>;
  telegram: string;
  description: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export default OrderTable;