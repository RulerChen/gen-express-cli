import inquirer from 'inquirer';
import { UNIT_TEST } from '../variables/templates.js';

export default async function printProjectManager() {
  const iq = await inquirer.prompt({
    name: 'unitTest',
    type: 'list',
    message: 'Select a unit test: ',
    choices: Object.keys(UNIT_TEST),
    default: 'Jest',
  });

  return UNIT_TEST[iq.unitTest];
}
