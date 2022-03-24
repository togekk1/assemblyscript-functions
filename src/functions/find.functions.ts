import { find as asc_find, find_index as asc_find_index } from '../../lib/wasm/main.optimized';

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
export const find = ({
  list_name,
  key,
  value,
  query_key,
  type,
  is_included
}: {
  list_name: string;
  key: string;
  value: number | string | boolean;
  query_key?: string;
  type?: number;
  is_included?: 1;
}): Object | string | number | null => {
  return (() => {
    const response = asc_find(list_name, key, value.toString(), query_key ?? null, type ?? 0, is_included ?? 0);

    if (response)
      try {
        return JSON.parse(response);
      } catch (err) {
        // Response is a string
        return response;
      }
  })();
};

export const find_index = ({
  list_name,
  key,
  value,
  query_key,
  type
}: {
  list_name: string;
  key: string;
  value: number | string | boolean;
  query_key?: string;
  type?: number;
}): number => {
  return (() => {
    const response = asc_find_index(list_name, key, value.toString(), query_key ? query_key : null, type ?? 0);

    return response;
  })();
};
