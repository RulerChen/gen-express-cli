import inquirer from 'inquirer';
import { TEMPLATES } from '../variables/templates.js';

export default async function askTemplate() {
  const iq = await inquirer.prompt({
    name: 'template',
    type: 'list',
    message: 'Select a template: ',
    choices() {
      return Object.keys(TEMPLATES);
    },
    default: 'typescript',
  });

  return TEMPLATES[iq.template];
}
