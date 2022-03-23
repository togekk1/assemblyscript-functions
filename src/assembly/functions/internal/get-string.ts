import { JSON } from 'assemblyscript-json/assembly';

export function get_string(item_to_query: JSON.Value | null, key: string): string | null {
  const key_array: string[] = key.split('.');
  let obj: JSON.Obj | null = <JSON.Obj | null>item_to_query;

  for (let i = 0; i < key_array.length; i++) {
    if (obj)
      if (i < key_array.length - 1) {
        obj = obj.getObj(key_array[i]);
      } else {
        const string = obj.getString(key_array[i]);
        return string ? string.valueOf() : null;
      }
  }
  return null;
}
