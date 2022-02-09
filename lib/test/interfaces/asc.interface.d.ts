import type { ASUtil } from '@assemblyscript/loader';
export declare type asc_type = main_type & i18n_type;
export interface main_type extends ASUtil, worker_type {
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
declare type get_number = (...args: args_type) => number;
declare type args_type = [list_name: number, indexes: number, keys: number | null, ellipsis_length?: number];
interface worker_type {
    array_buffer: ArrayBuffer;
}
export {};
