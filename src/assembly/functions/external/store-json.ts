import { JSON } from 'assemblyscript-json/assembly';
import { data } from '../..';

/**
 * @param list_name The name of the data that stored in the global variable "data"
 * @param list_str Stringified data JSON to be parsed
 * @param type Type of the data
 * ```
 * 0: Integer
 * 1: Float
 * 2: String
 * 3: Bool
 * 4: Array
 * 5: Object
 * ```
 */
export function store_json(list_name: string, list_str: string, no_underscore: i32 = 0): void {
  const list_value = JSON.parse(list_str);
  if (list_value.isInteger) data.set<JSON.Integer>(list_name, <JSON.Integer>list_value);
  else if (list_value.isFloat) data.set<JSON.Float>(list_name, <JSON.Float>list_value);
  else if (list_value.isString) data.set<JSON.Str>(list_name, <JSON.Str>list_value);
  else if (list_value.isBool) data.set<JSON.Bool>(list_name, <JSON.Bool>list_value);
  else if (list_value.isObj) data.set<JSON.Obj>(list_name, <JSON.Obj>list_value);
  else if (list_value.isArr) {
    let arr_json = <JSON.Arr>JSON.parse(list_str);

    if (!no_underscore) {
      const replaceAt = (string: string, index: i32, replacement: string): string =>
        string.substr(0, index) + replacement + string.substr(index + replacement.length - 1);

      const arr = arr_json.valueOf();
      if (arr.length && arr[0].isObj) {
        const arr_new = new JSON.Arr();
        let i: i32, j: i32, k: i32, charcode: i32, key: string, key_new: string, object_new: JSON.Obj;
        for (i = 0; i < arr.length; i++) {
          const keys: string[] = (<JSON.Obj>arr[i]).keys;
          object_new = new JSON.Obj();

          for (j = 0; j < keys.length; j++) {
            key = keys[j];
            key_new = key;

            for (k = 0; k < key.length; k++) {
              charcode = key_new.charCodeAt(k);
              if (charcode > 64 && charcode < 91) {
                key_new = replaceAt(key_new, k, `_${key_new.charAt(k).toLowerCase()}`);
              }
            }
            object_new.set(key_new, (<JSON.Obj>arr[i]).getValue(key));
          }

          arr_new.push(object_new);
        }
        data.set<JSON.Arr>(list_name, arr_new);
      } else data.set<JSON.Arr>(list_name, arr_json);
    } else data.set<JSON.Arr>(list_name, arr_json);
  }
}
