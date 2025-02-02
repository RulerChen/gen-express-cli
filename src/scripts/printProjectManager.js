import inquirer from 'inquirer';
import { PACKAGE_MANAGER } from '../variables/templates.js';

export default async function printProjectManager() {
  const iq = await inquirer.prompt({
    name: 'manager',
    type: 'list',
    message: 'Select a package manager: ',
    choices: PACKAGE_MANAGER,
    default: 'npm',
  });

  return iq.manager;
}
