import { JSON } from 'assemblyscript-json';
import { Value } from '../../classes/value';

/**
 * Get the string value from the item of the list
 * @param item_to_query Item value from the list
 * @param key Property key in the Object to query
 */
export function get(item_to_query: JSON.Value, key: string | null): Value | null {
  let return_value: Value | null = null;
  if (key) {
    const data_to_query: JSON.Obj = changetype<JSON.Obj>(item_to_query);
    const value: JSON.Value | null = data_to_query.getValue(key);
    const type: i64 = value ? [value.isInteger, value.isFloat, value.isString, value.isBool].indexOf(true) : 0;

    if (value) {
      return_value = new Value();
      return_value.value = value;
      return_value.type = type;
    }
  }
  return return_value;
}
