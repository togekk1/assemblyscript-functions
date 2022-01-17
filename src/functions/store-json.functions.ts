import type { main_type } from '../interfaces/asc.interface';

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
export const store_json = (asc: main_type, list_name: string, data: Object | Object[] | string, no_underscore?: 1): void => {
  try {
    asc?.store_json(asc.__newString(list_name), asc.__newString(typeof data !== 'string' ? JSON.stringify(data) : data), no_underscore || 0);
  } catch (err) {
    console.error(err);
  }
};
