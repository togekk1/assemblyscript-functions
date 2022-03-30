import { JSON } from 'assemblyscript-json/assembly';
export * from './functions/external/get';
export * from './functions/external/find';
export * from './functions/external/store-json';
export * from './functions/external/sort';

export let data: JSON.Obj = new JSON.Obj();
