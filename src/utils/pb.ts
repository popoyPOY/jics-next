import PocketBase from 'pocketbase';

const timestamp = new Date().getTime();

export const exp = timestamp + (60 * 60 * 24 * 1000 * 1);
export const PB_URL = "http://127.0.0.1:8090";

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const pb = new PocketBase("http://127.0.0.1:8090");
