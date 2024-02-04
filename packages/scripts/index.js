import { program, Option } from 'commander';

import { TEMPLATES } from '../variables/templates.js';
import { APP_VERSION } from '../variables/data.js';

export default function main(callback) {
  program
    .name('gen-express-cli')
    .usage('[project-name]')
    .version(APP_VERSION, '-v, --version', 'output the current version')
    .arguments('[project-name]', 'project name')
    .addOption(new Option('-t, --template <template-name>', 'choose express template').choices(Object.keys(TEMPLATES)))
    .action(() => callback(program));

  program.parse(process.argv);
}
