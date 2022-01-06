import { asc_type } from '../interfaces/asc.interface';

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
export const get = (
  asc: asc_type,
  list_name: string,
  indexes: Int32Array,
  keys: string[] | undefined,
  type: 0 | 1 | 2 | 3,
  ellipsis_length?: number
): string | number | boolean | undefined => {
  return asc
    ? (() => {
        try {
          const value: number | boolean = [asc.get_integer, asc.get_float, asc.get_string, asc.get_boolean][type](
            asc.__newString(list_name),
            asc.__newArray(asc.Int32Array_ID, indexes),
            keys ? asc.__newString(JSON.stringify(keys)) : null,
            ellipsis_length
          );

          switch (type) {
            case 2:
              return typeof value === 'number' ? asc.__getString(value) : value;

            default:
              return value;
          }
        } catch (err) {
          console.error(err);
        }
        return;
      })()
    : undefined;
};
