import { JSON } from 'assemblyscript-json/assembly';
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
 */

export function find_integer(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): i64 {
  const result = find(list_name, key, value, query_key, is_included);
  return result ? (<JSON.Integer>result).valueOf() : 0;
}

export function find_float(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): f64 {
  const result = find(list_name, key, value, query_key, is_included);
  return result ? (<JSON.Float>result).valueOf() : 0;
}

export function find_string(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): string | null {
  const result = find(list_name, key, value, query_key, is_included);
  return result ? (<JSON.Str>result).valueOf() : null;
}

export function find_boolean(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): bool {
  const result = find(list_name, key, value, query_key, is_included);
  return result ? (<JSON.Bool>result).valueOf() : false;
}

export function find_string_array(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): StaticArray<string> | null {
  const result = find(list_name, key, value, query_key, is_included);
  const array = (<JSON.Arr>result).valueOf();
  const array_2 = StaticArray.fromArray<string>(array.map<string>((value: JSON.Value) => (<JSON.Str>value).valueOf()));
  return result ? array_2 : null;
}

function find(list_name: string, key: string, value: string, query_key: string | null, is_included: i32 = 0): JSON.Value | null {
  const arr = data.getArr(list_name);
  if (arr) {
    const data_value = arr.valueOf();
    const index_found_id: i32 = find_index(list_name, key, value, is_included);

    const query = (data_value: JSON.Value[], index_found_id: i32, query_key: string | null): JSON.Value | null => {
      const queried_value = get(data_value[index_found_id], query_key);
      return queried_value ? queried_value.value : null;
    };

    const query_or_return = (data_value: JSON.Value[], index_found_id: i32, query_key: string | null): JSON.Value | null =>
      query_key !== null ? query(data_value, index_found_id, query_key) : data_value[index_found_id];

    return index_found_id > -1 ? query_or_return(data_value, index_found_id, query_key) : null;
  }
  return null;
}

export function find_index(list_name: string, key: string, value: string, is_included: i32 = 0): i32 {
  const arr = data.getArr(list_name);
  if (arr) {
    const data_value = arr.valueOf();
    for (let i = 0; i < data_value.length; i++) {
      const value_to_find_to_obj = changetype<JSON.Obj>(data_value[i] /** value_to_find */);
      const value_found = value_to_find_to_obj.getString(key);
      const is_found = !!value_found && (is_included ? value_found.toString().includes(value) : value_found.toString() == value);
      if (is_found) return i;
    }
  }
  return -1;
}
