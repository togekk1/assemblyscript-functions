import type { asc_type } from '../interfaces/asc.interface';

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
export const sort = (asc: asc_type, list_name: string, sort_key: string, descending?: 1 | boolean): Object[] =>
  asc
    ? (() => {
        try {
          return JSON.parse(asc.__getString(asc.sort(asc.__newString(list_name), asc.__newString(sort_key), descending ?? 0)));
        } catch (err) {
          console.error(err);
        }
      })()
    : undefined;
