import { JSON } from 'assemblyscript-json/assembly';

export class Value {
  value!: JSON.Value;
  type: i64;
}
