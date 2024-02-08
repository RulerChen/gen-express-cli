import inquirer from 'inquirer';
import { E2E_TEST } from '../variables/templates.js';

export default async function printProjectManager() {
  const iq = await inquirer.prompt({
    name: 'e2eTest',
    type: 'list',
    message: 'Select an E2E test: ',
    choices: Object.keys(E2E_TEST),
    default: 'SuperTest',
  });

  return E2E_TEST[iq.e2eTest];
}
