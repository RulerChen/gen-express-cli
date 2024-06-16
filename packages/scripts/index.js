import { program, Option } from 'commander';

import { TEMPLATES, UNIT_TEST } from '../variables/templates.js';
import { APP_VERSION } from '../variables/data.js';

export default function main(callback) {
  program
    .name('gen-express-cli')
    .usage('[project-name]')
    .version(APP_VERSION, '-v, --version', 'output the current version')
    .arguments('[project-name]', 'project name')
    .addOption(new Option('-t, --template <template-name>', 'choose express template').choices(Object.values(TEMPLATES)))
    .addOption(new Option('-l, --linter <linter-name>', 'choose linter').default(false))
    .addOption(new Option('-u, --unit-test <unit-test-name>', 'choose unit test').choices(Object.values(UNIT_TEST)))
    .addOption(new Option('-a, --api-doc', 'use swagger for API documentation').default(false))
    .action(() => callback(program));

  program.parse(process.argv);
}
