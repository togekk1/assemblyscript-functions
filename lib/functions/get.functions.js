import { get_integer, get_float, get_string, get_boolean } from '../../lib/wasm/main.optimized';
/**
   * Example:
   * ``` ts
      const name = get("person", 0, "name", 2);
      console.log(name);
      // Simon
   * ```
   * @param list_name The name of the list that stored in the global variable "data"
   * @param index Item index number in the list
   * @param key Property key in the Object to query
   * @param type Type of the property to query
   * ```
   * 0: Integer
   * 1: Float
   * 2: String
   * 3: Bool
   * 4: Array (Not supported yet)
   * 5: Object (Not supported yet)
   * ```
   */
export const get = (list_name, indexes, keys, type, ellipsis_length) => {
    try {
        const value = [get_integer, get_float, get_string, get_boolean][type](list_name, indexes, JSON.stringify(keys), ellipsis_length !== null && ellipsis_length !== void 0 ? ellipsis_length : 0);
        return value;
    }
    catch (err) {
        console.error(err);
    }
    return;
};
