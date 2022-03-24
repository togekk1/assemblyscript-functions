import { store_json as asc_store_json } from '../../lib/wasm/main.optimized';
/**
   * Example:
   * ``` ts
      const people = [
        { "name": "Joe", "age": 23, "married": true, "equity": 3555.4 },
        { "name": "Simon", "age": 18, "married": false, "equity": 3555.2 },
        { "name": "David", "age": 50, "married": true, "equity": 3556.2 },
        { "name": "Zoe", "age": 50, "married": false, "equity": 3555.9 }
      ];
      store_json("person", people);
   * ```
   * @param list_name The name of the data that stored in the global variable "data"
   * @param list_str Stringified data JSON to be parsed
   * @param no_underscore Do not convert object keys to underscore format
   */
export const store_json = (list_name, data, no_underscore) => {
    try {
        asc_store_json(list_name, typeof data !== 'string' ? JSON.stringify(data) : data, no_underscore !== null && no_underscore !== void 0 ? no_underscore : 0);
    }
    catch (err) {
        console.error(err);
    }
};
