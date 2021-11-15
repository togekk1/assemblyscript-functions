import { JSON } from 'assemblyscript-json';
import { data } from '../..';

/**
 * Sort the item of the list
 * @param list_name The name of the list that stored in the global variable "data"
 * @param sort_key Property key in the Object to sort order
 * @param descending Sort Descending
 */
export function sort(list_name: string, sort_key: string, descending: i32): string | null {
  const arr = data.getArr(list_name);
  if (arr) {
    const data_value = arr.valueOf();
    const first_value = (<JSON.Obj>data_value[0]).valueOf().get(sort_key);
    let data_sorted: JSON.Value[] = data_value;
    if (first_value.isInteger) data_sorted = sort_integer(data_value, sort_key, descending);
    if (first_value.isFloat) data_sorted = sort_float(data_value, sort_key, descending);
    if (first_value.isString) data_sorted = sort_string(data_value, sort_key, descending);
    if (first_value.isBool) data_sorted = sort_boolean(data_value, sort_key, descending);
    return `[${data_sorted.toString()}]`;
  }

  return null;
}

// function sort_integer(a: JSON.Value, b: JSON.Value, sort_key: string, descending: i32): i32 {
//   const a_int = (<JSON.Obj>a).getInteger(sort_key);
//   const b_int = (<JSON.Obj>b).getInteger(sort_key);
//   return a_int && b_int ? <i32>((a_int.valueOf() - b_int.valueOf()) * (descending ? -1 : 1)) : 0;
// }

function sort_integer(data_value: JSON.Value[], sort_key: string, descending: i32): JSON.Value[] {
  let x: JSON.Value;
  for (var i = 1; i < data_value.length; i++)
    for (var j = 0; j < i; j++) {
      const a = (<JSON.Obj>data_value[i]).getInteger(sort_key);
      const b = (<JSON.Obj>data_value[j]).getInteger(sort_key);
      if (a && b) {
        const a_int = a.valueOf();
        const b_int = b.valueOf();
        if ((!descending && a_int < b_int) || (descending && a_int > b_int)) {
          x = data_value[i];
          data_value[i] = data_value[j];
          data_value[j] = x;
        }
      }
    }
  return data_value;
}

// function sort_float(a: JSON.Value, b: JSON.Value, sort_key: string, descending: i32): i32 {
//   const a_float = (<JSON.Obj>a).getFloat(sort_key);
//   const b_float = (<JSON.Obj>b).getFloat(sort_key);
//   const compare_float = a_float && b_float ? a_float.valueOf() - b_float.valueOf() : 0;
//   return a_float && b_float ? <i32>(compare_float < 0 ? Math.floor(compare_float) : Math.ceil(compare_float)) * (descending ? -1 : 1) : 0;
// }

function sort_float(data_value: JSON.Value[], sort_key: string, descending: i32): JSON.Value[] {
  let x: JSON.Value;
  for (var i = 1; i < data_value.length; i++)
    for (var j = 0; j < i; j++) {
      const a = (<JSON.Obj>data_value[i]).getFloat(sort_key);
      const b = (<JSON.Obj>data_value[j]).getFloat(sort_key);
      if (a && b) {
        const a_float = a.valueOf();
        const b_float = b.valueOf();
        if ((!descending && a_float < b_float) || (descending && a_float > b_float)) {
          x = data_value[i];
          data_value[i] = data_value[j];
          data_value[j] = x;
        }
      }
    }
  return data_value;
}

// function sort_string(a: JSON.Value, b: JSON.Value, sort_key: string, descending: i32): i32 {
//   const a_string = (<JSON.Obj>a).getString(sort_key);
//   const b_string = (<JSON.Obj>b).getString(sort_key);
//   return a_string && b_string ? a_string.valueOf().localeCompare(b_string.valueOf()) * (descending ? -1 : 1) : 0;
// }

function sort_string(data_value: JSON.Value[], sort_key: string, descending: i32): JSON.Value[] {
  let x: JSON.Value;
  for (var i = 1; i < data_value.length; i++)
    for (var j = 0; j < i; j++) {
      const a = (<JSON.Obj>data_value[i]).getString(sort_key);
      const b = (<JSON.Obj>data_value[j]).getString(sort_key);
      if (a && b) {
        const a_string = a.valueOf();
        const b_string = b.valueOf();
        if ((!descending && a_string.localeCompare(b_string) < 0) || (descending && a_string.localeCompare(b_string) > 0)) {
          x = data_value[i];
          data_value[i] = data_value[j];
          data_value[j] = x;
        }
      }
    }
  return data_value;
}

// function sort_boolean(a: JSON.Value, b: JSON.Value, sort_key: string, descending: i32): i32 {
//   const a_boolean = (<JSON.Obj>a).getBool(sort_key);
//   const b_boolean = (<JSON.Obj>b).getBool(sort_key);
//   return a_boolean && b_boolean ? (<i32>a_boolean.valueOf() - <i32>b_boolean.valueOf()) * (descending ? -1 : 1) : 0;
// }

function sort_boolean(data_value: JSON.Value[], sort_key: string, descending: i32): JSON.Value[] {
  let x: JSON.Value;
  for (var i = 1; i < data_value.length; i++)
    for (var j = 0; j < i; j++) {
      const a = (<JSON.Obj>data_value[i]).getBool(sort_key);
      const b = (<JSON.Obj>data_value[j]).getBool(sort_key);
      if (a && b) {
        const a_boolean = a.valueOf();
        const b_boolean = b.valueOf();
        if ((!descending && a_boolean < b_boolean) || (descending && a_boolean > b_boolean)) {
          x = data_value[i];
          data_value[i] = data_value[j];
          data_value[j] = x;
        }
      }
    }
  return data_value;
}
