import { JSON } from 'assemblyscript-json';
import { data } from '../..';

// let level: i32 = 0;
// let keys_global: string[];
// let indexes_global: Int32Array;
// let list: JSON.Arr | null;
let get_interger_global: ((arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32) => i64) | null;
let get_string_global: ((arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32) => string | null) | null;
let get_boolean_global: ((arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32) => bool) | null;

/**
 * Get the integer value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_integer(list_name: string, indexes: Int32Array, keys: string | null): i64 {
  const list = data.getArr(list_name);
  if (keys) {
    const keys_new = (<JSON.Arr>JSON.parse(keys)).valueOf().map<string>((value: JSON.Value) => value.toString());
    get_interger_global = (arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32): i64 => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];
        const data_value = arr.valueOf()[index];
        const value: JSON.Value | null = (<JSON.Obj>data_value).get(keys[index]);
        if (value) {
          if (value.isArr) {
            const item = (<JSON.Arr>value).valueOf();
            if (item.length && item[0].isObj) {
              level++;
              return get_interger_global ? get_interger_global(<JSON.Arr>value, keys, indexes, level) : 0;
            } else return (<JSON.Integer>value).valueOf();
          } else return (<JSON.Integer>value).valueOf();
        } else return 0;
      } else return 0;
    };

    const value = get_interger_global(list, keys_new, indexes, 0);

    get_string_global = null;
    return value;
  } else return list ? (<JSON.Integer>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : 0;
}

/**
 * Get the float value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_float(list_name: string, index: i32, key: string): f64 {
  const arr = data.getArr(list_name);
  if (arr && arr.valueOf().length) {
    const data_value = arr.valueOf()[index];
    const data_to_query: JSON.Obj = changetype<JSON.Obj>(data_value);
    const value: JSON.Float | null = data_to_query.getFloat(key);
    return value ? value.valueOf() : 0;
  } else return 0;
}

/**
 * Get the string value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_string(list_name: string, indexes: Int32Array, keys: string | null, ellipsis_length: i32): string | null {
  const list = data.getArr(list_name);
  if (keys) {
    const keys_new = (<JSON.Arr>JSON.parse(keys)).valueOf().map<string>((value: JSON.Value) => value.toString());

    get_string_global = (arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32): string | null => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];

        if (index <= arr.valueOf().length - 1) {
          const data_value = arr.valueOf()[index];
          const value: JSON.Value | null = (<JSON.Obj>data_value).get(keys[level]);

          if (value) {
            if (value.isArr) {
              const item = (<JSON.Arr>value).valueOf();
              if (item.length && item[0].isObj) {
                level++;
                return get_string_global ? get_string_global(<JSON.Arr>value, keys, indexes, level) : null;
              } else return value.toString();
            } else return value.toString();
          } else return null;
        } else return null;
      } else return null;
    };

    const value_string = get_string_global(list, keys_new, indexes, 0);
    get_string_global = null;
    return value_string ? (ellipsis_length && value_string.length > ellipsis_length ? `${value_string.substr(0, ellipsis_length)}...` : value_string) : null;
  } else return list ? (<JSON.Str>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : null;
}
// export function get_string(list_name: string, index: i32, key: string): string | null {
//   const arr = data.getArr(list_name);
//   if (arr) {
//     const data_value = arr.valueOf()[index];
//     const data_to_query: JSON.Obj = changetype<JSON.Obj>(data_value);
//     const value: JSON.Str | null = data_to_query.getString(key);
//     return value ? value.valueOf() : null;
//   } else return null;
// }

/**
 * Get the boolean value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_boolean(list_name: string, indexes: Int32Array, keys: string | null): bool {
  const list = data.getArr(list_name);
  if (keys) {
    const keys_new = (<JSON.Arr>JSON.parse(keys)).valueOf().map<string>((value: JSON.Value) => value.toString());
    get_boolean_global = (arr: JSON.Arr | null, keys: string[], indexes: Int32Array, level: i32): bool => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];
        const data_value = arr.valueOf()[index];

        const value: JSON.Value | null = (<JSON.Obj>data_value).get(keys[level]);
        if (value) {
          if (value.isArr) {
            const item = (<JSON.Arr>value).valueOf();
            if (item.length && item[0].isObj) {
              level++;
              return get_boolean_global ? get_boolean_global(<JSON.Arr>value, keys, indexes, level) : false;
            } else return (<JSON.Bool>value).valueOf();
          } else return (<JSON.Bool>value).valueOf();
        } else return false;
      } else return false;
    };

    const value = get_boolean_global(list, keys_new, indexes, 0);
    // level = 0;
    // list = null;
    // keys_global = [];
    // indexes_global = new Int32Array(0);
    get_string_global = null;
    return value;
  } else return list ? (<JSON.Bool>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : false;
}

// export function get_boolean(list_name: string, index: i32, key: string): bool {
//   const arr = data.getArr(list_name);
//   if (arr) {
//     const data_value = arr.valueOf()[index];
//     const data_to_query: JSON.Obj = changetype<JSON.Obj>(data_value);
//     const value: JSON.Bool | null = data_to_query.getBool(key);
//     return value ? value.valueOf() : false;
//   } else return false;
// }

// function get_array(arr: JSON.Value, index: i32, key: string): string[] | null {
//   const data_value = (<JSON.Arr>arr).valueOf()[index];
//   const data_to_query: JSON.Obj = changetype<JSON.Obj>(data_value);
//   const value_json: JSON.Arr | null = data_to_query.getArr(key);
//   const values = value_json ? value_json.valueOf() : null;
//   const a = values ? values.map<string>((value: JSON.Value): string => value.toString()) : null;
//   return a;
// }
