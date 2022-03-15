"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
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
const sort = (asc, list_name, sort_key, descending) => asc
    ? (() => {
        try {
            const list_name_ptr = asc.__newString(list_name);
            asc.__pin(list_name_ptr);
            const sort_key_ptr = asc.__newString(sort_key);
            asc.__pin(sort_key_ptr);
            const result_ptr = asc.sort(list_name_ptr, sort_key_ptr, descending !== null && descending !== void 0 ? descending : 0);
            asc.__pin(result_ptr);
            asc.__unpin(list_name_ptr);
            asc.__unpin(sort_key_ptr);
            const result = asc.__getString(result_ptr);
            asc.__unpin(result_ptr);
            return JSON.parse(result);
        }
        catch (err) {
            console.error(err);
        }
    })()
    : undefined;
exports.sort = sort;
