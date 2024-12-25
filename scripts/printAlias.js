import inquirer from 'inquirer';

export default async function printAlias() {
  const iq = await inquirer.prompt({
    name: 'alias',
    type: 'confirm',
    message: 'Do you want to use alias for your project?',
    default: false,
  });

  return iq.alias;
}
