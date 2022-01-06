import type { ASUtil } from '@assemblyscript/loader';

export type asc_type = main_type & i18n_type;

interface main_type extends ASUtil, worker_type, schema_page_type, results_tab_type, table_type, bucket_page_type, object_page_type {
  find: (list_name: number, key: number, value: number | boolean, query_key: number | undefined, type: number, is_included: number) => number;
  find_index: (list_name: number, key: number, value: number | boolean, query_key: number | undefined, type: number) => number;
  store_json: (list_name: number, list: number, no_underscore: number) => void;
  get_integer: get_number;
  get_float: get_number;
  get_string: (...args: args_type) => number;
  get_boolean: (...args: args_type) => boolean;
  sort: (list_name: number, sort_key: number, descending: number | boolean) => number;
  Int32Array_ID: number;
  free: () => void;
  memory_indexes: WebAssembly.Memory;
}

export interface i18n_type extends ASUtil {
  _switch: (language: number) => void;
  get: (key: number) => number;
}

interface schema_page_type {
  expand_catalog: (index: number) => number;
  expand_schema: (schema_index: number) => number;
  get_catalog_length: () => number;
  get_schema_length: () => number;
  get_table_length: () => number;
  get_schemas_length: () => number | null;
  get_catalog_names: () => number;
  merge_table_data: () => void;
}

interface bucket_page_type {
  get_bucket_length: () => number;
  process_buckets: (subscription_id_to_filter: number) => void;
}

interface object_page_type {
  process_objects: () => void;
  process_folders: () => void;
}

interface results_tab_type {
  // get_results_columns_length: () => number;
  get_result_cols: () => number | null;
  get_values: () => number | null;
}

interface table_type {
  get_data_length: (list_name: number) => number;
}

type get_number = (...args: args_type) => number;
type args_type = [list_name: number, indexes: number, keys: number | null, ellipsis_length?: number];

interface worker_type {
  array_buffer: ArrayBuffer;
}
