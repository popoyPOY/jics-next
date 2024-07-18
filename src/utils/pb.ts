import PocketBase from 'pocketbase';

const timestamp = new Date().getTime();

export const exp = timestamp + (60 * 60 * 24 * 1000 * 1);
export const PB_URL = "http://pocketbase-zc4408o.91.205.104.219.sslip.io";

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const pb = new PocketBase(PB_URL);
