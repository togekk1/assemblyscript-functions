async function instantiate(module, imports = {}) {
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    data: {
      // src/assembly/index/data: ~lib/assemblyscript-json/assembly/JSON/Obj
      valueOf() { return this.value; },
      get value() {
        return __liftInternref(exports.data.value >>> 0);
      },
      set value(value) {
        exports.data.value = __lowerInternref(value) || __notnull();
      }
    },
    get_integer(list_name, indexes, keys) {
      // src/assembly/functions/external/get/get_integer(~lib/string/String, ~lib/typedarray/Int32Array, ~lib/staticarray/StaticArray<~lib/string/String|null> | null) => i64
      list_name = __retain(__lowerString(list_name) || __notnull());
      indexes = __retain(__lowerTypedArray(Int32Array, 7, 2, indexes) || __notnull());
      keys = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerString(value); }, 6, 2, keys);
      try {
        return exports.get_integer(list_name, indexes, keys);
      } finally {
        __release(list_name);
        __release(indexes);
      }
    },
    get_float(list_name, indexes, keys) {
      // src/assembly/functions/external/get/get_float(~lib/string/String, ~lib/typedarray/Int32Array, ~lib/staticarray/StaticArray<~lib/string/String|null> | null) => f64
      list_name = __retain(__lowerString(list_name) || __notnull());
      indexes = __retain(__lowerTypedArray(Int32Array, 7, 2, indexes) || __notnull());
      keys = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerString(value); }, 6, 2, keys);
      try {
        return exports.get_float(list_name, indexes, keys);
      } finally {
        __release(list_name);
        __release(indexes);
      }
    },
    get_string(list_name, indexes, keys, ellipsis_length) {
      // src/assembly/functions/external/get/get_string(~lib/string/String, ~lib/typedarray/Int32Array, ~lib/staticarray/StaticArray<~lib/string/String|null> | null, i32?) => ~lib/string/String | null
      list_name = __retain(__lowerString(list_name) || __notnull());
      indexes = __retain(__lowerTypedArray(Int32Array, 7, 2, indexes) || __notnull());
      keys = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerString(value); }, 6, 2, keys);
      try {
        exports.__setArgumentsLength(arguments.length);
        return __liftString(exports.get_string(list_name, indexes, keys, ellipsis_length) >>> 0);
      } finally {
        __release(list_name);
        __release(indexes);
      }
    },
    get_boolean(list_name, indexes, keys) {
      // src/assembly/functions/external/get/get_boolean(~lib/string/String, ~lib/typedarray/Int32Array, ~lib/staticarray/StaticArray<~lib/string/String|null> | null) => bool
      list_name = __retain(__lowerString(list_name) || __notnull());
      indexes = __retain(__lowerTypedArray(Int32Array, 7, 2, indexes) || __notnull());
      keys = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerString(value); }, 6, 2, keys);
      try {
        return exports.get_boolean(list_name, indexes, keys) != 0;
      } finally {
        __release(list_name);
        __release(indexes);
      }
    },
    find_integer(list_name, key, value, query_key, is_included) {
      // src/assembly/functions/external/find/find_integer(~lib/string/String, ~lib/string/String, ~lib/string/String, ~lib/string/String | null, i32?) => i64
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __retain(__lowerString(value) || __notnull());
      query_key = __lowerString(query_key);
      try {
        exports.__setArgumentsLength(arguments.length);
        return exports.find_integer(list_name, key, value, query_key, is_included);
      } finally {
        __release(list_name);
        __release(key);
        __release(value);
      }
    },
    find_float(list_name, key, value, query_key, is_included) {
      // src/assembly/functions/external/find/find_float(~lib/string/String, ~lib/string/String, ~lib/string/String, ~lib/string/String | null, i32?) => f64
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __retain(__lowerString(value) || __notnull());
      query_key = __lowerString(query_key);
      try {
        exports.__setArgumentsLength(arguments.length);
        return exports.find_float(list_name, key, value, query_key, is_included);
      } finally {
        __release(list_name);
        __release(key);
        __release(value);
      }
    },
    find_string(list_name, key, value, query_key, is_included) {
      // src/assembly/functions/external/find/find_string(~lib/string/String, ~lib/string/String, ~lib/string/String, ~lib/string/String | null, i32?) => ~lib/string/String | null
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __retain(__lowerString(value) || __notnull());
      query_key = __lowerString(query_key);
      try {
        exports.__setArgumentsLength(arguments.length);
        return __liftString(exports.find_string(list_name, key, value, query_key, is_included) >>> 0);
      } finally {
        __release(list_name);
        __release(key);
        __release(value);
      }
    },
    find_boolean(list_name, key, value, query_key, is_included) {
      // src/assembly/functions/external/find/find_boolean(~lib/string/String, ~lib/string/String, ~lib/string/String, ~lib/string/String | null, i32?) => bool
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __retain(__lowerString(value) || __notnull());
      query_key = __lowerString(query_key);
      try {
        exports.__setArgumentsLength(arguments.length);
        return exports.find_boolean(list_name, key, value, query_key, is_included) != 0;
      } finally {
        __release(list_name);
        __release(key);
        __release(value);
      }
    },
    find_string_array(list_name, key, value, query_key, is_included) {
      // src/assembly/functions/external/find/find_string_array(~lib/string/String, ~lib/string/String, ~lib/string/String, ~lib/string/String | null, i32?) => ~lib/staticarray/StaticArray<~lib/string/String> | null
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __retain(__lowerString(value) || __notnull());
      query_key = __lowerString(query_key);
      try {
        exports.__setArgumentsLength(arguments.length);
        return __liftStaticArray(pointer => __liftString(new Uint32Array(memory.buffer)[pointer >>> 2]), 2, exports.find_string_array(list_name, key, value, query_key, is_included) >>> 0);
      } finally {
        __release(list_name);
        __release(key);
        __release(value);
      }
    },
    find_index(list_name, key, value, is_included) {
      // src/assembly/functions/external/find/find_index(~lib/string/String, ~lib/string/String, ~lib/string/String, i32?) => i32
      list_name = __retain(__lowerString(list_name) || __notnull());
      key = __retain(__lowerString(key) || __notnull());
      value = __lowerString(value) || __notnull();
      try {
        exports.__setArgumentsLength(arguments.length);
        return exports.find_index(list_name, key, value, is_included);
      } finally {
        __release(list_name);
        __release(key);
      }
    },
    store_json(list_name, list_str, no_underscore) {
      // src/assembly/functions/external/store-json/store_json(~lib/string/String, ~lib/string/String, i32?) => void
      list_name = __retain(__lowerString(list_name) || __notnull());
      list_str = __lowerString(list_str) || __notnull();
      try {
        exports.__setArgumentsLength(arguments.length);
        exports.store_json(list_name, list_str, no_underscore);
      } finally {
        __release(list_name);
      }
    },
    sort(list_name, sort_key, descending) {
      // src/assembly/functions/external/sort/sort(~lib/string/String, ~lib/string/String, i32) => ~lib/string/String | null
      list_name = __retain(__lowerString(list_name) || __notnull());
      sort_key = __lowerString(sort_key) || __notnull();
      try {
        return __liftString(exports.sort(list_name, sort_key, descending) >>> 0);
      } finally {
        __release(list_name);
      }
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 1) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  function __lowerTypedArray(constructor, id, align, values) {
    if (values == null) return 0;
    const
      length = values.length,
      buffer = exports.__pin(exports.__new(length << align, 0)) >>> 0,
      header = exports.__new(12, id) >>> 0,
      memoryU32 = new Uint32Array(memory.buffer);
    memoryU32[header + 0 >>> 2] = buffer;
    memoryU32[header + 4 >>> 2] = buffer;
    memoryU32[header + 8 >>> 2] = length << align;
    new constructor(memory.buffer, buffer, length).set(values);
    exports.__unpin(buffer);
    return header;
  }
  function __liftStaticArray(liftElement, align, pointer) {
    if (!pointer) return null;
    const
      length = new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> align,
      values = new Array(length);
    for (let i = 0; i < length; ++i) values[i] = liftElement(pointer + (i << align >>> 0));
    return values;
  }
  function __lowerStaticArray(lowerElement, id, align, values) {
    if (values == null) return 0;
    const
      length = values.length,
      buffer = exports.__pin(exports.__new(length << align, id)) >>> 0;
    for (let i = 0; i < length; i++) lowerElement(buffer + (i << align >>> 0), values[i]);
    exports.__unpin(buffer);
    return buffer;
  }
  const registry = new FinalizationRegistry(__release);
  class Internref extends Number {}
  function __liftInternref(pointer) {
    if (!pointer) return null;
    const sentinel = new Internref(__retain(pointer));
    registry.register(sentinel, pointer);
    return sentinel;
  }
  function __lowerInternref(value) {
    if (value == null) return 0;
    if (value instanceof Internref) return value.valueOf();
    throw TypeError("internref expected");
  }
  const refcounts = new Map();
  function __retain(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount) refcounts.set(pointer, refcount + 1);
      else refcounts.set(exports.__pin(pointer), 1);
    }
    return pointer;
  }
  function __release(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount === 1) exports.__unpin(pointer), refcounts.delete(pointer);
      else if (refcount) refcounts.set(pointer, refcount - 1);
      else throw Error(`invalid refcount '${refcount}' for reference '${pointer}'`);
    }
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  return adaptedExports;
}
export const {
  data,
  get_integer,
  get_float,
  get_string,
  get_boolean,
  find_integer,
  find_float,
  find_string,
  find_boolean,
  find_string_array,
  find_index,
  store_json,
  sort
} = await (async url => instantiate(
  await (
    typeof globalThis.fetch === "function"
      ? WebAssembly.compileStreaming(globalThis.fetch(url))
      : WebAssembly.compile(await (await import("fs/promises")).readFile(url))
  ), {
  }
))(new URL("main.optimized.wasm", import.meta.url));
