/** src/assembly/index/Int32Array_ID */
export declare const Int32Array_ID: {
  /** @type `u32` */
  get value(): number
};
/** src/assembly/index/data */
export declare const data: {
  /** @type `~lib/assemblyscript-json/assembly/JSON/Obj` */
  get value(): __Internref8;
  set value(value: __Internref8);
};
/**
 * src/assembly/functions/external/get/get_integer
 * @param list_name `~lib/string/String`
 * @param indexes `~lib/typedarray/Int32Array`
 * @param keys `~lib/string/String | null`
 * @returns `i64`
 */
export declare function get_integer(list_name: string, indexes: Int32Array, keys: string | null): bigint;
/**
 * src/assembly/functions/external/get/get_float
 * @param list_name `~lib/string/String`
 * @param indexes `~lib/typedarray/Int32Array`
 * @param keys `~lib/string/String | null`
 * @returns `f64`
 */
export declare function get_float(list_name: string, indexes: Int32Array, keys: string | null): number;
/**
 * src/assembly/functions/external/get/get_string
 * @param list_name `~lib/string/String`
 * @param indexes `~lib/typedarray/Int32Array`
 * @param keys `~lib/string/String | null`
 * @param ellipsis_length `i32`
 * @returns `~lib/string/String | null`
 */
export declare function get_string(list_name: string, indexes: Int32Array, keys: string | null, ellipsis_length: number): string | null;
/**
 * src/assembly/functions/external/get/get_boolean
 * @param list_name `~lib/string/String`
 * @param indexes `~lib/typedarray/Int32Array`
 * @param keys `~lib/string/String | null`
 * @returns `bool`
 */
export declare function get_boolean(list_name: string, indexes: Int32Array, keys: string | null): boolean;
/**
 * src/assembly/functions/external/find/find_integer
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param query_key `~lib/string/String | null`
 * @param is_included `i32`
 * @returns `i64`
 */
export declare function find_integer(list_name: string, key: string, value: string, query_key: string | null, is_included: number): bigint;
/**
 * src/assembly/functions/external/find/find_float
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param query_key `~lib/string/String | null`
 * @param is_included `i32`
 * @returns `f64`
 */
export declare function find_float(list_name: string, key: string, value: string, query_key: string | null, is_included: number): number;
/**
 * src/assembly/functions/external/find/find_string
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param query_key `~lib/string/String | null`
 * @param is_included `i32`
 * @returns `~lib/string/String | null`
 */
export declare function find_string(list_name: string, key: string, value: string, query_key: string | null, is_included: number): string | null;
/**
 * src/assembly/functions/external/find/find_boolean
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param query_key `~lib/string/String | null`
 * @param is_included `i32`
 * @returns `bool`
 */
export declare function find_boolean(list_name: string, key: string, value: string, query_key: string | null, is_included: number): boolean;
/**
 * src/assembly/functions/external/find/find_string_array
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param query_key `~lib/string/String | null`
 * @param is_included `i32`
 * @returns `~lib/staticarray/StaticArray<~lib/string/String> | null`
 */
export declare function find_string_array(list_name: string, key: string, value: string, query_key: string | null, is_included: number): Array<string> | null;
/**
 * src/assembly/functions/external/find/find_index
 * @param list_name `~lib/string/String`
 * @param key `~lib/string/String`
 * @param value `~lib/string/String`
 * @param is_included `i32`
 * @returns `i32`
 */
export declare function find_index(list_name: string, key: string, value: string, is_included?: number): number;
/**
 * src/assembly/functions/external/store-json/store_json
 * @param list_name `~lib/string/String`
 * @param list_str `~lib/string/String`
 * @param no_underscore `i32`
 */
export declare function store_json(list_name: string, list_str: string, no_underscore: number): void;
/**
 * src/assembly/functions/external/sort/sort
 * @param list_name `~lib/string/String`
 * @param sort_key `~lib/string/String`
 * @param descending `i32`
 * @returns `~lib/string/String | null`
 */
export declare function sort(list_name: string, sort_key: string, descending: number): string | null;
/** ~lib/assemblyscript-json/assembly/JSON/Obj */
declare class __Internref8 extends Number {
  private __nominal8: symbol;
  private __nominal4: symbol;
}
