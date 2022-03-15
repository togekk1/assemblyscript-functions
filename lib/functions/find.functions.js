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
export const find = ({ asc, list_name, key, value, query_key, type, is_included }) => {
    return asc
        ? (() => {
            const list_name_ptr = asc.__newString(list_name);
            asc.__pin(list_name_ptr);
            const key_ptr = asc.__newString(key);
            asc.__pin(key_ptr);
            const value_ptr = typeof value === 'string' ? asc.__newString(value) : undefined;
            value_ptr && asc.__pin(value_ptr);
            const query_key_ptr = query_key ? asc.__newString(query_key) : undefined;
            query_key_ptr && asc.__pin(query_key_ptr);
            const response = asc.__getString(asc.find(list_name_ptr, key_ptr, typeof value === 'string' && value_ptr ? value_ptr : typeof value === 'boolean' && value, query_key_ptr, type !== null && type !== void 0 ? type : 0, is_included !== null && is_included !== void 0 ? is_included : 0));
            asc.__unpin(list_name_ptr);
            asc.__unpin(key_ptr);
            value_ptr && asc.__unpin(value_ptr);
            query_key_ptr && asc.__unpin(query_key_ptr);
            try {
                return JSON.parse(response);
            }
            catch (err) {
                // Response is a string
                return response;
            }
        })()
        : undefined;
};
export const find_index = ({ asc, list_name, key, value, query_key, type }) => {
    return asc
        ? (() => {
            const response = asc.find_index(asc.__newString(list_name), asc.__newString(key), typeof value === 'string' ? asc.__newString(value) : value, query_key ? asc.__newString(query_key) : undefined, type !== null && type !== void 0 ? type : 0);
            return response;
        })()
        : 0;
};
