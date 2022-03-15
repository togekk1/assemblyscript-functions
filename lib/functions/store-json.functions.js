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
export const store_json = (asc, list_name, data, no_underscore) => {
    try {
        const list_name_ptr = asc.__newString(list_name);
        asc.__pin(list_name_ptr);
        const data_ptr = asc.__newString(typeof data !== 'string' ? JSON.stringify(data) : data);
        asc.__pin(data_ptr);
        asc === null || asc === void 0 ? void 0 : asc.store_json(list_name_ptr, data_ptr, no_underscore || 0);
        asc.__unpin(list_name_ptr);
        asc.__unpin(data_ptr);
    }
    catch (err) {
        console.error(err);
    }
};
