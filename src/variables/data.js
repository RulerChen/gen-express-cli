import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const APP_NAME = 'GEN-EXPRESS-CLI';
export const APP_AUTHOR = 'RulerChen';
export const APP_LICENSE = 'MIT';
export const APP_URL = 'https://github.com/RulerChen/gen-express-cli';
export const APP_VERSION = getVersion();

function getVersion() {
  return JSON.parse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '../', 'package.json'))).version;
}
