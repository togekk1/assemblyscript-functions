"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const main_optimized_1 = require("../../lib/wasm/main.optimized");
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
const get = (list_name, indexes, keys, type, ellipsis_length) => {
    try {
        const value = [main_optimized_1.get_integer, main_optimized_1.get_float, main_optimized_1.get_string, main_optimized_1.get_boolean][type](list_name, indexes, JSON.stringify(keys), ellipsis_length !== null && ellipsis_length !== void 0 ? ellipsis_length : 0);
        return value;
    }
    catch (err) {
        console.error(err);
    }
    return;
};
exports.get = get;
