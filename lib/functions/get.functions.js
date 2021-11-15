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
            const { main } = asc;
            try {
                const value = [main.get_integer, main.get_float, main.get_string, main.get_boolean][type](main.__newString(list_name), main.__newArray(main.Int32Array_ID, indexes), keys ? main.__newString(JSON.stringify(keys)) : null, ellipsis_length);
                switch (type) {
                    case 2:
                        return typeof value === 'number' ? main.__getString(value) : value;
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
