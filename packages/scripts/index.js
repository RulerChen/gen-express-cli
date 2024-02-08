import { program, Option } from 'commander';

import { TEMPLATES, UNIT_TEST, E2E_TEST } from '../variables/templates.js';
import { APP_VERSION } from '../variables/data.js';

export default function main(callback) {
  program
    .name('gen-express-cli')
    .usage('[project-name]')
    .version(APP_VERSION, '-v, --version', 'output the current version')
    .arguments('[project-name]', 'project name')
    .addOption(new Option('-t, --template <template-name>', 'choose express template').choices(Object.keys(TEMPLATES)))
    .addOption(new Option('-l, --linter <linter-name>', 'choose linter').choices(['eslint', 'none']))
    .addOption(new Option('-u, --unit-test <unit-test-name>', 'choose unit test').choices(Object.keys(UNIT_TEST)))
    .addOption(new Option('-e, --e2e-test <e2e-test-name>', 'choose e2e test').choices(Object.keys(E2E_TEST)))
    .action(() => callback(program));

  program.parse(process.argv);
}
