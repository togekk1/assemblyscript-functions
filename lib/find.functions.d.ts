import type { asc_type } from '../interfaces/asc.interface';
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
export declare const find: ({ asc, list_name, key, value, query_key, type, is_included }: {
    asc: any;
    list_name: string;
    key: string;
    value: number | string | boolean;
    query_key?: string | undefined;
    type?: number | undefined;
    is_included?: 1 | undefined;
}) => Object | string | number | null;
export declare const find_index: ({ asc, list_name, key, value, query_key, type }: {
    asc: any;
    list_name: string;
    key: string;
    value: number | string | boolean;
    query_key?: string | undefined;
    type?: number | undefined;
}) => number;
