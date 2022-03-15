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
export const get = (asc, list_name, indexes, keys, type, ellipsis_length) => {
    return asc
        ? (() => {
            try {
                const list_name_ptr = asc.__newString(list_name);
                asc.__pin(list_name_ptr);
                const indexes_ptr = asc.__newArray(asc.Int32Array_ID, indexes);
                asc.__pin(indexes_ptr);
                const keys_ptr = keys ? asc.__newString(JSON.stringify(keys)) : null;
                keys_ptr && asc.__pin(keys_ptr);
                const value = [asc.get_integer, asc.get_float, asc.get_string, asc.get_boolean][type](list_name_ptr, indexes_ptr, keys_ptr, ellipsis_length);
                asc.__unpin(list_name_ptr);
                asc.__unpin(indexes_ptr);
                keys_ptr && asc.__unpin(keys_ptr);
                switch (type) {
                    case 2:
                        return typeof value === 'number' ? asc.__getString(value) : value;
                    default:
                        return value;
                }
            }
            catch (err) {
                console.error(err);
            }
            return;
        })()
        : undefined;
};
