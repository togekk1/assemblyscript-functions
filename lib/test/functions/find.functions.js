"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_index = exports.find = void 0;
const main_optimized_1 = require("../../lib/wasm/main.optimized");
/**
   * Example:
   * ``` ts
      const age = find("person", "name", "Simon", "age", 0);
      console.log(age);
      // 18
   * ```
   * @param list_name The name of the list that stored in the global variable "data"
   * @param key Property's key in the Object to find
   * @param value Property's value in the Object to find
   *
   * Optional:
   *
   * @param query_key Another property key in the Object to query
   * @param type Type of the property to query
   * @param is_included This string is included, not exact match
   * ```
   * 0: Integer
   * 1: Float
   * 2: String
   * 3: Bool
   * 4: Array (Not supported yet)
   * 5: Object (Not supported yet)
   * ```
   */
const find = ({ list_name, key, value, query_key, type, is_included }) => {
    return (() => {
        const response = (0, main_optimized_1.find)(list_name, key, value.toString(), query_key !== null && query_key !== void 0 ? query_key : null, type !== null && type !== void 0 ? type : 0, is_included !== null && is_included !== void 0 ? is_included : 0);
        if (response)
            try {
                return JSON.parse(response);
            }
            catch (err) {
                // Response is a string
                return response;
            }
    })();
};
exports.find = find;
const find_index = ({ list_name, key, value, query_key, type }) => {
    return (() => {
        const response = (0, main_optimized_1.find_index)(list_name, key, value.toString(), query_key ? query_key : null, type !== null && type !== void 0 ? type : 0);
        return response;
    })();
};
exports.find_index = find_index;
