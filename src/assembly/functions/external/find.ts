import { JSON } from 'assemblyscript-json';
import { data } from '../..';
import { get } from '../internal/get';

// let key_global: string, value_global: string;

/**
 * Find an object item in an object array.
 *
 * @param list_name The name of the list that stored in the global variable "data"
 * @param key Property's key in the Object to find
 * @param value Property's value in the Object to find
 *
 * Optional:
 *
 * @param query_key Another property key in the Object to query
 * @param type Type of the property to query
 *
 * ``` text
 * 0: Integer
 * 1: Float
 * 2: String
 * 3: Bool
 * 4: Array (Not supported yet)
 * 5: Object (Not supported yet)
 * ```
 */
export function find(list_name: string, key: string, value: string, query_key: string | null, type: i32, is_included: i32): string | null {
  const arr = data.getArr(list_name);
  if (arr) {
    const data_value = arr.valueOf();
    const index_found_id: i32 = find_index(list_name, key, value, query_key, type, is_included);

    const query = (data_value: JSON.Value[], index_found_id: i32, query_key: string | null): string | null => {
      const queried_value = get(data_value[index_found_id], query_key);
      return queried_value && queried_value.value ? queried_value.value.stringify() : null;
    };

    const query_or_return = (type: i64, data_value: JSON.Value[], index_found_id: i32, query_key: string | null): string | null =>
      query_key !== null ? query(data_value, index_found_id, query_key) : data_value[index_found_id].stringify();

    return index_found_id > -1 ? query_or_return(type, data_value, index_found_id, query_key) : null;
  }
  return null;
}

export function find_index(list_name: string, key: string, value: string, query_key: string | null, type: i32, is_included: i32 = 0): i32 {
  const arr = data.getArr(list_name);
  if (arr) {
    const data_value = arr.valueOf();
    for (let i = 0; i < data_value.length; i++) {
      const value_to_find_to_obj = changetype<JSON.Obj>(data_value[i] /** value_to_find */);
      const value_found = value_to_find_to_obj.getString(key);
      const is_found = !!value_found && (is_included ? value_found.stringify().includes(value) : value_found.stringify() == value);
      if (is_found) return i;
    }
  }
  return -1;
}
