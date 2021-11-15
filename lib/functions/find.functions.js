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
export const find = ({ asc, list_name, key, value, query_key, type, is_included, }) => {
    return asc
        ? (() => {
            const { main } = asc;
            const response = main.__getString(main.find(main.__newString(list_name), main.__newString(key), typeof value === "string" ? main.__newString(value) : value, query_key ? main.__newString(query_key) : undefined, type !== null && type !== void 0 ? type : 0, is_included !== null && is_included !== void 0 ? is_included : 0));
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
export const find_index = ({ asc, list_name, key, value, query_key, type, }) => {
    return asc
        ? (() => {
            const { main } = asc;
            const response = main.find_index(main.__newString(list_name), main.__newString(key), typeof value === "string" ? main.__newString(value) : value, query_key ? main.__newString(query_key) : undefined, type !== null && type !== void 0 ? type : 0);
            return response;
        })()
        : 0;
};
