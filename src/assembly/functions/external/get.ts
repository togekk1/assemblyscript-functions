import { JSON } from 'assemblyscript-json/assembly';
import { data } from '../..';

// let level: i32 = 0;
// let keys_global: string[];
// let indexes_global: Int32Array;
// let list: JSON.Arr | null;
let get_interger_global: ((arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32) => i64) | null;
let get_float_global: ((arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32) => f64) | null;
let get_string_global: ((arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32) => string | null) | null;
let get_boolean_global: ((arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32) => bool) | null;

/**
 * Get the integer value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_integer(list_name: string, indexes: Int32Array, keys: StaticArray<string | null> | null): i64 {
  const list = data.getArr(list_name);
  if (keys) {
    get_interger_global = (arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32): i64 => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];
        const data_value = arr.valueOf()[index];
        const value: JSON.Value | null = keys[level] ? (<JSON.Obj>data_value).get(<string>keys[level]) : null;
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

    const value = get_interger_global(list, keys, indexes, 0);

    get_interger_global = null;
    return value;
  } else return list ? (<JSON.Integer>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : 0;
}

/**
 * Get the float value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_float(list_name: string, indexes: Int32Array, keys: StaticArray<string | null> | null): f64 {
  const list = data.getArr(list_name);
  if (keys) {
    get_float_global = (arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32): f64 => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];
        const data_value = arr.valueOf()[index];
        const value: JSON.Value | null = keys[level] ? (<JSON.Obj>data_value).get(<string>keys[level]) : null;
        if (value) {
          if (value.isArr) {
            const item = (<JSON.Arr>value).valueOf();
            if (item.length && item[0].isObj) {
              level++;
              return get_float_global ? get_float_global(<JSON.Arr>value, keys, indexes, level) : 0;
            } else return (<JSON.Float>value).valueOf();
          } else return (<JSON.Float>value).valueOf();
        } else return 0;
      } else return 0;
    };

    const value = get_float_global(list, keys, indexes, 0);

    get_float_global = null;
    return value;
  } else return list ? (<JSON.Float>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : 0;
}

/**
 * Get the string value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_string(list_name: string, indexes: Int32Array, keys: StaticArray<string | null> | null, ellipsis_length: i32 = 0): string | null {
  const list = data.getArr(list_name);
  if (keys) {
    get_string_global = (arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32): string | null => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];

        if (index <= arr.valueOf().length - 1) {
          const data_value = arr.valueOf()[index];
          const value: JSON.Value | null = keys[level] ? (<JSON.Obj>data_value).get(<string>keys[level]) : null;

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

    const value_string = get_string_global(list, keys, indexes, 0);
    get_string_global = null;
    return value_string ? (ellipsis_length && value_string.length > ellipsis_length ? `${value_string.substr(0, ellipsis_length)}...` : value_string) : null;
  } else return list ? (<JSON.Str>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : null;
}

/**
 * Get the boolean value from the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param index Item index number in the list
 * @param key Property key in the Object to query
 */
export function get_boolean(list_name: string, indexes: Int32Array, keys: StaticArray<string | null> | null): bool {
  const list = data.getArr(list_name);
  if (keys) {
    get_boolean_global = (arr: JSON.Arr | null, keys: StaticArray<string | null>, indexes: Int32Array, level: i32): bool => {
      if (arr && arr.valueOf().length) {
        const index = indexes[level];
        const data_value = arr.valueOf()[index];
        const value: JSON.Value | null = keys[level] ? (<JSON.Obj>data_value).get(<string>keys[level]) : null;
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

    const value = get_boolean_global(list, keys, indexes, 0);
    get_string_global = null;
    return value;
  } else return list ? (<JSON.Bool>(<JSON.Arr>list).valueOf()[indexes[0]]).valueOf() : false;
}
