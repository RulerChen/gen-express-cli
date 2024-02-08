import inquirer from 'inquirer';

export default async function askTemplate() {
  const iq = await inquirer.prompt({
    name: 'linter',
    type: 'confirm',
    message: 'Do you want to use eslint and prettier?',
    default: true,
  });

  return iq.linter;
}
