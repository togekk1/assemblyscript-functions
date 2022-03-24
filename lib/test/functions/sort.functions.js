"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const main_optimized_1 = require("../../lib/wasm/main.optimized");
/**
   * Example:
   * ``` ts
      const people = [
        { "name": "Joe", "age": 23, "married": true, "equity": 3555.4 },
        { "name": "Simon", "age": 18, "married": false, "equity": 3555.2 },
        { "name": "David", "age": 50, "married": true, "equity": 3556.2 },
        { "name": "Zoe", "age": 50, "married": false, "equity": 3555.9 }
      ];
      store_json('people', people);
      const people_new = sort('people', 'equity');
      console.log(people_new);
      // [
      //   {"name":"Simon","age":18,"married":false,"equity":3555.2},
      //   {"name":"Joe","age":23,"married":true,"equity":3555.4},
      //   {"name":"Zoe","age":50,"married":false,"equity":3555.9},
      //   {"name":"David","age":50,"married":true,"equity":3556.2}
      // ]
   * ```
   * @param list_name The name of the list that stored in the global variable "data"
   * @param sort_key Property key in the Object to sort order
   * @param is_descend Sort Descending
   */
const sort = (list_name, sort_key, descending) => {
    var _a;
    try {
        return JSON.parse((_a = (0, main_optimized_1.sort)(list_name, sort_key, descending !== null && descending !== void 0 ? descending : 0)) !== null && _a !== void 0 ? _a : '');
    }
    catch (err) {
        console.error(err);
    }
};
exports.sort = sort;
